const express =require('express');
const monitorignRouter=(con)=>{
    const router=express.Router();
    /*----------------------------------------------------- */

    router.post("/", async (req, res) => {
        const body = req.body;
        if (req.session.user != null)

        {
            con.query("INSERT INTO `SuiviRegime`( `dateDebut`, `ajoutCalorieJournalier`, `masseDebut`, `taille`, `periodeRegime`, `rythmeActivite`, `idClient`) VALUES (?,?,?,?,?,?,?)",[
                body.debutDate,
                body.ajoutCalorieJournalier,
                body.masseDebut,
                body.taille,
                body.periodeRegime,
                body.rythmeActivite,
                req.session.user.id
            ], (err, results) => {
                if(err) {
                    res.status(500).json({"message":"Internal server error"});
                    throw err;
                };
                
                res.status(200).json({
                    "message":"A monitoring file has been created"
                })
            });
        }
        else
            res.status(401).send("Authentification requise");
        return;
    });

    router.get("/", (req, res) => {
        if (req.session.user != null)

        {
            con.query("SELECT * FROM SuiviRegime WHERE idClient = ?",[
                req.session.user.id
            ], (err, results) => {
                if(err) {
                    res.status(500).json({"message":"Internal server error"});
                    throw err;
                };
                
                res.status(200).json({
                    "name":req.session.user.nom,
                    "diets":results
                })
            });
        }
        else
            res.status(401).send("Authentification requise");
        return;
    })

    
    /*---------------------------------------------------------- */
    return router;
}

module.exports=monitorignRouter;