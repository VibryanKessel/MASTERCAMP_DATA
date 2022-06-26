const dataProcessing = {
    getIngredients: function(con)
        {
            var ingredients;
            var p = new Promise((resolve,reject)=>{
                con.query("SELECT * FROM Ingredients ", (err, results) => {
                    if(err) {
                        res.status(500).json({"message":"Internal server error"});
                        reject(err);
                    };
    
                    resolve(results);
                });
            })

            return p.then(value => {return value});
        }

}

module.exports=dataProcessing;