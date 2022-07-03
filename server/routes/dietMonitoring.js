const express =require('express');
const monitoringRouter=(con)=>{
    const router=express.Router();
    /*----------------------------------------------------- */

    router.post("/", async (req, res) => {
        const body = req.body;
        if (req.session.user != null)

        {
            /* Création du régime personnalisé */
            con.query(`INSERT INTO RegimePersonnalise(idClient, dateDebut, periodeRegime)  VALUES (?,?,?)`,[
                req.session.user.id,
                body.dateDebut,
                body.periodeRegime
            ], (err, results) => {
                if(err) {
                    res.status(500).json({"message":"Internal server error"});
                    throw err;
                };

                /* Création de la fiche de suivi du régime */
                con.query(`
                    INSERT INTO SuiviRegime( idRegime, ajoutCalorieJournalier, masseDebut, taille, rythmeActivite) VALUES (
                        (   
                            SELECT idRegime FROM RegimePersonnalise 
                            WHERE idClient = ? 
                            ORDER BY dateDebut  
                            LIMIT 1
                        ),?,?,?,?)
                `,[
                    req.session.user.id,
                    body.calorieJournalier,
                    body.masseDebut,
                    body.taille,
                    body.rythmeActivite
                ], (err, results) => {
                    
                    if(err) {
                        res.status(500).json({"message":"Internal server error"});
                        throw err;
                    }; 

                    res.status(200).json({
                        "message": "Your personnal diet data have been registered"
                    })
                });
                

            });
        }
        else
            res.status(401).send("Authentification requise");
        return;
    });

    router.get("/", (req, res) => {  // Cette route sert à récupérer les infos 
        if (req.session.user != null)

        {
            con.query(
                `
                    SELECT Rp.idRegime, Rp.dateDebut, Rp.periodeRegime, Rs.ajoutCalorieJournalier, Rs.rythmeActivite FROM RegimePersonnalise as Rp
                    JOIN SuiviRegime as Rs ON Rp.idRegime = Rs.idRegime
                    WHERE Rp.idClient = ?
                `,[
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

module.exports=monitoringRouter;