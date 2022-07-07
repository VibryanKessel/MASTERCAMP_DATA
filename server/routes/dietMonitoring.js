const express = require('express');
const asyncHandler = require('express-async-handler')



const monitoringRouter = (con) => {
    const router = express.Router();
    /*----------------------------------------------------- */

    router.post("/:clientId", (req, res) => {
        const body = req.body;

        /* Création du régime personnalisé */
        con.query(`INSERT INTO RegimePersonnalise(idClient, dateDebut, periodeRegime)  VALUES (?,?,?)`, [
            req.params.clientId,
            body.dateDebut,
            body.periodeRegime
        ], (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
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
                `, [
                req.params.clientId,
                body.calorieJournalier,
                body.masseDebut,
                body.taille,
                body.rythmeActivite
            ], (err, results) => {

                if (err) {
                    res.status(500).json({ "message": "Internal server error" });
                    throw err;
                };

                res.status(200).json({
                    "message": "Your personnal diet data have been registered"
                })
            });


        });

        return;
    });

    router.get("/:clientId", (req, res) => {  // Cette route sert à récupérer les infos sur le régime personnalisé d'un utilisateur  

        con.query(
            `
                    SELECT Rp.idRegime, Rp.dateDebut, Rp.periodeRegime, Rs.ajoutCalorieJournalier, Rs.rythmeActivite FROM RegimePersonnalise as Rp
                    JOIN SuiviRegime as Rs ON Rp.idRegime = Rs.idRegime
                    WHERE Rp.idClient = ?
                `, [
            req.params.clientId
        ], (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
                throw err;
            };

            res.status(200).json({
                results
            })
        });

        return;
    })


    /* Requêtes liées au plannings de repas */

    router.get("/:clientId/:idDiet/planning", (req, res) => {   // Récupérer le planning d'un utilisateur pour un régime donné

        con.query(
            `
                    SELECT * FROM RepasPrévu as R
                    JOIN RegimePersonnalise as Rp ON Rp.idRegime = R.idRegime
                    WHERE Rp.idRegime = ? and Rp.idClient = ?
                `, [
            req.params.idDiet,
            req.params.clientId   // On ajoute l'id du client pour s'assurer qu'il s'agit bien de son régime à lui
        ], (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
                throw err;
            };

            res.status(200).json({
                "idDiet": req.params.idDiet,
                "meals": results
            })
        });

        return;
    })


    router.post("/:clientId/:idDiet/planning", asyncHandler(async (req, res, next) => {   // Ajouter un repas au planning

        const body = req.body;
        // Il faut vérifier si un repas n'a pas déjà été prévu pour au moment et à la journée choisie. Si c'est le cas on procède à une modif du repas sinon il est ajouté  
        con.query(
            `
                    SELECT R.idRepas FROM RepasPrévu as R
                    JOIN RegimePersonnalise as Rp ON Rp.idRegime = R.idRegime
                    WHERE Rp.idRegime = ? and Rp.idClient = ? and R.jour = ? and R.momentJournee = ?
                `, [
            req.params.idDiet,
            req.params.clientId,
            body.jour,
            body.momentJournee
        ], async (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
                throw err;
            };

            if (results.length != 0)
                await updateMeal(con, req, res);
            else
                await addMeal(con, req, res);

            res.status(200).json({ "message": "Succès de l'opération" });
        });

        return;
    }))

    router.delete("/:clientId/:idDiet/planning/:idMeal", (req, res) => {   // Récupérer le planning d'un utilisateur pour un régime donné

        con.query(
            `
                    DELETE FROM RepasPrévu as R
                    JOIN RegimePersonnalise as Rp ON Rp.idRegime = R.idRegime
                    WHERE Rp.idRegime = ? and Rp.idClient = ? and R.idRepas
                `, [
            req.params.idDiet,
            req.params.clientId,
            req.params.idMeal
        ], (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
                throw err;
            };

            res.status(200).json({ "message": "Supprimé" })
        });


        return;
    })
    /*---------------------------------------------------------- */
    return router;
}




async function updateMeal(con, req, res) {
    return new Promise((resolve, reject) => {
        con.query("UPDATE RepasPrévu SET idRecette = ? WHERE idRegime = ?", [
            body.idRecette,
            req.params.idDiet
        ], (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
                reject(err);
            };

            resolve();
        });
    })
}

async function addMeal(con, req, res) {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO RepasPrévu (idRecette, jour, momentJournee) VALUES(?,?,?)", [
            body.idRecette,
            body.jour,
            body.momentJournee,
        ], (err, results) => {
            if (err) {
                res.status(500).json({ "message": "Internal server error" });
                reject(err);
            };

            resolve();
        });
    })
}
module.exports = monitoringRouter;