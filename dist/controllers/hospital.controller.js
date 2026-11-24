import { prismaClient as prisma } from '../lib/prisma.js';
export const getAllHospitals = async (req, res) => {
    // REQUSET VARIABLES
    // const { id } = req.params;
    // NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
    // SERVER TRY/CATCH(500) BLOCK
    try {
        const hospitals = await prisma.hospital.findMany();
        res.status(200).json({
            ok: true,
            message: 'hospitals retreived successfully!!',
            data: hospitals,
        });
    }
    catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went wrong in server!!';
        res.status(500).json({ ok: false, message: errMsg });
    }
};
export const getHospitalById = async (req, res) => {
    // REQUSET VARIABLES
    const { id } = req.params;
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
        const hospital = await prisma.hospital.findUnique({ where: { id } });
        res.status(200).json({
            ok: true,
            message: `hospital ${id.slice(0, 8)}.. retreived successfully!!`,
            data: hospital,
        });
    }
    catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went wrong in server!!';
        res.status(500).json({ ok: false, message: errMsg });
    }
};
export const tempMethod = async (req, res) => {
    // REQUSET VARIABLES
    // const { id } = req.params;
    // NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
    // SERVER TRY/CATCH(500) BLOCK
    try {
        // const dbQuery = await prisma
    }
    catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went wrong in server!!';
        res.status(500).json({ ok: false, message: errMsg });
    }
};
//# sourceMappingURL=hospital.controller.js.map