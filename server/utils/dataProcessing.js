const dataProcessing = {
    getIngredients: function(con)
        {
            var ingredients;
            var p = new Promise((resolve,reject)=>{
                con.query("SELECT * FROM Ingredients ", (err) => {
                    if(err) {
                        reject(err);
                    };
                });
            })

            return p.then(value => {return value});
        }

}

module.exports=dataProcessing;