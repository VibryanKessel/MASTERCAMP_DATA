const express = require('express');
const clientRouter = (con) => {
    const router = express.Router();
    /*----------------------------------------------------- */

    router.put("/", async (req, res) => {
        const body = req.body;

        if(req.session.user)
        {
            con.query("UPDATE Client SET intolerances = ?, masse = ?, taille = ?, rythmeActivite = ? WHERE id = ?", [
                body.intolerances,
                body.masse,
                body.taille,
                body.rythmeActivite,
                req.session.user.id

            ], (err, results) => {
                if (err) {
                    res.status(500).json({ "message": "Internal server error" });
                    throw err;
                };

                res.status(200).json({"message": "Modifications terminées"});
            });
        }
        else
            res.status(401).send("Authentification requise");

        return;
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


module.exports=clientRouter;