const express =require('express');
const loginRouter=(con)=>{
    const router=express.Router();
    /*----------------------------------------------------- */

    router.post("/", async (req, res) => {
        const body = req.body;

        console.log(body)

        con.query("SELECT * FROM Client WHERE email = ? AND motDePasse = ?",[
            body.email,
            body.mdp
        ], (err, results) => {
            if(err) throw err;
            
            if (results.length == 0)
                res.status(404).json({
                    "message": " Vérifiez vos identifiants et rééssayez !!"
                });   
            else
            {
                req.session.user = {...results[0]};
                res.status(200).json({
                    "message": "Authentification réussie"
                });
            }
        });
        
        return ;
    });
    router.get("/who", (req, res) => {
        if (req.session.user != null)
            res.status(200).json(req.session.user);
        else
            res.status(401).send("Authentification requise");
        return;
    })

    
    /*---------------------------------------------------------- */
    return router;
}

module.exports=loginRouter;