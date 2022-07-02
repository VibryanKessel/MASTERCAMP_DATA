const express = require('express');
const axios = require("axios");
const asyncHandler = require('express-async-handler')
const { getIngredients, categorizeIngredients, combine } = require('../utils/dataProcessing');
const { getRecipesFromApiBaseOnIngredients } = require('../utils/api_functions');

const baseUrl = "https://api.spoonacular.com/recipes"

const loginRouter = (con) => {
    const router = express.Router();

    /*----------------------------------------------------- */

    router.get('/', asyncHandler(async (req, res, next) => {

        const recipes = await getRecipesFromApiBaseOnIngredients(con)
        console.log(recipes)
        res.status(200).json(recipes);
    }));

    router.get('/forDiet/:idRegime', asyncHandler(async (req, res, next) => {

        res.status(200).json(recipes);
    }));

    /*---------------------------------------------------------- */
    return router;
}





module.exports = loginRouter;