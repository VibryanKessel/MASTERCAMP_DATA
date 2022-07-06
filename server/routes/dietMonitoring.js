const express =require('express');
const asyncHandler = require('express-async-handler')



const monitoringRouter=(con)=>{
    const router=express.Router();
    /*----------------------------------------------------- */

    router.post("/",(req, res) => {
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

    router.get("/", (req, res) => {  // Cette route sert à récupérer les infos sur le régime personnalisé d'un utilisateur  
        console.log(req.session.user)
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

    
    /* Requêtes liées au plannings de repas */
    router.get("/:idDiet/planning", (req, res) => {   // Récupérer le planning d'un utilisateur pour un régime donné
        if (req.session.user != null)

        {
            con.query(
                `
                    SELECT * FROM RepasPrévu as R
                    JOIN RegimePersonnalise as Rp ON Rp.idRegime = R.idRegime
                    WHERE Rp.idRegime = ? and Rp.idClient = ?
                `,[
                    req.params.idDiet,
                    req.session.user.id   // On ajoute l'id du client pour s'assurer qu'il s'agit bien de son régime à lui
                ], (err, results) => {
                if(err) {
                    res.status(500).json({"message":"Internal server error"});
                    throw err;
                };
                
                res.status(200).json({
                    "idDiet":req.params.idDiet,
                    "meals":results
                })
            });
        }
        else
            res.status(401).send("Authentification requise");
        return;
    })


    router.post("/:idDiet/planning", asyncHandler(async (req, res, next) => {   // Ajouter un repas au planning
        if (req.session.user != null)

        {
            const body = req.body;
            // Il faut vérifier si un repas n'a pas déjà été prévu pour au moment et à la journée choisie. Si c'est le cas on procède à une modif du repas sinon il est ajouté  
            con.query(
                `
                    SELECT R.idRepas FROM RepasPrévu as R
                    JOIN RegimePersonnalise as Rp ON Rp.idRegime = R.idRegime
                    WHERE Rp.idRegime = ? and Rp.idClient = ? and R.jour = ? and R.momentJournee = ?
                `,[
                    req.params.idDiet,
                    req.session.user.id,   
                    body.jour,
                    body.momentJournee
                ], async(err, results) => {
                    if(err) {
                        res.status(500).json({"message":"Internal server error"});
                        throw err;
                    };
                    
                    if (results.length != 0)
                        await updateMeal(con,req,res);
                    else
                        await addMeal(con,req,res);
                    
                    res.status(200).json({"message":"Succès de l'opération"});
                });
        }
        else
            res.status(401).send("Authentification requise");
        return;
    }))
    
    router.delete("/:idDiet/planning/:idMeal", (req, res) => {   // Récupérer le planning d'un utilisateur pour un régime donné
        if (req.session.user != null)

        {
            con.query(
                `
                    DELETE FROM RepasPrévu as R
                    JOIN RegimePersonnalise as Rp ON Rp.idRegime = R.idRegime
                    WHERE Rp.idRegime = ? and Rp.idClient = ? and R.idRepas
                `,[
                    req.params.idDiet,
                    req.session.user.id,
                    req.params.idMeal
                ], (err, results) => {
                if(err) {
                    res.status(500).json({"message":"Internal server error"});
                    throw err;
                };
                
                res.status(200).json({"message":"Supprimé"})
            });
        }
        else
            res.status(401).send("Authentification requise");
        return;
    })
    /*---------------------------------------------------------- */
    return router;
}




async function updateMeal(con,req,res)
{
    return new Promise((resolve, reject)=>{
        con.query("UPDATE RepasPrévu SET idRecette = ? WHERE idRegime = ?",[
            body.idRecette,
            req.params.idDiet
        ],(err,results)=>{
            if(err) {
                res.status(500).json({"message":"Internal server error"});
                reject(err);
            };

            resolve();
        });
    })
}

async function addMeal(con,req,res)
{
    return new Promise((resolve, reject)=>{
        con.query("INSERT INTO RepasPrévu (idRecette, jour, momentJournee) VALUES(?,?,?)",[
            body.idRecette,
            body.jour,
            body.momentJournee,
        ],(err,results)=>{
            if(err) {
                res.status(500).json({"message":"Internal server error"});
                reject(err);
            };

            resolve();
        });
    })
}
module.exports=monitoringRouter;