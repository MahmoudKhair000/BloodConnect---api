import type { NextFunction, Request, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { prismaClient } from '../lib/prisma.js';

export interface AuthLocals {
	session: {
		id: string;
		type: 'staffMember' | 'donor';
	};
}

export const auth = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	const jwtSecret = process.env.JWT_SECRET;
	if (!jwtSecret) {
		res.status(500).json({
			ok: false,
			message: "Authentication isn't configured",
		});
		return;
	}

	//////////
	const authorization = req.header('Authorization');
	const match = authorization?.match(/^Bearer\s+(\S)$/i);
	if (!match) {
		res.status(401).json({
			ok: false,
			message: 'Unauthorized',
		});
		return;
	}

	//////////
	try {
		const jwtPayload = jwt.verify(match[1]!, jwtSecret);
		if (
			!jwtPayload
			|| typeof jwtPayload !== 'object'
			|| typeof jwtPayload.email !== 'string'
			|| !jwtPayload.id
			|| !jwtPayload.type
		)
			return;
		//
		res.locals.session = {
			id: jwtPayload.id,
			type: jwtPayload.type,
		};
	} catch (err) {
		if (err instanceof JsonWebTokenError) {
			res.status(403).json({
				ok: false,
				message: 'Unauthorized',
			});
		}
		throw err;
	}

	//////////
	next();
};

export const owner = async (
	req: Request,
	res: Response<unknown, AuthLocals>,
	next: NextFunction,
): Promise<void> => {
	//////////////////
	const resSession = (res.locals as AuthLocals).session;
	const paramsId = req.params.id;
	//////////////////
	if (
		!resSession
		|| !resSession.type
		|| (resSession.type !== 'donor' && resSession.type !== 'staffMember')
	) {
		res.status(401).json({
			ok: false,
			message: 'Unauthorized',
		});
		return;
	}
	//////////////
	const user =
		resSession.type === 'staffMember'
			? await prismaClient.staffMember.findUnique({
					where: { id: resSession.id },
				})
			: await prismaClient.donor.findUnique({
					where: { id: resSession.id },
				});
	// // // // // //
	if (!user) {
		res.status(401).json({
			ok: false,
			message: 'Unauthorized',
		});
		return;
	}
	////////////////
	const isOwner = user.id === paramsId;
	////////////////
	if (!isOwner) {
		res.status(403).json({
			ok: false,
			message: 'Action Forbidden !!',
		});
		return;
	}
	////////////////
	next();
};

// This works only with hospital users
export const ownerOrAdmin = async (
	req: Request,
	res: Response<unknown, AuthLocals>,
	next: NextFunction,
): Promise<void> => {
	//////////////////
	const resSession = (res.locals as AuthLocals).session;
	const paramsId = req.params.id;
	//////////////////
	if (
		!resSession
		|| !resSession.type
		|| (resSession.type !== 'donor' && resSession.type !== 'staffMember')
	) {
		res.status(401).json({
			ok: false,
			message: 'Unauthorized',
		});
		return;
	}
	//////////////
	const user = await prismaClient.staffMember.findUnique({
		where: { id: resSession.id },
	});

	// // // // // //
	if (!user) {
		res.status(401).json({
			ok: false,
			message: 'Unauthorized',
		});
		return;
	}
	////////////////
	const isOwner = user.id === paramsId;
	const isAdmin = user.role === 'HOSPITAL_ADMIN';
	////////////////
	if (!isOwner && !isAdmin) {
		res.status(403).json({
			ok: false,
			message: 'Action Forbidden !!',
		});
		return;
	}
	/////////////////////
	next();
};

export const admin = async (
	req: Request,
	res: Response<unknown, AuthLocals>,
	next: NextFunction,
): Promise<void> => {
	//////////////////
	const resSession = (res.locals as AuthLocals).session;
	//////////////////
	if (!resSession || resSession.type !== 'staffMember') {
		res.status(401).json({
			ok: false,
			message: 'Unauthorized',
		});
		return;
	}
	////////////////
	const user = await prismaClient.staffMember.findUnique({
		where: { id: resSession.id },
	});
	////////////////
	if (!user) {
		res.status(401).json({
			ok: false,
			message: 'Unauthorized',
		});
		return;
	}
	////////////////
	const isAdmin = user.role === 'HOSPITAL_ADMIN';
	////////////////
	if (!isAdmin) {
		res.status(403).json({
			ok: false,
			message: 'Action Forbidden !!',
		});
		return;
	}
	/////////////////////
	next();
};
