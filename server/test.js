const axios = require('axios')

async function get(baseUrl){
    let response = await axios.get(baseUrl + "/findByIngredients", {
        params: {
            "ingredients": 'onion salt,+truffle mushroom,+cantaloupes,+corn meal,+puy lentils,+lettuce leaves',
            "apiKey": "29cb37909ef84b8d867a0350baee367d",
            "number": 10
        }
    });
    
    return response.data;
}

const t = get(' https://api.spoonacular.com/recipes/')

