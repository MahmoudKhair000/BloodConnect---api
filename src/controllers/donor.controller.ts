import type { Request, Response } from 'express';
import { prismaClient as prisma } from '../lib/prisma.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

/***************************************************************************/
export const tempMethod = async (
	req: Request,
	res: Response,
): Promise<void> => {
	// REQUSET VARIABLES
	// const { id } = req.params;

	// NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS

	try {
		// // SERVER TRY/CATCH(500) BLOCK
		// const dbQuery = prisma
		res.status(200).json({ ok: true, message: 'done successfully!' });
	} catch (err) {
		const errMsg =
			err instanceof Error ? err.message : 'Something went Wrong!!';
		res.status(500).json({ ok: false, message: errMsg });
	}
};
/***************************************************************************/
export const getAllDonors = async (
	req: Request,
	res: Response,
): Promise<void> => {
	// REQUSET VARIABLES
	// const { id } = req.params;

	// NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS

	try {
		// // SERVER TRY/CATCH(500) BLOCK
		const donors = await prisma.donor.findMany({
			omit: {
				isVerified: true,
				passwordHash: true,
			},
		});
		res.status(200).json({
			ok: true,
			message: 'done successfully!',
			data: donors,
		});
	} catch (err) {
		const errMsg =
			err instanceof Error ? err.message : 'Something went Wrong!!';
		res.status(500).json({ ok: false, message: errMsg });
	}
};
/***************************************************************************/
export const getDonorById = async (
	req: Request,
	res: Response,
): Promise<void> => {
	// REQUSET VARIABLES
	const { id } = req.params as { id: string };

	// NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
	if (!id) {
		res.status(404).json({
			ok: false,
			message: 'id was not found!!',
		});
		return;
	}

	// SERVER TRY/CATCH(500) BLOCK
	try {
		const donors = await prisma.donor.findUnique({
			where: { id },
			omit: {
				isVerified: true,
				passwordHash: true,
			},
		});
		res.status(200).json({
			ok: true,
			message: 'done successfully!',
			data: donors,
		});
	} catch (err) {
		const errMsg =
			err instanceof Error ? err.message : 'Something went Wrong!!';
		res.status(500).json({ ok: false, message: errMsg });
	}
};
/***************************************************************************/
export const createDonor = async (
	req: Request,
	res: Response,
): Promise<void> => {
	// REQUSET VARIABLES
	const { firstName, lastName, email, contactPhone, bloodGroup, password } =
		req.body;

	// const salt = await bcrypt.genSalt(12);
	const passwordHash = await bcrypt.hash(password, 12);
	////////////////////////////////////////////////////
	if (validator.isEmail(email)) {
		res.status(400).json({
			ok: false,
			message: 'Make sure you entered a valid email',
		});
		///////
		return;
	}
	// SERVER TRY/CATCH(500) BLOCK
	try {
		const newDonor = await prisma.donor.create({
			data: {
				email,
				lastName,
				firstName,
				bloodGroup,
				contactPhone,
				passwordHash,
			},
			omit: {
				passwordHash: true,
			},
		});
		res.status(200).json({
			ok: true,
			message: 'done successfully!',
			data: newDonor,
		});
	} catch (err) {
		const errMsg =
			err instanceof Error ? err.message : 'Something went Wrong!!';
		res.status(500).json({ ok: false, message: errMsg });
	}
};
/***************************************************************************/
export const loginDoner = async (
	req: Request,
	res: Response,
): Promise<void> => {
	// REQUEST VARIABLES
	const { email, password } = req.body;
	const jwtSecret = process.env.JWT_SECRET;

	// NON-SERVER LOGIC
	if (!jwtSecret) {
		res.status(402).json({
			ok: false,
			message: 'Authentication is not set up!',
		});
		return;
	}
	////////////////////////////////////////////////////
	if (typeof email !== 'string' || typeof password !== 'string') {
		res.status(400).json({
			ok: false,
			message: 'Make sure you entered the email and password!!',
		});
		///////
		return;
	}

	// SERVER-WISE LOGIC
	try {
		const donorUser = await prisma.donor.findUnique({ where: { email } });
		if (!donorUser) {
			res.status(404).json({
				ok: false,
				message: 'Donor user was not found !!',
			});
			return;
		}
		////////
		const isValid = bcrypt.compare(password, donorUser?.passwordHash);
		if (!isValid) {
			res.status(402).json({
				ok: false,
				message: 'Wrong password!',
			});
			///////
			return;
		}
		///////////////////////////
		const token = jwt.sign(
			{
				id: donorUser.id,
				email: donorUser.email,
				type: 'donor',
			},
			jwtSecret,
			{
				expiresIn: '1 hour',
			},
		);
		////////
		res.status(200).json({
			ok: true,
			message: 'Donor logged in successfully!',
			data: {
				user: donorUser,
				token,
			},
		});
	} catch (err) {
		const errMsg = err instanceof Error ? err.message : 'Something went wrong!';
		res.status(500).json({
			ok: false,
			message: errMsg,
		});
	}
};
/***************************************************************************/
export const editDonor = async (req: Request, res: Response): Promise<void> => {
	// REQUSET VARIABLES
	const donorUpdate = req.body;
	const { id } = req.params as { id: string };

	// NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
	if (!id) {
		res.status(404).json({
			ok: false,
			message: 'Id was not found !!',
		});
		return;
	}

	try {
		// // SERVER TRY/CATCH(500) BLOCK
		const newDonor = await prisma.donor.update({
			where: { id },
			data: donorUpdate,
		});
		res.status(200).json({
			ok: true,
			message: 'done successfully!',
			data: newDonor,
		});
	} catch (err) {
		const errMsg =
			err instanceof Error ? err.message : 'Something went Wrong!!';
		res.status(500).json({ ok: false, message: errMsg });
	}
};
