const express = require('express');
const axios = require("axios");
const { getIngredients } = require('../utils/dataProcessing');
const baseUrl = "https://api.spoonacular.com/recipes"

const loginRouter=(con)=>{
    const router=express.Router();
    const ingredients = getIngredients(con)
    /*----------------------------------------------------- */
    router.get("/", (req, res) => {
        const response = axios.get(baseUrl+"/findByIngredients",{
            params:{
                "ingredients":"apples,+flour,+sugar,+wine",
                "apiKey":"29cb37909ef84b8d867a0350baee367d",
                "number":3
            }
        })
        response.then(result =>{
            res.status(200).json(result.data)
        });
        return;
    })

    
    /*---------------------------------------------------------- */
    return router;
}

module.exports=loginRouter;