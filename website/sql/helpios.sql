-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 17 mai 2018 à 22:19
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `Helpios`
--

-- --------------------------------------------------------

--
-- Structure de la table `Map`
--

CREATE TABLE `Map` (
  `idMap` int(11) NOT NULL,
  `idTooltip` int(11) DEFAULT NULL,
  `idScenario` int(11) DEFAULT NULL,
  `Ordonnancement` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Map`
--

INSERT INTO `Map` (`idMap`, `idTooltip`, `idScenario`, `Ordonnancement`) VALUES
(1, 6, 1, 1),
(2, 7, 1, 2),
(3, 8, 1, 3),
(4, 9, 1, 4);

-- --------------------------------------------------------

--
-- Structure de la table `Page`
--

CREATE TABLE `Page` (
  `idPage` int(11) NOT NULL,
  `urlPage` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Page`
--

INSERT INTO `Page` (`idPage`, `urlPage`) VALUES
(1, 'http://127.0.0.1/index.html'),
(2, 'https://candidat.pole-emploi.fr/offres/recherche?offresPartenaires=true&rayon=10&tri=0');

-- --------------------------------------------------------

--
-- Structure de la table `Scenario`
--

CREATE TABLE `Scenario` (
  `idScenario` int(11) NOT NULL,
  `titreScenario` varchar(255) DEFAULT NULL,
  `nom` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Scenario`
--

INSERT INTO `Scenario` (`idScenario`, `titreScenario`, `nom`) VALUES
(1, 'Scénario de présentation', 'myScenario');

-- --------------------------------------------------------

--
-- Structure de la table `StatPage`
--

CREATE TABLE `StatPage` (
  `idStatPage` int(11) NOT NULL,
  `dateArriveePage` datetime DEFAULT NULL,
  `dateDepartPage` datetime DEFAULT NULL,
  `nbOuverturePage` int(11) DEFAULT NULL,
  `tempsMin` time DEFAULT NULL,
  `tempsMax` time DEFAULT NULL,
  `TooltipActivated` tinyint(1) DEFAULT NULL,
  `idPage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `StatTooltip`
--

CREATE TABLE `StatTooltip` (
  `idStatTooltip` int(11) NOT NULL,
  `idTooltip` int(11) DEFAULT NULL,
  `nbOuvertureTooltip` int(11) DEFAULT NULL,
  `dateTooltip` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Tooltip`
--

CREATE TABLE `Tooltip` (
  `idTooltip` int(11) NOT NULL,
  `typeTooltip` varchar(45) DEFAULT NULL,
  `baliseTooltip` varchar(45) DEFAULT NULL,
  `titreTooltip` varchar(255) DEFAULT NULL,
  `idPage` int(11) DEFAULT NULL,
  `descriptionTooltip` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Tooltip`
--

INSERT INTO `Tooltip` (`idTooltip`, `typeTooltip`, `baliseTooltip`, `titreTooltip`, `idPage`, `descriptionTooltip`) VALUES
(1, NULL, 'myButton', NULL, 1, 'Bonsoir, je suis une description amicale'),
(2, NULL, 'myInput', NULL, 1, 'Attention, ne vous trompez pas en remplissant ce champs'),
(3, NULL, 'idmotsCles-selectized', 'Metier/Competence', 1, 'Dans le champ « Métier, compétence», vous pouvez saisir par exemple, « serveur », « anglais », « brasserie » en tapant sur la touche « entrée » entre chaque mot. Vous pouvez également saisir une référence particulière, par exemple 049RSNK.'),
(4, NULL, 'idlieux-selectized', 'Lieu de travail', 1, 'Dans le champ « lieu de travail », vous avez la possibilité de saisir une commune, un département, une région, un pays ou un continent.'),
(5, NULL, 'btnSubmitRechercheForm', 'Lancer la recherche', 1, 'Cliquez sur le ce bouton pour valider votre recherche.'),
(6, '', 'name', 'Nom', 1, 'Votre nom de famille'),
(7, '', 'lastName', 'Prénom', 1, 'Votre prénom'),
(8, '', 'email', 'Email', 1, 'Votre adresse e-mail'),
(9, '', 'numero', 'Numéro', 1, 'Un numero de téléphone sur lequel vous êtes joignable'),
(10, '', 'name2', 'Nom', 1, 'Votre nom de famille'),
(11, '', 'lastName2', 'Prénom', 1, 'Votre prénom'),
(12, '', 'email2', 'Email', 1, 'Votre adresse e-mail'),
(13, NULL, 'numero2', 'Numéro', 1, 'Un numero de téléphone sur lequel vous êtes joignable'),
(14, NULL, 'message', 'Message', 1, 'Message à joindre lors de l\'inscription, information complémentaire, urgence de votre demande etc...'),
(15, NULL, 'message2', 'Message', 1, 'Message à joindre lors de l\'inscription, information complémentaire, urgence de votre demande etc...'),
(16, NULL, 'message3', 'Message', 1, 'Message à joindre lors de l\'inscription, information complémentaire, urgence de votre demande etc...');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Map`
--
ALTER TABLE `Map`
  ADD PRIMARY KEY (`idMap`),
  ADD KEY `fk_Tooltip_idx` (`idTooltip`),
  ADD KEY `fk_Scenario_idx` (`idScenario`);

--
-- Index pour la table `Page`
--
ALTER TABLE `Page`
  ADD PRIMARY KEY (`idPage`);

--
-- Index pour la table `Scenario`
--
ALTER TABLE `Scenario`
  ADD PRIMARY KEY (`idScenario`);

--
-- Index pour la table `StatPage`
--
ALTER TABLE `StatPage`
  ADD PRIMARY KEY (`idStatPage`),
  ADD KEY `fk_Page_idx` (`idPage`);

--
-- Index pour la table `StatTooltip`
--
ALTER TABLE `StatTooltip`
  ADD PRIMARY KEY (`idStatTooltip`),
  ADD KEY `fk_Tooltip_idx` (`idTooltip`);

--
-- Index pour la table `Tooltip`
--
ALTER TABLE `Tooltip`
  ADD PRIMARY KEY (`idTooltip`),
  ADD KEY `fk_Page_idx` (`idPage`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Map`
--
ALTER TABLE `Map`
  MODIFY `idMap` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Page`
--
ALTER TABLE `Page`
  MODIFY `idPage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Scenario`
--
ALTER TABLE `Scenario`
  MODIFY `idScenario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `StatPage`
--
ALTER TABLE `StatPage`
  MODIFY `idStatPage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `StatTooltip`
--
ALTER TABLE `StatTooltip`
  MODIFY `idStatTooltip` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Tooltip`
--
ALTER TABLE `Tooltip`
  MODIFY `idTooltip` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Map`
--
ALTER TABLE `Map`
  ADD CONSTRAINT `fk_Scenario` FOREIGN KEY (`idScenario`) REFERENCES `Scenario` (`idScenario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Tooltip` FOREIGN KEY (`idTooltip`) REFERENCES `Tooltip` (`idTooltip`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `StatPage`
--
ALTER TABLE `StatPage`
  ADD CONSTRAINT `fk_Page_Stat` FOREIGN KEY (`idPage`) REFERENCES `Page` (`idPage`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `StatTooltip`
--
ALTER TABLE `StatTooltip`
  ADD CONSTRAINT `fk_Tooltip_Stat` FOREIGN KEY (`idTooltip`) REFERENCES `Tooltip` (`idTooltip`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `Tooltip`
--
ALTER TABLE `Tooltip`
  ADD CONSTRAINT `fk_Page` FOREIGN KEY (`idPage`) REFERENCES `Page` (`idPage`) ON DELETE NO ACTION ON UPDATE NO ACTION;
