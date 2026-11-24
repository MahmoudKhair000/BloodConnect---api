import type { Request, Response } from 'express';
import { prismaClient as prisma } from '../lib/prisma.js';

export const tempMethod = async (
	req: Request,
	res: Response,
): Promise<void> => {
	// REQUSET VARIABLES
	// const { id } = req.params;

	// NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS

	// SERVER TRY/CATCH(500) BLOCK
	try {
		// const dbQuery = prisma
	} catch (err) {
		const errMsg =
			err instanceof Error ? err.message : 'Something went wrong in server!!';
		res.status(500).json({ ok: false, message: errMsg });
	}
};
