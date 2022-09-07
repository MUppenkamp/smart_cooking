import express from 'express'
import { createPool, disconnectPool, pgQuery } from '../helper/pgQuery';

const router = express.Router();

router.patch('/:userid/data', async (req, res) => {
    if (!req.params.userid) {
        res.status(400).json({});
        return;
    }

    const connection = await createPool();

    const updateUser = `UPDATE 
                        app_user SET 
                        first_name = COALESCE($2, first_name), 
                        last_name = COALESCE($3, last_name), 
                        mail = COALESCE($4, mail) 
                        WHERE id = $1`

    const updatePassword = `
                        UPDATE app_user
                        SET password = $2
                        WHERE password = $3 AND id = $1`;

    if (req.body?.firstName || req.body?.lastName || req.body?.mail) {
        await pgQuery(connection, updateUser, [
            req.params.userid,
            req.body?.firstName,
            req.body?.lastName,
            req.body?.mail
        ]);
    }

    if (req.body.oldPassword && req.body.newPassword) {
        const resp = await pgQuery(connection, updatePassword, [
            req.params.userid,
            req.body.newPassword,
            req.body.oldPassword
        ]);

        if (!resp?.rowCount || resp.rowCount <= 0) {
            await disconnectPool(connection);
            res.status(403).json({});
        }
    }

    await disconnectPool(connection);
    res.status(204).json({});
});

export default router;
