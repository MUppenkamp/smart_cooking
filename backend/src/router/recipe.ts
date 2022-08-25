
// @ts-ignore
import { TRecipeDTO } from '../types/DTO/Recipe';

const express = require('express');
// const { TRecipeDTO } = require('../types/DTO/Recipe');
const router = express.Router();

router.get('/', (req: any, res: any) => {
    res.status(200).json({
        data: [{
            id: 1
        }] as TRecipeDTO[]
    })
})

module.exports = router;
