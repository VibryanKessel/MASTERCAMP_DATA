const axios = require("axios");
const { getIngredients, categorizeIngredients, combine } = require('../utils/dataProcessing');

const baseUrl = "https://api.spoonacular.com/recipes"

function getRecipesFromApiBaseOnIngredients(con) {
    return new Promise(async (resolve, reject) => {

        
        const combinaisons_ingredients = [
            'avocado leaf,+mushroom mix,+apple sauce,+corn meal,+dal,+lettuce leaves',
            'onion salt,+mushroom mix,+shrimp paste,+puy lentils,+puy lentils',
            'mushroom mix,+cantaloupes,+veal stock,+wine,+dal',
            'curry powder trio,+lettuce leaves,+beef,+dal,+puy lentils',
            'truffle mushroom,+cantaloupes,+shrimp paste,+gingerale,+dal'
        ];

        console.log(combinaisons_ingredients);

        /* Pour chaque combinaison on va demander des recettes qu'elles peuvent constituer */
        let recipes = []
        for (let i = 0; i < combinaisons_ingredients.length; i++) {
            axios.get(baseUrl + "/findByIngredients", {
                params: {
                    "ingredients": combinaisons_ingredients[i],
                    "apiKey": "29cb37909ef84b8d867a0350baee367d",
                    "number": 10
                }
            }).then((val)=>console.log(val)).catch( err => {console.log("dauidz"); throw err});
            
            
            let response = await axios.get(baseUrl + "/findByIngredients", {
                params: {
                    "ingredients": combinaisons_ingredients[i],
                    "apiKey": "29cb37909ef84b8d867a0350baee367d",
                    "number": 10
                }
            });
            console.log(response?.status)
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

getRecipesFromApiBaseOnIngredients().then(values => console.log(values)).catch(err => {throw err});
