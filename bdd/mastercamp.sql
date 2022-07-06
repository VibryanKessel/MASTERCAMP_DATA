-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 06 juil. 2022 à 17:21
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mastercamp`
--

-- --------------------------------------------------------

--
-- Structure de la table `Client`
--

CREATE TABLE `Client` (
  `id` int(10) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `motDePasse` varchar(20) NOT NULL,
  `dateNaissance` date NOT NULL,
  `taille` int(10) DEFAULT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `intolerances` varchar(60) DEFAULT NULL,
  `masse` int(10) DEFAULT NULL,
  `rythmeActivite` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Client`
--

INSERT INTO `Client` (`id`, `nom`, `email`, `motDePasse`, `dateNaissance`, `taille`, `sex`, `intolerances`, `masse`, `rythmeActivite`) VALUES
(1, 'Zonda', 'a@gmail.com', 'admin', '2006-02-03', 165, 1, NULL, 60, NULL),
(2, 'Forest', '', 'Ol5XDkUhx40', '2004-04-08', 159, 1, NULL, 60, NULL),
(3, 'Ches', '', 'qSFeapU', '2007-11-12', 193, 1, NULL, 69, NULL),
(4, 'Corby', '', 'Co7DQuDc', '2009-11-21', NULL, 1, NULL, NULL, NULL),
(5, 'Terri-jo', '', '6je1kXTDS', '2003-09-15', 153, 0, NULL, 50, NULL),
(6, 'Gabie', '', 'O1KwGpBtL1KZ', '2000-11-05', 163, 0, NULL, 81, NULL),
(7, 'Collen', '', '8sjCdn5CQL9N', '2006-06-06', 156, 0, NULL, 52, NULL),
(8, 'Humberto', '', 'JtdypfnE5qQT', '2008-08-24', 159, 1, NULL, 64, NULL),
(9, 'Sullivan', '', 'YggBGtYs', '2001-09-23', 159, 0, NULL, 62, NULL),
(10, 'Novelia', '', 'ZNQKLy0ebplk', '2008-10-15', 166, 0, NULL, 74, NULL),
(11, 'Vin', '', 'e4r1FJGj8T', '2006-05-16', 190, 0, NULL, 80, NULL),
(12, 'Justina', '', 'k3vhwYJ', '2002-06-02', 181, 0, NULL, 78, NULL),
(13, 'Gilberto', '', 'ays5EZcN27u', '2002-09-01', NULL, 1, NULL, NULL, NULL),
(14, 'Goldina', '', 'PEDjew', '2001-08-19', NULL, 0, NULL, NULL, NULL),
(15, 'Kirsteni', '', 'lHQjks', '2000-12-03', 186, 1, NULL, 75, NULL),
(16, 'Eunice', '', 'HUHUcn1vW', '2008-04-26', 186, 1, NULL, 83, NULL),
(17, 'Nikolos', '', 'yDjq7u4V9s', '2003-04-23', 179, 0, NULL, 90, NULL),
(18, 'Janis', '', 'EqKtIZavYt9', '2009-02-08', NULL, 1, NULL, NULL, NULL),
(19, 'Annamaria', '', 'wNRxIuB6ES', '2004-01-31', NULL, 1, NULL, NULL, NULL),
(20, 'Whitby', '', 'QNf7Im5dSPNp', '2004-01-18', NULL, 1, NULL, NULL, NULL),
(21, 'Aura', '', '3V3F10jNSmY', '2007-02-23', 155, 1, NULL, 67, NULL),
(22, 'Monique', '', 'STspTT', '2007-05-24', 161, 0, NULL, 68, NULL),
(23, 'Mario', '', 'YkzIZErMF9d', '2001-01-23', NULL, 1, NULL, NULL, NULL),
(24, 'Jeanine', '', 'xnX3D0', '2005-07-20', 183, 0, NULL, 68, NULL),
(25, 'Hobie', '', 'dqzOyEpguCcv', '2005-11-16', 159, 0, NULL, 90, NULL),
(26, 'Lemar', '', 'f6n0fT', '2007-05-06', 190, 0, NULL, 85, NULL),
(27, 'Rogers', '', 'a1fvKzpABX', '2005-04-12', 173, 1, NULL, 53, NULL),
(28, 'Else', '', 'sEf9LnWp09', '2008-05-05', NULL, 0, NULL, NULL, NULL),
(29, 'Filmore', '', 'loOzpMTpo6', '2009-07-18', 174, 0, NULL, 79, NULL),
(30, 'Jacintha', '', 'p69sblqRNS', '2000-09-16', 165, 0, NULL, 66, NULL),
(31, 'Deidre', '', 'zSSAiKE9xi', '2007-04-28', 162, 0, NULL, 67, NULL),
(32, 'Michaela', '', 'poYhsIC99s', '2002-05-07', 173, 0, NULL, 88, NULL),
(33, 'Van', '', 'Q98UZaYFJCT', '2005-05-18', NULL, 0, NULL, NULL, NULL),
(34, 'Mahala', '', '6ZkamrfWLTxL', '2006-10-19', 170, 0, NULL, 97, NULL),
(35, 'Weber', '', '8rUgnE', '2004-10-24', 187, 0, NULL, 77, NULL),
(36, 'Garner', '', 'yc1K5bFD', '2001-09-03', 171, 0, NULL, 74, NULL),
(37, 'Alexine', '', 'VsSoo2', '2008-05-25', NULL, 1, NULL, NULL, NULL),
(38, 'Farra', '', 'RPXMR6eos', '2001-08-30', NULL, 0, NULL, NULL, NULL),
(39, 'Benita', '', 'A31xaTZ', '2003-10-30', 177, 1, NULL, 54, NULL),
(40, 'Annis', '', 'KsXUlK', '2008-08-02', 159, 1, NULL, 50, NULL),
(41, 'Mellisa', '', 'AtZhmXb6G', '2002-05-26', 191, 0, NULL, 65, NULL),
(42, 'Issy', '', 'rNblrtfCAU', '2004-04-24', 175, 0, NULL, 57, NULL),
(43, 'Della', '', 'gGz8wj', '2004-11-18', 160, 0, NULL, 93, NULL),
(44, 'Scotty', '', 'LautQZS', '2008-04-20', NULL, 1, NULL, NULL, NULL),
(45, 'Knox', '', 'OpSBMr4L', '2006-12-14', 162, 0, NULL, 78, NULL),
(46, 'Jordain', '', 'SiYCOumwvQm', '2008-05-02', 194, 1, NULL, 67, NULL),
(47, 'Keelia', '', 'Y5JfMm6lMAaA', '2002-05-16', NULL, 0, NULL, NULL, NULL),
(48, 'Giselbert', '', 'ZIORxulW', '2007-11-29', 197, 1, NULL, 63, NULL),
(49, 'Eolande', '', 'N6StqN0Hy', '2006-06-23', 153, 0, NULL, 54, NULL),
(50, 'Nicky', '', '2lYOslml', '2000-04-05', 182, 1, NULL, 86, NULL),
(51, 'Alz', 'b@gmail.com', 'admin', '2010-12-02', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `Ingredients`
--

CREATE TABLE `Ingredients` (
  `id` int(8) NOT NULL,
  `name` varchar(18) DEFAULT NULL,
  `categorie` varchar(20) DEFAULT NULL,
  `sous_categorie` varchar(30) NOT NULL,
  `eco_score` float NOT NULL,
  `saison_score` float NOT NULL,
  `image` varchar(23) DEFAULT NULL,
  `estimatedCost` decimal(5,2) DEFAULT NULL,
  `calories` int(6) DEFAULT NULL,
  `caloriesPODN` int(5) DEFAULT NULL,
  `fat` int(5) DEFAULT NULL,
  `fatPODN` int(5) DEFAULT NULL,
  `carbohydrates` int(5) DEFAULT NULL,
  `carbohydratesPODN` int(5) DEFAULT NULL,
  `protein` int(4) DEFAULT NULL,
  `proteinPODN` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Ingredients`
--

INSERT INTO `Ingredients` (`id`, `name`, `categorie`, `sous_categorie`, `eco_score`, `saison_score`, `image`, `estimatedCost`, `calories`, `caloriesPODN`, `fat`, `fatPODN`, `carbohydrates`, `carbohydratesPODN`, `protein`, `proteinPODN`) VALUES
(1106, 'goat\'s milk', 'animal product', 'milk', 0.07048, 4, 'milk.png', '0.14', 1, 0, 0, 0, 0, 0, 0, 0),
(1123, 'eggs', 'animal product', 'egg', 0.095047, 4, 'egg.png', '24.00', 63, 3, 4, 6, 0, 0, 6, 11),
(1125, 'yolk', 'animal product', 'egg', 0.095047, 4, 'egg-yolk.jpg', '24.00', 58, 3, 5, 7, 1, 0, 3, 6),
(2015, 'curry powder trio', 'spices', 'curry', 0.035993, 3, 'curry-powder.jpg', '5.11', 3, 0, 0, 0, 1, 0, 0, 0),
(5139, 'duck', 'animal product', 'meat', 0.300892, 4, 'duck.png', '558.57', 3087, 154, 301, 462, 0, 0, 88, 176),
(5317, 'duck legs', 'animal product', 'meat', 0.300892, 4, 'duck-legs.jpg', '172.12', 374, 19, 20, 30, 0, 0, 46, 92),
(6008, 'beef broth', 'animal product', 'meat', 0.300892, 4, 'beef-broth.png', '0.24', 0, 0, 0, 0, 0, 0, 0, 0),
(6038, 'cheese soup', 'animal product', 'milk', 0.105453, 4, 'cheddar-cheese-soup.png', '0.68', 1, 0, 0, 0, 0, 0, 0, 0),
(6963, 'fish stock', 'animal product', 'fish', 0.223568, 4, 'chicken-broth.png', '0.31', 0, 0, 0, 0, 0, 0, 0, 0),
(6973, 'chile paste', 'vegetable', 'pepper', 0.037854, 0, 'chili-paste.png', '1.29', 1, 0, 0, 0, 0, 0, 0, 0),
(8120, 'old fashioned oats', 'cereal', 'oats', 0.074338, 0, 'rolled-oats.jpg', '0.39', 4, 0, 0, 0, 1, 0, 0, 0),
(9019, 'apple sauce', 'fruit', 'apple', 0.05379, 5, 'applesauce.png', '0.31', 0, 0, 0, 0, 0, 0, 0, 0),
(9040, 'ripe bananas', 'fruit', 'banana', 0.05379, 0, 'bananas.jpg', '15.73', 105, 5, 0, 1, 27, 9, 1, 3),
(9042, 'blackberry', 'fruit', 'blackberry', 0.05379, 0, 'blackberries.jpg', '1.77', 1, 0, 0, 0, 0, 0, 0, 0),
(9148, 'kiwifruit', 'fruit', 'kiwi', 0.05379, 0, 'kiwi.png', '59.87', 53, 3, 0, 1, 13, 4, 1, 2),
(9159, 'limes', 'fruit', 'lime', 0.05379, 0, 'lime.jpg', '25.00', 20, 1, 0, 0, 7, 2, 0, 1),
(9181, 'cantaloupes', 'fruit', 'melon', 0.05379, 5, 'cantaloupe.png', '150.00', 188, 9, 1, 2, 45, 15, 5, 9),
(9195, 'olive', 'fruit', 'olive', 0.05379, 0, 'olives-mixed.jpg', '3.14', 6, 0, 1, 1, 0, 0, 0, 0),
(9200, 'oranges', 'fruit', 'orange', 0.05379, 0, 'orange.png', '29.11', 62, 3, 0, 0, 15, 5, 1, 2),
(9206, 'juice of orange', 'drink', 'orange', 0.05379, 0, 'orange-juice.jpg', '12.20', 27, 1, 0, 0, 6, 2, 0, 1),
(9273, 'pineapple juice', 'drink', 'pineapple', 0.05379, 0, 'pineapple-juice.jpg', '0.17', 1, 0, 0, 0, 0, 0, 0, 0),
(9316, 'strawberry', 'fruit', 'strawberry', 0.05379, 0, 'strawberries.png', '10.71', 4, 0, 0, 0, 1, 0, 0, 0),
(9326, 'watermelon chunks', 'fruit', 'watermelon', 0.05379, 5, 'watermelon.png', '699.00', 1350, 68, 7, 10, 340, 113, 27, 55),
(9442, 'pomegranate juice', 'drink', 'pomegrana', 0.05379, 0, 'pomegranate-juice.jpg', '1.05', 1, 0, 0, 0, 0, 0, 0, 0),
(14084, 'wine', 'drink', 'wine', 0, 0, 'red-wine.jpg', '1.46', 1, 0, 0, 0, 0, 0, 0, 0),
(14096, 'red wine', 'drink', 'wine', 0, 0, 'red-wine.jpg', '978.75', 638, 32, 0, 0, 20, 7, 1, 1),
(14136, 'gingerale', 'drink', 'soda', 0, 0, 'soda-can.jpg', '0.07', 0, 0, 0, 0, 0, 0, 0, 0),
(14412, 'purified water', 'drink', 'water', 0, 0, 'water.png', '0.00', 0, 0, 0, 0, 0, 0, 0, 0),
(16112, 'Miso Soybean Paste', 'cereal', '', 0, 0, 'miso.jpg', '2.68', 2, 0, 0, 0, 0, 0, 0, 0),
(18019, 'banana bread', 'fruit', 'bread', 0, 0, 'quick-bread.png', '401.79', 1467, 73, 47, 73, 246, 82, 19, 39),
(18064, 'bread', 'cereal', 'bread', 0, 0, 'white-bread.jpg', '10.00', 77, 4, 1, 2, 13, 4, 3, 6),
(19719, 'apricot jam', 'fruit', 'apricot', 0, 0, 'apricot-jam.jpg', '1.25', 2, 0, 0, 0, 1, 0, 0, 0),
(23572, 'beef', 'animal product', 'meat', 0, 0, 'beef-cubes-raw.png', '0.78', 3, 0, 0, 0, 0, 0, 0, 0),
(35137, 'corn meal', 'cereal', 'corn', 0, 0, 'cornmeal.png', '0.32', 4, 0, 0, 0, 1, 0, 0, 0),
(43479, 'shaoxing wine', 'drink', 'wine', 0, 0, 'fish-sauce.jpg', '1.60', 1, 0, 0, 0, 0, 0, 0, 0),
(93623, 'lettuce leaves', 'vegetable', 'leaves', 0, 0, 'iceberg-lettuce.jpg', '8.86', 4, 0, 0, 0, 1, 0, 0, 0),
(93657, 'shrimp paste', 'animal product', 'shrimp', 0, 0, 'shrimp-paste.jpg', '2.50', 3, 0, 0, 0, 0, 0, 1, 2),
(98862, 'olive paste', 'fruit', 'olive', 0, 0, 'olive-tapenade.jpg', '3.04', 0, 0, 0, 0, 0, 0, 0, 0),
(98916, 'truffle mushroom', 'vegetable', 'mushroom', 0, 0, 'truffle-mushrooms.png', '222.00', 0, 0, 0, 0, 5, 2, 2, 3),
(99094, 'acai berry powder', 'spices', 'acai berry ', 0, 0, 'acai-berry-powder.jpg', '12.94', 5, 0, 0, 1, 0, 0, 0, 0),
(99169, 'bread bowl', 'cereal', 'bread', 0, 0, 'bread-bowl.png', '0.88', 3, 0, 0, 0, 0, 0, 0, 0),
(99184, 'lemonade', 'drink', 'lemonade', 0, 0, 'lemonade.jpg', '0.21', 1, 0, 0, 0, 0, 0, 0, 0),
(99240, 'puy lentils', 'leguminous', 'lentils', 0, 0, 'lentils-puy.jpg', '1.34', 4, 0, 0, 0, 1, 0, 0, 1),
(1006170, 'veal stock', 'animal product', 'meat', 0, 0, 'beef-broth.png', '0.32', 0, 0, 0, 0, 0, 0, 0, 0),
(1009159, 'lime rind', 'fruit', 'lime', 0, 0, 'zest-lime.jpg', '558.33', 20, 1, 0, 0, 7, 2, 0, 1),
(1009286, 'pomegranates', 'fruit', 'pomegranates', 0, 0, 'pomegranate.jpg', '156.00', 234, 12, 3, 5, 53, 18, 5, 9),
(1015006, 'chicken meat', 'animal product', 'meat', 0, 0, 'chicken-breasts.png', '887.70', 2872, 144, 201, 310, 0, 0, 249, 497),
(1019070, 'sour cherries', 'fruit', 'cherries', 0, 0, 'cherries.jpg', '6.93', 5, 0, 0, 0, 1, 0, 0, 0),
(1072047, 'onion salt', 'spices', '', 0, 0, 'garlic-salt.jpg', '0.00', 0, 0, 0, 0, 0, 0, 0, 0),
(1092034, 'fish rub', 'animal product', 'fish', 0, 0, 'seasoning.png', '5.03', 3, 0, 0, 0, 1, 0, 0, 0),
(10011238, 'mushroom mix', 'vegetable', 'mushroom', 0, 0, 'mixed-mushrooms.png', '28.00', 5, 0, 0, 0, 1, 0, 0, 1),
(10014623, 'blackberry juice', 'fruit', 'blackberry', 0, 0, 'blackberry-juice.jpg', '0.46', 0, 0, 0, 0, 0, 0, 0, 0),
(10115261, 'whole fish', 'animal product', 'fish', 0, 0, 'fish-fillet.jpg', '1.78', 1, 0, 0, 0, 0, 0, 0, 0),
(10219172, 'strawberry gelatin', 'fruit', 'strawberry', 0, 0, 'red-jello.png', '1.07', 4, 0, 0, 0, 1, 0, 0, 0),
(10316069, 'dal', 'leguminous', 'lentils', 0, 0, 'lentils-brown.jpg', '0.29', 4, 0, 0, 0, 1, 0, 0, 1),
(10410123, 'pancetta', 'animal product', 'pork', 0, 0, 'pancetta.png', '4.00', 4, 0, 0, 1, 0, 0, 0, 0),
(10619297, 'cherry jam', 'fruit', 'cherries', 0, 0, 'cherry-jam.jpg', '1.25', 3, 0, 0, 0, 1, 0, 0, 0),
(13211111, 'avocado leaf', 'spices', '', 0, 0, 'avocado-leaves.jpg', '0.35', 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `RegimePersonnalise`
--

CREATE TABLE `RegimePersonnalise` (
  `idRegime` int(10) NOT NULL,
  `idClient` int(10) NOT NULL,
  `dateDebut` date NOT NULL,
  `periodeRegime` int(10) DEFAULT 30
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `RegimePersonnalise`
--

INSERT INTO `RegimePersonnalise` (`idRegime`, `idClient`, `dateDebut`, `periodeRegime`) VALUES
(1, 18, '2021-07-20', 30),
(2, 17, '2021-12-29', 30),
(3, 9, '2022-02-12', 30),
(4, 22, '2021-07-18', 30),
(5, 19, '2022-04-17', 30),
(6, 12, '2021-07-19', 30),
(7, 19, '2021-09-13', 30),
(8, 22, '2022-02-23', 30),
(9, 9, '2022-04-11', 30),
(10, 8, '2021-08-08', 30),
(11, 12, '2021-07-15', 30),
(12, 21, '2021-06-12', 30),
(13, 17, '2022-05-26', 30),
(14, 2, '2021-12-31', 30),
(15, 15, '2022-01-12', 30),
(16, 5, '2021-07-13', 30),
(17, 1, '2022-03-09', 30),
(18, 20, '2022-06-21', 30),
(19, 18, '2021-06-09', 30),
(20, 7, '2022-03-30', 30),
(27, 1, '2021-07-20', 35);

-- --------------------------------------------------------

--
-- Structure de la table `RepasPrévu`
--

CREATE TABLE `RepasPrévu` (
  `idRepas` int(10) NOT NULL,
  `idRecette` int(10) NOT NULL,
  `jour` int(10) NOT NULL,
  `momentJournee` time(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `RythmeActivite`
--

CREATE TABLE `RythmeActivite` (
  `id` int(10) NOT NULL,
  `titre` varchar(20) NOT NULL,
  `description` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `SuiviRegime`
--

CREATE TABLE `SuiviRegime` (
  `idRegime` int(15) NOT NULL,
  `ajoutCalorieJournalier` int(10) NOT NULL,
  `masseDebut` int(10) DEFAULT NULL,
  `masseFinRegime` int(10) DEFAULT NULL,
  `taille` int(10) DEFAULT NULL,
  `rythmeActivite` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `SuiviRegime`
--

INSERT INTO `SuiviRegime` (`idRegime`, `ajoutCalorieJournalier`, `masseDebut`, `masseFinRegime`, `taille`, `rythmeActivite`) VALUES
(1, 331, 59, 76, 180, 1),
(2, 440, 104, 104, 193, 2),
(3, 323, 98, 101, 186, 2),
(4, 462, 114, 109, 183, 3),
(5, 461, 58, 101, NULL, 2),
(6, 444, 72, 119, 176, 3),
(7, 372, 102, 65, 182, 2),
(8, 372, 119, 66, 199, 1),
(9, 305, 55, 118, 208, 3),
(10, 383, 108, 118, 158, 3),
(12, 346, 69, 115, 187, 2),
(13, 478, 83, 74, NULL, 2),
(14, 329, 53, 57, 199, 3),
(15, 350, 66, 64, 170, 1),
(16, 400, 115, 54, 182, 3),
(17, 481, 75, 96, 169, 3),
(18, 360, 99, 85, 190, 1),
(19, 429, 93, 87, 184, 1),
(20, 399, 80, 86, NULL, 1),
(26, 300, 80, NULL, 190, 2),
(27, 300, 80, NULL, 190, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Client`
--
ALTER TABLE `Client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rythmeActivite` (`rythmeActivite`);

--
-- Index pour la table `Ingredients`
--
ALTER TABLE `Ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `RegimePersonnalise`
--
ALTER TABLE `RegimePersonnalise`
  ADD PRIMARY KEY (`idRegime`),
  ADD KEY `idClient` (`idClient`);

--
-- Index pour la table `RepasPrévu`
--
ALTER TABLE `RepasPrévu`
  ADD PRIMARY KEY (`idRepas`),
  ADD KEY `idRecette` (`idRecette`);

--
-- Index pour la table `SuiviRegime`
--
ALTER TABLE `SuiviRegime`
  ADD PRIMARY KEY (`idRegime`),
  ADD KEY `rythmeActivité` (`rythmeActivite`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Client`
--
ALTER TABLE `Client`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT pour la table `RegimePersonnalise`
--
ALTER TABLE `RegimePersonnalise`
  MODIFY `idRegime` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `SuiviRegime`
--
ALTER TABLE `SuiviRegime`
  MODIFY `idRegime` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
