const express =require('express');

const registerRouter=(con)=>{
    const router=express.Router();
    /*----------------------------------------------------- */

    router.post("/", async (req, res) => {
        const body = req.body;

        con.query("SELECT id FROM Client WHERE email = ? ",[
            body.email
        ], (err, results) => {
            if(err) {
                res.status(500).json({"message":"Internal server error"});
                throw err;
            };

            if (results.length != 0)

                res.status(401).json({
                    "message": " Un compte utilise déjà cette adresse mail !!"
                });   
            else
            {

                con.query("INSERT INTO Client(`nom`, `email`, `motDePasse`, `dateNaissance`,`intolerances`) VALUES (?,?,?,?,?)",[
                    body.nom,body.email,body.mdp,body.birthDate, body.intolerances
                ], (err, results) => {
                    if (err) throw err;
                    res.status(200).json({
                        "message": " Compte créé "
                    })
                })

            } 
                
        });
        
        return ;
    });
    /*---------------------------------------------------------- */
    return router;
}





module.exports=registerRouter;