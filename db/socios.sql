-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 21-10-2013 a las 18:06:11
-- Versión del servidor: 5.6.12-log
-- Versión de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `clubimperial`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE IF NOT EXISTS `socios` (
  `IdSocio` int(5) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `ApellidoP` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `ApellidoM` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `FNacimiento` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `Domicilio` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Manzana` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Lote` int(10) NOT NULL,
  `Coto` int(10) NOT NULL,
  `Telefono` int(12) NOT NULL,
  `Celular` int(12) NOT NULL,
  `Membresia` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `TipoMembresia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Sangre` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `FAlta` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `Foto` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Afiliacion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdSocio`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`IdSocio`, `Nombre`, `ApellidoP`, `ApellidoM`, `FNacimiento`, `Domicilio`, `Manzana`, `Lote`, `Coto`, `Telefono`, `Celular`, `Membresia`, `TipoMembresia`, `Sangre`, `FAlta`, `Foto`, `Afiliacion`) VALUES
(1, 'Osho2', '', '', '24/11/1990', 'domicilio 1', 'manzana 1', 0, 0, 123, 1234567890, 'Rentista', '', 'A', '14/10/2013', 'socios/1/perfil.jpg', 'Golf');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
