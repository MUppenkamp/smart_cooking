import express from 'express';
import cors from 'cors';

const app = express();

import { pgQuery, disconnectPool, createPool } from '. helper pgQuery';
import recipe from './router/recipe'
import user from './router/user';
import { recipeRandomise } from './helper/recipeRandomise';
import { Pool } from 'pg';

app.use(cors());

app.use(express.json())

app.use('/recipe', recipe);
app.use('/user', user);

const createData = async (
    pool2: Pool,
    userName: string,
    userLastName: string,
    userEmail: string,
    recipeName: string,
    recipeDescription: string,
    ingredient: {
        name: string,
        quantity: number
    }[]
) => {
    const user = await pgQuery<{ id: number }>(pool2, createUser, [userName, userLastName, userName, userEmail]);
    if (!user?.rowCount) return;

    const recipe = await pgQuery<{ id: number }>(pool2, createReceipt, [recipeName, 20, 1, recipeDescription, 10, 10, 10, 10, 10, 'https:  www.gutekueche.at storage media recipe 113180 conv nudeln-in-tomatensauce-default.jpg']);
    if (!recipe?.rowCount) return;

    const userId = Number(user.rows[0].id);
    const recipeId = Number(recipe.rows[0].id);
    await pgQuery(pool2, createUser2Receipt, [userId, recipeId, true, true]);
    ingredient.forEach((id) => {
        pgQuery(pool2, createQuantityUnit, ['Gramm']);
        pgQuery(pool2, createQuantityIngredient, [recipeId, id.name, id.quantity, 1]);
    })
}

const createRecipe = async (
    pool2: Pool,
    recipeName: string,
    duration: number,
    difficulty: number,
    recipeDescription: string,
    portion: number,
    pic: string,
    ingredient: {
        name: string,
        quantity: number,
        quantityId: number
    }[],
    calorific?: number,
    protein?: number,
    fat?: number,
    carbohydrates?: number,
) => {
    // name, duration, difficulty_id, description, calorific_value, protein, fat, carbohydrates, portion, picture
    const recipe = await pgQuery<{ id: number }>(pool2, createReceipt, [recipeName, duration, difficulty, recipeDescription, calorific, protein, fat, carbohydrates, portion, pic]);
    if (!recipe?.rowCount) return;

    const recipeId = Number(recipe.rows[0].id);
    ingredient.forEach((id) => {
        pgQuery(pool2, createQuantityIngredient, [recipeId, id.name, id.quantity, id.quantityId]);
    })
}
const createInitData = async () => {
    const pool = createPool();

    await pgQuery(pool, createUserTable);
    await pgQuery(pool, createRecipeWeekTable);
    await pgQuery(pool, createDifficultyTable);
    await pgQuery(pool, createRecipeTable);
    await pgQuery(pool, createUser2RecipeTable);
    await pgQuery(pool, createRecipeWeekDayTable);
    await pgQuery(pool, createQuantityUnitTable);
    await pgQuery(pool, createRecipeIngredientTable);
    await pgQuery(pool, createRecipeWeekDayShoppingList);

    console.log('created table');


    await pgQuery(pool, createDifficulty, ['Leicht']);
    await pgQuery(pool, createDifficulty, ['Normal']);
    await pgQuery(pool, createDifficulty, ['Schwer']);
    await pgQuery(pool, createDifficulty, ['Experte']);


    await pgQuery(pool, createQuantityUnit, ['g']);
    await pgQuery(pool, createQuantityUnit, ['kg']);
    await pgQuery(pool, createQuantityUnit, ['EL']);
    await pgQuery(pool, createQuantityUnit, ['TL']);
    await pgQuery(pool, createQuantityUnit, ['Pck.']);
    await pgQuery(pool, createQuantityUnit, ['Anzahl']);
    await pgQuery(pool, createQuantityUnit, ['Prisen']);
    await pgQuery(pool, createQuantityUnit, ['Bund']);

    const quantity = {
        g: 1,
        kg: 2,
        el: 3,
        tl: 4,
        pck: 5,
        anzahl: 6,
        prise: 7,
        bund: 8
    }

    const selectRecipe = 'select * from recipe';

    const recipe = await pgQuery(pool, selectRecipe);

    if (!recipe?.rowCount || recipe.rowCount <= 0) {
        await createRecipe(
            pool,
            'Penne mit Paprika-Walnuss-Sauce',
            20,
            2,
            'Penne mit Sauce    TODO',
            4,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets 569f6961-9d2c-462d-b48a-366c47a3e8f7 Derivates 684e5124-e59c-4d18-959b-7dc627c769af.jpg',
            [{
                name: 'Petersilie',
                quantity: 0.5,
                quantityId: quantity.bund
            }, {
                name: 'Wasser',
                quantityId: 1,
                quantity: 1500
            }, {
                name: 'Salz',
                quantity: 2.75,
                quantityId: 4
            }, {
                name: 'Spitzpaprika',
                quantityId: 1,
                quantity: 300
            }, {
                name: 'Knoblauchzehen',
                quantity: 3,
                quantityId: quantity.anzahl
            }, {
                name: 'Walnusshälften',
                quantity: 80,
                quantityId: quantity.g
            }, {
                name: 'Penne',
                quantity: 500,
                quantityId: quantity.g
            }, {
                name: 'Olivenöl',
                quantity: 20,
                quantityId: quantity.g
            }, {
                name: 'Biber Salcasi (Paprikamark)',
                quantity: 2,
                quantityId: quantity.tl
            }, {
                name: 'Oregano',
                quantity: 1,
                quantityId: quantity.tl
            }, {
                name: 'Paprika rosenscharf',
                quantity: 0.25,
                quantityId: quantity.tl
            }],
            637,
            19,
            19
        );

        await createRecipe(
            pool,
            'Dattel-Curry-Dip',
            5,
            1,
            'Dattel-Curry-Dip',
            12,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets B3296F17-ACC5-4093-B868-D907693BBB85 Derivates F99BFC6E-ADE7-4F80-8988-8BD07CC6A256.jpg',
            [{
                name: 'Datteln',
                quantity: 150,
                quantityId: quantity.g
            }, {
                name: 'Knoblauchzehen',
                quantity: 1,
                quantityId: quantity.anzahl
            }, {
                name: 'Frischkäse',
                quantity: 300,
                quantityId: quantity.g
            }, {
                name: 'Schmand',
                quantity: 200,
                quantityId: quantity.g
            }, {
                name: 'Curry',
                quantity: 2,
                quantityId: quantity.tl
            }, {
                name: 'Salz',
                quantity: 0.5,
                quantityId: quantity.tl
            }, {
                name: 'Cayenne-Pfeffer',
                quantity: 2,
                quantityId: quantity.prise
            }],
        );

        await createRecipe(
            pool,
            'Erdnussbutter',
            10,
            1,
            'Erdnussbutter',
            1,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets D661D6E1-FD26-40D7-A048-D6743FC946C7 Derivates 532A16BD-C057-42F7-8493-9797B3FAA06E.jpg',
            [{
                name: 'Erdnüsse',
                quantity: 300,
                quantityId: quantity.g
            }, {
                name: 'Erdnussöl',
                quantity: 20,
                quantityId: quantity.g
            }, {
                name: 'Honig',
                quantity: 1.5,
                quantityId: quantity.tl
            }, {
                name: 'Salz',
                quantity: 0.25,
                quantityId: quantity.tl
            }],
        );

        await createRecipe(
            pool,
            'Curry-Cashews',
            30,
            1,
            'Curry-Cashews',
            8,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets 9E953F3C-6E5C-4057-AE36-FB04D7D6F216 Derivates 628ef1ad-498b-4903-80c7-4d69d0026cc4.jpg',
            [{
                name: 'Eiweiß',
                quantity: 1,
                quantityId: quantity.anzahl
            }, {
                name: 'Curry, mild',
                quantity: 4,
                quantityId: quantity.tl
            }, {
                name: 'Paprika de la Vera',
                quantity: 0.5,
                quantityId: quantity.tl
            }, {
                name: 'Brauner Zucker',
                quantity: 2,
                quantityId: quantity.el
            }, {
                name: 'Salz',
                quantity: 2,
                quantityId: quantity.tl
            }, {
                name: 'Spritzer Tabasco',
                quantity: 3,
                quantityId: quantity.anzahl
            }, {
                name: 'Cashewkerne, ungeröstet',
                quantity: 400,
                quantityId: quantity.g
            }],
        );


        await createRecipe(
            pool,
            'Butterbier',
            10,
            1,
            'Butterbier',
            6,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets 82d1ad3d-c6fb-4579-8bf8-65282a3d6d83 Derivates 93f9df5b-cd0e-413e-927e-bcbbff874137.jpg',
            [{
                name: 'Malzbier',
                quantity: 500,
                quantityId: quantity.g
            }, {
                name: 'Brauner Zucker',
                quantity: 30,
                quantityId: quantity.g
            }, {
                name: 'Eigelb',
                quantity: 4,
                quantityId: quantity.anzahl
            }, {
                name: 'Ingwer, gemahlen',
                quantity: 0.5,
                quantityId: quantity.tl
            }, {
                name: 'Muskat',
                quantity: 0.5,
                quantityId: quantity.tl
            }, {
                name: 'Zimt',
                quantity: 1,
                quantityId: quantity.tl
            }, {
                name: 'Butter',
                quantity: 30,
                quantityId: quantity.g
            }],
        );

        await createRecipe(
            pool,
            'Gemüse-Curry mit Couscous',
            30,
            1,
            'Gemüse-Curry mit Couscous',
            4,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets 874BB5BD-5418-48F8-BAEC-FDABB57776A0 Derivates D208C611-6991-477F-9775-6322F2E713E1.jpg',
            [{
                name: 'Malzbier',
                quantity: 500,
                quantityId: quantity.g
            }],
        );


        await createRecipe(
            pool,
            'Bunte Gemüsenudeln mit Pesto',
            45,
            2,
            'Bunte Gemüsenudeln mit Pesto',
            4,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets 408A2A78-6FCA-46B5-8C39-A867FF4B969A Derivates d2e15b4f-c362-40bc-b355-104d4f605253.jpg',
            [{
                name: 'Malzbier',
                quantity: 500,
                quantityId: quantity.g
            }],
        );


        await createRecipe(
            pool,
            'Überbackenes Baguette',
            45,
            2,
            'Überbackenes Baguette',
            4,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets 908f2ba0-d619-426e-ba6f-68e20372a680 Derivates 6e0ae93f-9635-4f30-97d2-4892b836ee31.jpg',
            [{
                name: 'Malzbier',
                quantity: 500,
                quantityId: quantity.g
            }],
        );


        await createRecipe(
            pool,
            'Tomaten-Knoblauch-Butter',
            20,
            1,
            'Tomaten-Knoblauch-Butter',
            8,
            'https:  assets.tmecosys.com image upload t_web767x639 img recipe ras Assets 3afb29c1-4f19-4c23-b749-ca65c1bb0ea1 Derivates e55d2fdb-a154-47fb-877c-a3fcf2762cd5.jpg',
            [{
                name: 'Malzbier',
                quantity: 500,
                quantityId: quantity.g
            }],
        );
    }

    await disconnectPool(pool);
    if (process.env?.CREATE_DEFAULT_DATA === 'true') {
        setTimeout(async () => {
            console.log('create user');
            const pool2 = createPool();

            await createData(pool2, 'Noah', 'Dahlhaus', 'noah@dahlhaus-online.de', 'Nudeln', 'Nudeln mit Nudeln', [{
                name: 'Nudeln',
                quantity: 500
            }]);
            await createData(pool2, 'Test', 'Test', 'test@test.de', 'Pizza Salami', 'Pizza', [{
                name: 'Mehl',
                quantity: 500
            }]);
            await createData(pool2, 'Test2', 'Test2', 'Test2@Test2.de', 'Pizza Test', 'Pizza', [{
                name: 'Nudeln',
                quantity: 500
            }]);
            await createData(pool2, 'Test3', 'Test3', 'Test3@Test3-online.de', 'Bier', 'Bier', [{
                name: 'Test',
                quantity: 500
            }]);
            await createData(pool2, 'Test4', 'Test4', 'Test4@Test4-online.de', 'Hunger', 'Hunger', [{
                name: 'Hunger',
                quantity: 5
            }]);
            await createData(pool2, 'Test5', 'Test5', 'Test5@Test5-online.de', 'Pils', 'Lecker', [{
                name: 'Hopfen',
                quantity: 500
            }, { name: 'Mals', quantity: 500 }]);
            await createData(pool2, 'Test6', 'Test6', 'Test6@Test6-online.de', 'Burger', 'Mit Bier', [{
                name: 'Brot',
                quantity: 500
            }]);
            await createData(pool2, 'Test7', 'Test7', 'Test7@Test7-online.de', 'Hallo', 'Welt', [{
                name: 'Welt',
                quantity: 500
            }]);
            await createData(pool2, 'Test8', 'Test8', 'Test8@Test8-online.de', 'Burger 2', 'Test', [{
                name: 'Bla',
                quantity: 500
            }]);
            await createData(pool2, 'Test9', 'Test9', 'Test9@Test9-online.de', 'Nudeln 3', 'Nudeln mit Nudeln', [{
                name: 'Nudeln',
                quantity: 500
            }]);
            await createData(pool2, 'Test10', 'Test10', 'Test10@Test10-online.de', 'Nudeln 4', 'Nudeln mit Nudeln', [{
                name: 'Nudeln',
                quantity: 500
            }]);

            await disconnectPool(pool2);
        }, 1000);
    }
}

try {
    setTimeout(() => {
        void createInitData();
    }, 20000)


    setTimeout(() => {
        console.log("start random")
        try {
            void recipeRandomise(1).catch((e: any) => console.log(e));
        } catch (ex) {
            console.log("error------------------------------")
            console.log(ex);
        }
    }, 5); 20000 * 2

} catch (e) {
    console.log('index', e);
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
