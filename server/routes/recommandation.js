const express = require('express');
const axios = require("axios");
const asyncHandler = require('express-async-handler')
const { getRecipesFromApiBaseOnIngredients, getRecipesFromApiBaseOnNutrients } = require('../utils/api_functions');

const baseUrl = "https://api.spoonacular.com/recipes"

const loginRouter = (con) => {
    const router = express.Router();

    /*----------------------------------------------------- */

    router.get('/', asyncHandler(async (req, res, next) => {

        try {
            
            const recipes = await getRecipesFromApiBaseOnIngredients(con);
            console.log(recipes.length);
            res.status(200).json(recipes);
        } catch (error) {

            res.status(500).json({"message": "Internal server error"})
            throw error;
        }
    }));

    router.get('/forDiet/:idRegime', asyncHandler(async (req, res, next) => {
        
        try {
            
            const recipes = await getRecipesFromApiBaseOnNutrients(con);
            console.log(recipes.length);
            res.status(200).json(recipes);
        } catch (error) {

            res.status(500).json({"message": "Internal server error"})
            throw error;
        }
        
    }));

    /*---------------------------------------------------------- */
    return router;
}





module.exports = loginRouter;