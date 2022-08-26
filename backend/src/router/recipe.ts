
// @ts-ignore
import { TRecipeDTO } from '../types/DTO/Recipe';
import express from 'express'

const router = express.Router();

router.get('/', (req: any, res: any) => {
    res.status(200).json({
        data: [{
            id: 1
        }] as TRecipeDTO[]
    })
})

export default router;
