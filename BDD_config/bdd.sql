-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_webuy
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `annonce_buyer`
--

DROP TABLE IF EXISTS `annonce_buyer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `annonce_buyer` (
  `idOffre` int(11) NOT NULL AUTO_INCREMENT,
  `idAnnonce` int(11) NOT NULL,
  `prix_achat` int(11) NOT NULL,
  `message_achat` varchar(50) NOT NULL,
  `id_username` varchar(50) NOT NULL,
  PRIMARY KEY (`idOffre`),
  KEY `fk_annonce_buyer_id_username` (`id_username`),
  CONSTRAINT `fk_annonce_buyer_idOffre` FOREIGN KEY (`idOffre`) REFERENCES `annonce_sales` (`idannonce`),
  CONSTRAINT `fk_annonce_buyer_id_username` FOREIGN KEY (`id_username`) REFERENCES `data_user` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonce_buyer`
--

LOCK TABLES `annonce_buyer` WRITE;
/*!40000 ALTER TABLE `annonce_buyer` DISABLE KEYS */;
/*!40000 ALTER TABLE `annonce_buyer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `annonce_sales`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categorie` (
  `idcategorie` int(11) NOT NULL AUTO_INCREMENT,
  `namecategorie` varchar(50) NOT NULL,
  PRIMARY KEY (`idcategorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--


DROP TABLE IF EXISTS `annonce_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `annonce_sales` (
  `idAnnonce` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `prix_vente` int(11) NOT NULL,
  `id_username` varchar(50) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `id_categorie` int(11) NOT NULL,
  PRIMARY KEY (`idAnnonce`),
  KEY `fk_annonce_sales_id_username` (`id_username`),
  KEY `fk_annonce_sales_id_categorie` (`id_categorie`),
  CONSTRAINT `fk_annonce_sales_id_categorie` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`idcategorie`),
  CONSTRAINT `fk_annonce_sales_id_username` FOREIGN KEY (`id_username`) REFERENCES `data_user` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonce_sales`
--

LOCK TABLES `annonce_sales` WRITE;
/*!40000 ALTER TABLE `annonce_sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `annonce_sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie`
--


LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_user`
--

DROP TABLE IF EXISTS `data_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `data_user` (
  `username` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `hash` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_user`
--

LOCK TABLES `data_user` WRITE;
/*!40000 ALTER TABLE `data_user` DISABLE KEYS */;
INSERT INTO `data_user` VALUES ('rebc','Rébecca','Armand','test@mail.com','test_adresse','hash_value','passreb'),('reboulgreg','reboul','gregoire','greg@gmail.com','test','$2a$10$okq/Wq1TtZOfDUVgxIHT6efQKzW8vtXIP0hZFLaQyMhOBpDHDyWxi','reboulgreg');
/*!40000 ALTER TABLE `data_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-30 12:22:05
