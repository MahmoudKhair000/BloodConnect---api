import { prismaClient as prisma } from '../lib/prisma.js';
export const tempMethod = async (req, res) => {
    // REQUSET VARIABLES
    // const { id } = req.params;
    // NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
    try {
        // // SERVER TRY/CATCH(500) BLOCK
        // const dbQuery = prisma
    }
    catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went Wrong!!';
        res.status(500).json({ ok: false, message: errMsg });
    }
};
export const getAllRequests = async (req, res) => {
    // REQUSET VARIABLES
    // const { id } = req.params;
    // NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
    try {
        // // SERVER TRY/CATCH(500) BLOCK
        const requests = await prisma.bloodRequest.findMany();
        res.status(200).json({
            ok: true,
            message: 'Requests retreived successfully!',
            data: requests,
        });
    }
    catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went Wrong!!';
        console.error(err);
        res.status(500).json({ ok: false, message: errMsg });
    }
};
export const getRequest = async (req, res) => {
    // REQUSET VARIABLES
    const id = req.params.id instanceof Array ? req.params.id[0] : req.params.id;
    // NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
    if (!id) {
        res.status(400).json({ ok: false, message: 'Request id is required!' });
        return;
    }
    // SERVER TRY/CATCH(500) BLOCK
    try {
        const request = await prisma.bloodRequest.findMany({
            where: { id },
        });
        //
        res.status(200).json({
            ok: true,
            message: `Request ${id} retreived successfully!`,
            data: request,
        });
        //
    }
    catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went Wrong!!';
        res.status(500).json({ ok: false, message: errMsg });
    }
};
export const createRequest = async (req, res) => {
    // REQUSET VARIABLES
    const newRequest = req.body;
    // NON-SERVER LOGIC, BEFORE ANY DB OPERATIONS
    if (!newRequest) {
        res.status(404).json({
            ok: false,
            message: 'The request is missing the body',
        });
        return;
    }
    // SERVER TRY/CATCH(500) BLOCK
    try {
        const newRequestRow = await prisma.bloodRequest.create({
            data: newRequest,
        });
        res.status(200).json({
            ok: true,
            message: 'Request created successfully!!',
            data: newRequestRow,
        });
    }
    catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went Wrong!!';
        res.status(500).json({ ok: false, message: errMsg });
    }
};
//# sourceMappingURL=blood-request.controller.js.map