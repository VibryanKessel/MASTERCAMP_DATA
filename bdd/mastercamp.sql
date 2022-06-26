-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 26 juin 2022 à 13:57
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
  `categories` varchar(20) DEFAULT NULL,
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

INSERT INTO `Ingredients` (`id`, `name`, `categories`, `image`, `estimatedCost`, `calories`, `caloriesPODN`, `fat`, `fatPODN`, `carbohydrates`, `carbohydratesPODN`, `protein`, `proteinPODN`) VALUES
(1106, 'goat\'s milk', 'animal product|drink', 'milk.png', '0.14', 1, 0, 0, 0, 0, 0, 0, 0),
(1123, 'eggs', 'animal product', 'egg.png', '24.00', 63, 3, 4, 6, 0, 0, 6, 11),
(1125, 'yolk', 'animal product', 'egg-yolk.jpg', '24.00', 58, 3, 5, 7, 1, 0, 3, 6),
(2015, 'curry powder trio', 'spices', 'curry-powder.jpg', '5.11', 3, 0, 0, 0, 1, 0, 0, 0),
(5139, 'duck', 'animal product', 'duck.png', '558.57', 3087, 154, 301, 462, 0, 0, 88, 176),
(5317, 'duck legs', 'animal product', 'duck-legs.jpg', '172.12', 374, 19, 20, 30, 0, 0, 46, 92),
(6008, 'beef broth', 'animal product', 'beef-broth.png', '0.24', 0, 0, 0, 0, 0, 0, 0, 0),
(6038, 'cheese soup', 'animal product', 'cheddar-cheese-soup.png', '0.68', 1, 0, 0, 0, 0, 0, 0, 0),
(6963, 'fish stock', 'animal product', 'chicken-broth.png', '0.31', 0, 0, 0, 0, 0, 0, 0, 0),
(6973, 'chile paste', '', 'chili-paste.png', '1.29', 1, 0, 0, 0, 0, 0, 0, 0),
(8120, 'old fashioned oats', 'cereal', 'rolled-oats.jpg', '0.39', 4, 0, 0, 0, 1, 0, 0, 0),
(9019, 'apple sauce', 'fruit', 'applesauce.png', '0.31', 0, 0, 0, 0, 0, 0, 0, 0),
(9040, 'ripe bananas', 'fruit', 'bananas.jpg', '15.73', 105, 5, 0, 1, 27, 9, 1, 3),
(9042, 'blackberry', 'fruit', 'blackberries.jpg', '1.77', 1, 0, 0, 0, 0, 0, 0, 0),
(9148, 'kiwifruit', 'fruit', 'kiwi.png', '59.87', 53, 3, 0, 1, 13, 4, 1, 2),
(9159, 'limes', 'fruit', 'lime.jpg', '25.00', 20, 1, 0, 0, 7, 2, 0, 1),
(9181, 'cantaloupes', 'fruit', 'cantaloupe.png', '150.00', 188, 9, 1, 2, 45, 15, 5, 9),
(9195, 'olive', 'fruit', 'olives-mixed.jpg', '3.14', 6, 0, 1, 1, 0, 0, 0, 0),
(9200, 'oranges', 'fruit', 'orange.png', '29.11', 62, 3, 0, 0, 15, 5, 1, 2),
(9206, 'juice of orange', 'drink', 'orange-juice.jpg', '12.20', 27, 1, 0, 0, 6, 2, 0, 1),
(9273, 'pineapple juice', 'drink', 'pineapple-juice.jpg', '0.17', 1, 0, 0, 0, 0, 0, 0, 0),
(9316, 'strawberry', 'fruit', 'strawberries.png', '10.71', 4, 0, 0, 0, 1, 0, 0, 0),
(9326, 'watermelon chunks', 'fruit', 'watermelon.png', '699.00', 1350, 68, 7, 10, 340, 113, 27, 55),
(9442, 'pomegranate juice', 'drink', 'pomegranate-juice.jpg', '1.05', 1, 0, 0, 0, 0, 0, 0, 0),
(11001, 'microgreens', '', 'alfalfa-sprouts.png', '0.93', 0, 0, 0, 0, 0, 0, 0, 0),
(11676, 'radish sprouts', 'vegetable', 'alfalfa-sprouts.png', '0.93', 0, 0, 0, 0, 0, 0, 0, 0),
(14084, 'wine', 'drink', 'red-wine.jpg', '1.46', 1, 0, 0, 0, 0, 0, 0, 0),
(14096, 'red wine', 'drink', 'red-wine.jpg', '978.75', 638, 32, 0, 0, 20, 7, 1, 1),
(14136, 'gingerale', 'drink', 'soda-can.jpg', '0.07', 0, 0, 0, 0, 0, 0, 0, 0),
(14412, 'purified water', 'drink', 'water.png', '0.00', 0, 0, 0, 0, 0, 0, 0, 0),
(16112, 'Miso Soybean Paste', 'cereal', 'miso.jpg', '2.68', 2, 0, 0, 0, 0, 0, 0, 0),
(18019, 'banana bread', 'fruit', 'quick-bread.png', '401.79', 1467, 73, 47, 73, 246, 82, 19, 39),
(18064, 'bread', 'cereal', 'white-bread.jpg', '10.00', 77, 4, 1, 2, 13, 4, 3, 6),
(19719, 'apricot jam', 'fruit', 'apricot-jam.jpg', '1.25', 2, 0, 0, 0, 1, 0, 0, 0),
(23572, 'beef', 'animal product', 'beef-cubes-raw.png', '0.78', 3, 0, 0, 0, 0, 0, 0, 0),
(35137, 'corn meal', 'cereal', 'cornmeal.png', '0.32', 4, 0, 0, 0, 1, 0, 0, 0),
(43479, 'shaoxing wine', 'drink', 'fish-sauce.jpg', '1.60', 1, 0, 0, 0, 0, 0, 0, 0),
(93623, 'lettuce leaves', 'vegetable', 'iceberg-lettuce.jpg', '8.86', 4, 0, 0, 0, 1, 0, 0, 0),
(93657, 'shrimp paste', 'animal product', 'shrimp-paste.jpg', '2.50', 3, 0, 0, 0, 0, 0, 1, 2),
(98862, 'olive paste', 'fruit', 'olive-tapenade.jpg', '3.04', 0, 0, 0, 0, 0, 0, 0, 0),
(98916, 'truffle mushroom', 'vegetable', 'truffle-mushrooms.png', '222.00', 0, 0, 0, 0, 5, 2, 2, 3),
(99094, 'acai berry powder', 'spices', 'acai-berry-powder.jpg', '12.94', 5, 0, 0, 1, 0, 0, 0, 0),
(99169, 'bread bowl', 'cereal', 'bread-bowl.png', '0.88', 3, 0, 0, 0, 0, 0, 0, 0),
(99184, 'lemonade', 'drink', 'lemonade.jpg', '0.21', 1, 0, 0, 0, 0, 0, 0, 0),
(99240, 'puy lentils', 'lentils|pulse', 'lentils-puy.jpg', '1.34', 4, 0, 0, 0, 1, 0, 0, 1),
(1006170, 'veal stock', 'animal product', 'beef-broth.png', '0.32', 0, 0, 0, 0, 0, 0, 0, 0),
(1009159, 'lime rind', 'fruit', 'zest-lime.jpg', '558.33', 20, 1, 0, 0, 7, 2, 0, 1),
(1009286, 'pomegranates', 'fruit', 'pomegranate.jpg', '156.00', 234, 12, 3, 5, 53, 18, 5, 9),
(1015006, 'chicken meat', 'animal product', 'chicken-breasts.png', '887.70', 2872, 144, 201, 310, 0, 0, 249, 497),
(1019070, 'sour cherries', 'fruit', 'cherries.jpg', '6.93', 5, 0, 0, 0, 1, 0, 0, 0),
(1072047, 'onion salt', 'spices|vegetable', 'garlic-salt.jpg', '0.00', 0, 0, 0, 0, 0, 0, 0, 0),
(1092034, 'fish rub', 'animal product', 'seasoning.png', '5.03', 3, 0, 0, 0, 1, 0, 0, 0),
(10011238, 'mushroom mix', 'mushrooms', 'mixed-mushrooms.png', '28.00', 5, 0, 0, 0, 1, 0, 0, 1),
(10014623, 'blackberry juice', 'drink', 'blackberry-juice.jpg', '0.46', 0, 0, 0, 0, 0, 0, 0, 0),
(10115261, 'whole fish', 'animal product', 'fish-fillet.jpg', '1.78', 1, 0, 0, 0, 0, 0, 0, 0),
(10219172, 'strawberry gelatin', 'fruit', 'red-jello.png', '1.07', 4, 0, 0, 0, 1, 0, 0, 0),
(10316069, 'dal', 'pulse', 'lentils-brown.jpg', '0.29', 4, 0, 0, 0, 1, 0, 0, 1),
(10410123, 'pancetta', 'animal product', 'pancetta.png', '4.00', 4, 0, 0, 1, 0, 0, 0, 0),
(10619297, 'cherry jam', 'fruit', 'cherry-jam.jpg', '1.25', 3, 0, 0, 0, 1, 0, 0, 0),
(13211111, 'avocado leaf', 'spices', 'avocado-leaves.jpg', '0.35', 0, 0, 0, 0, 0, 0, 0, 0);

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
  `id` int(15) NOT NULL,
  `dateDebut` date NOT NULL,
  `ajoutCalorieJournalier` int(10) NOT NULL,
  `masseDebut` int(10) DEFAULT NULL,
  `masseFinRegime` int(10) DEFAULT NULL,
  `taille` int(10) DEFAULT NULL,
  `periodeRegime` int(10) NOT NULL,
  `rythmeActivite` int(10) NOT NULL,
  `idClient` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `SuiviRegime`
--

INSERT INTO `SuiviRegime` (`id`, `dateDebut`, `ajoutCalorieJournalier`, `masseDebut`, `masseFinRegime`, `taille`, `periodeRegime`, `rythmeActivite`, `idClient`) VALUES
(1, '2021-04-11', 331, 59, 76, 180, 50, 1, 14),
(2, '2021-11-22', 440, 104, 104, 193, 50, 2, 20),
(3, '2021-12-30', 323, 98, 101, 186, 30, 2, 1),
(4, '2021-11-06', 462, 114, 109, 183, 10, 3, 39),
(5, '2021-09-05', 461, 58, 101, NULL, 100, 2, 21),
(6, '2021-01-08', 444, 72, 119, 176, 100, 3, 33),
(7, '2021-10-12', 372, 102, 65, 182, 40, 2, 41),
(8, '2021-01-26', 372, 119, 66, 199, 70, 1, 34),
(9, '2021-04-04', 305, 55, 118, 208, 60, 3, 18),
(10, '2021-02-15', 383, 108, 118, 158, 70, 3, 27),
(12, '2021-05-14', 346, 69, 115, 187, 30, 2, 6),
(13, '2021-10-31', 478, 83, 74, NULL, 10, 2, 26),
(14, '2021-10-21', 329, 53, 57, 199, 80, 3, 40),
(15, '2021-07-13', 350, 66, 64, 170, 80, 1, 38),
(16, '2021-11-01', 400, 115, 54, 182, 60, 3, 42),
(17, '2021-05-13', 481, 75, 96, 169, 90, 3, 32),
(18, '2021-04-23', 360, 99, 85, 190, 60, 1, 11),
(19, '2021-07-18', 429, 93, 87, 184, 10, 1, 17),
(20, '2021-01-13', 399, 80, 86, NULL, 100, 1, 46),
(21, '2021-03-04', 455, 103, 78, 166, 90, 2, 8),
(22, '2021-01-06', 411, 82, 96, NULL, 20, 1, 23),
(23, '2021-02-17', 488, 110, 72, 188, 20, 3, 13),
(25, '2021-08-12', 360, 100, 74, 169, 70, 1, 28),
(27, '2021-09-29', 373, 90, 53, 166, 40, 2, 3),
(28, '2021-08-30', 342, 62, 57, 165, 50, 3, 16),
(30, '2021-06-06', 474, 118, 71, NULL, 40, 3, 9),
(31, '2021-12-04', 495, 119, 50, 204, 60, 3, 31),
(33, '2021-11-30', 302, 100, 118, 202, 100, 1, 29),
(37, '2021-03-22', 492, 95, 102, 191, 80, 1, 5),
(39, '2021-02-24', 328, 71, 68, 192, 90, 3, 24),
(40, '2021-03-19', 445, 69, 68, 189, 90, 3, 48),
(45, '2021-03-22', 452, 89, 52, 199, 30, 2, 2);

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
-- Index pour la table `SuiviRegime`
--
ALTER TABLE `SuiviRegime`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_Client` (`idClient`),
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
-- AUTO_INCREMENT pour la table `SuiviRegime`
--
ALTER TABLE `SuiviRegime`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
