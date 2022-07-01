const express = require('express');
const axios = require("axios");
const asyncHandler = require('express-async-handler')
const { getIngredients, categorizeIngredients, combine } = require('../utils/dataProcessing');
const baseUrl = "https://api.spoonacular.com/recipes"

const loginRouter = (con) => {
    const router = express.Router();

    /*----------------------------------------------------- */

    router.get('/', asyncHandler(async (req, res, next) => {

        const recipes = await getRecipesFromApi(con)
        console.log(recipes)
        res.status(200).json(recipes);
    }));

    /*---------------------------------------------------------- */
    return router;
}




function getRecipesFromApi(con) {
    return new Promise(async (resolve, reject) => {

        let ingredients = await getIngredients(con);
        ingredients = categorizeIngredients(ingredients);

        const combinaisons_ingredients = combine(ingredients); //combine sert à créer des combinaisons différentes d'ingrédients
        console.log(combinaisons_ingredients);

        /* Pour chaque combinaison on va demander des recettes qu'elles peuvent constituer */
        let recipes = []
        for (let i = 0; i < combinaisons_ingredients.length; i++) {
            let response = await axios.get(baseUrl + "/findByIngredients", {
                params: {
                    "ingredients": combinaisons_ingredients[i],
                    "apiKey": "29cb37909ef84b8d867a0350baee367d",
                    "number": 10
                }
            });

            recipes = recipes.concat(response.data);
        }

        for (let i = 0; i < recipes.length; i++) {

            recipes[i] = {
                "id": recipes[i].id,
                "title": recipes[i].title,
                "image": recipes[i].image,
            }
        }

        resolve(recipes);
    });
};

module.exports = loginRouter;