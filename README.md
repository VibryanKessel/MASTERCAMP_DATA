# MASTERCAMP_DATA

Architecture de l'application
1- Front-End (React-native + tailwind pour le style) 
2- Back-End (NodeJS + express)
3- Base de données Mysql (avec Xampp). C'est possible d'utiliser tout autre logiciel disposant des serveurs Apache et Mysql pour gérer la Base de Données


# Installation des modules 

Il vous faut avoir la commande `npm` pour faire les installations


1- Front-End (React-native + tailwind pour le style) 

    - Tous les fichiers relatifs au code client sont disponibles dans le dossier `/client`.
    - Dans ce dossier : Exécutez `npm i` pour installer tous les modules nécéssaires
    - Il faudra peut-être installer expo séparément avec la commande ``

2- Back-End (NodeJS + express)

    - Tous les fichiers relatifs au code server sont disponibles dans le dossier `/server`.
    - Dans ce dossier : Exécutez `npm i` pour installer tous les modules nécéssaires

3- Base de données Mysql (avec Xampp). C'est possible d'utiliser tout autre logiciel disposant du serveur Mysql pour gérer la Base de Données
    - La base de données actuelle a été exportée dans le dossier `/bdd`.
    - Importez le fichier `mastercamp.sql` dans votre SGBD.

Tout est fin prêt maintenant.


# Lancement de l'application

Etape1 : Assurez vous que votre serveur Mysql soit en cours d'exécution. 

Etape2 : En fonction de la configuration choisie pour votre serveur Mysql modifiez la section `Utils` dans le fichier `/server/app.js`.

Etape3 : Exécutez dans le dossier `/server` `npm start` pour démarrer le serveur de l'app  

Etape4 : Exécutez dans le dossier `/client` `expo web` pour démarrer le serveur client.
         Expo donne une url pour accéder au rendu sur la ligne commançant par `Webpack waiting on ...`
         Dans un navigateur esssayez d'accéder à cette url .
         ( L'url par défaut est souvent `http://10.188.151.156:19006`)

Pour le login vous pourrez utiliser les ids : (email:`a@gmail.com`, motdepasse: `admin`).


# Extra

- REMPLISSAGE_DES_DONNEES : La plupart de nos données ont été remplis manuellement grâce à l'analyse faite dans les fichiers suivants : `server/utils/treatAgribalyse.ipynb`, `server/utils/fetchApiIngredints.ipynb`

- BUGS : 
  - Certaines installations peuvent échouer parce que vous n'êtes pas passer en mode superutilisateur 
  - (Bugs probables) Nous avons tous utiliser des systèmes d'exploitations UBUNTU pour le développement. Nous n'avons pas fait de tests sur des systèmes WINDOWS. Il est donc possible que certains bugs surviennent.


