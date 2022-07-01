const express = require('express');
const axios = require("axios");
const { getIngredients, categorizeIngredients, combine } = require('../utils/dataProcessing');
const baseUrl = "https://api.spoonacular.com/recipes"

const loginRouter = (con) => {
    const router = express.Router();
    /*----------------------------------------------------- */
    router.get("/", (req, res) => {
        let ingredients = null;

        getIngredients(con).then(values => {
            ingredients = categorizeIngredients(values);
            const combinaisons_ingredients = combine(ingredients);
            console.log(combinaisons_ingredients);


            const response = axios.get(baseUrl + "/findByIngredients", {
                params: {
                    "ingredients": combinaisons_ingredients[0],
                    "apiKey": "29cb37909ef84b8d867a0350baee367d",
                    "number": 10
                }
            });

            response.then(result => {
                res.status(200).json(result.data);
            });

        });
        return;
    })


    /*---------------------------------------------------------- */
    return router;
}

module.exports = loginRouter;