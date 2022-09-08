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
                        WHERE id = $1 AND mail <> $4`

    const updatePassword = `
                        UPDATE app_user
                        SET password = $2
                        WHERE password = $3 AND id = $1`;

    if (req.body?.firstName || req.body?.lastName || req.body?.mail) {
        const resp = await pgQuery(connection, updateUser, [
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

router.post('/login', async (req, res) => {
    if (!req.body?.password || !req.body?.mail) {
        res.status(400).json({});
        return;
    }

    const connection = createPool();

    const getUserViaPassword = `
            SELECT *
            FROM app_user
            WHERE password = $1 AND mail = $2`;

    const user = await pgQuery<{
        id: number,
        first_name: string,
        last_name: string,
        password: string,
        mail: string,
        picture?: string
    }>(connection, getUserViaPassword, [req.body.password, req.body.mail]);

    if (!user?.rowCount || user.rowCount <= 0) {
        res.status(204).json({});
        return;
    }
    await disconnectPool(connection);

    const userData = user.rows[0];


    res.status(200).json({
        data: {
            id: userData?.id,
            firstName: userData?.first_name,
            lastName: userData?.last_name,
            password: userData?.password,
            mail: userData?.mail,
            picture: userData?.picture,

        }
    });
});

router.post('/register', async (req, res) => {
    if (!req.body?.password
        || !req.body?.mail
        || !req.body?.firstName
        || !req.body?.lastName
    ) {
        res.status(400).json({});
        return;
    }

    const connection = createPool();

    const createUser = "INSERT INTO app_user(first_name, last_name, password, mail) VALUES ($1, $2, $3, $4) RETURNING *";

    const user = await pgQuery(connection, createUser, [req.body.firstName, req.body.lastName, req.body.password, req.body.mail]);

    if (!user?.rowCount || user.rowCount <= 0) {
        res.status(204).json({});
        return;
    }
    await disconnectPool(connection);
    res.status(200).json({
        data: user.rows[0]
    });
});

export default router;
