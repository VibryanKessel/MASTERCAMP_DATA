
const express = require('express');
const axios = require("axios");
const asyncHandler = require('express-async-handler');
const apikey = "29cb37909ef84b8d867a0350baee367d";
const Mealkeys = ["id","title","image","readyInMinutes","pricePerServing","sourceUrl","dishTypes","extendedIngredients","summary","instructions","analyzedInstructions"];
const mealRouter = (con) => {
    const router = express.Router();

    /*----------------------------------------------------- */

    router.get('/:idMeal', asyncHandler(async (req, res, next) => { /* Obtenir les infos relatives à une recette de l'API */
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${req.params.idMeal}&apiKey=${apikey}`)
            if (response.status != 200)
                throw new Error("Quota de requête sur l'api atteint");
            
            var result = {};
            for (const key in response.data[0]) {
                if (Mealkeys.includes(key))
                    result[key] = response.data[0][key];
            }
            res.status(200).json(result);
            
        } catch (error) {

            res.status(500).json({ "message": "Internal server error" })
            throw error;
        }
        return;
    }));

  
    /*---------------------------------------------------------- */
    return router;
}





module.exports = mealRouter;