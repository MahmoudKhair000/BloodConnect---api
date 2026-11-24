import { prismaClient } from '../lib/prisma.js';

try {
	await prismaClient.$connect();

	const result = await prismaClient.$queryRaw`SELECT 1`;

	console.log('Database connection successful:', result);
} catch (error) {
	console.error('Database connection failed:', error);
	process.exitCode = 1;
} finally {
	await prismaClient.$disconnect();
}
