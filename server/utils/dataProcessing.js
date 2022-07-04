

function categorizeIngredients(data) {
    result = {};
    for (var i = 0; i < data.length; i++) {

        if (result[data[i].categorie] != null) {
            result[data[i].categorie].push(data[i]);
        } else {
            result[data[i].categorie] = []
            result[data[i].categorie].push(data[i]);
        }
    }
    return result
}
function getIngredients(con) {
    var p = new Promise((resolve, reject) => {
        con.query("SELECT * FROM Ingredients ", (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
                reject(err);
            };

            resolve(results);
        });
    })

    return p.then(value => { return value });
}
function sortBasedOnSaison_Score(tab_ingredients) {
    tab_ingredients.sort(
        (a, b) => a.saison_score - b.saison_score
    );
    tab_ingredients.reverse()
    return tab_ingredients;
}

function sortBasedOnEco_Score(tab_ingredients) {
    tab_ingredients.sort(
        (a, b) => a.eco_score - b.eco_score
    );
    return tab_ingredients;
}
function combine(ingredients) {
    for (cat in ingredients) {
        if (["spices", "vegetable", "fruit"].includes(cat))
            sortBasedOnSaison_Score(ingredients[cat]);
        else
            sortBasedOnEco_Score(ingredients[cat]);
    }
    let combinaison = []
    const _list = [
        ["spices", "vegetable", "animal product", "leguminous", "leguminous"],
        ["spices", "vegetable", "fruit", "cereal", "leguminous", "vegetable"],
        ["vegetable", "fruit", "animal product", "drink", "leguminous"]
    ];
    for (let i = 0; i < 5; i++) {
        c = []
        selected = _list[Math.trunc(Math.random() * 3)];

        selected.forEach(cat => {
            cat_len = ingredients[cat].length;
            c.push(ingredients[cat][Math.trunc(Math.random() * (cat_len > 3 ? 3 : cat_len))].name); // On ajoute un ingrédients sélectionné du dans le top3            
        });

        combinaison.push(concat(c));
    }
    return combinaison;
}

function concat(tab_ingredients) {
    return tab_ingredients.join(",+")
}

function imc(user)
{
    return (user["masse"]*10000)/(user["taille"]*user["taille"]);
}


module.exports = {
    categorizeIngredients,
    getIngredients,
    sortBasedOnEco_Score,
    sortBasedOnSaison_Score,
    combine,
    concat,
    imc
};