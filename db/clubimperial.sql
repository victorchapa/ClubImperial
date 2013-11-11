-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 11-11-2013 a las 23:32:10
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
CREATE DATABASE IF NOT EXISTS `clubimperial` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `clubimperial`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deudas`
--

CREATE TABLE IF NOT EXISTS `deudas` (
  `IdDeuda` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL,
  `Nombre` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `Abono` int(11) NOT NULL DEFAULT '0',
  `Total` int(11) NOT NULL,
  `Mes` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Year` int(11) NOT NULL,
  PRIMARY KEY (`IdDeuda`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `deudas`
--

INSERT INTO `deudas` (`IdDeuda`, `IdSocio`, `Nombre`, `Abono`, `Total`, `Mes`, `Year`) VALUES
(1, 1, 'Oscar Vargas Muñoz', 300, 3550, 'Nov', 2013),
(2, 4, 'Victor Chapa Clavillo  ', 1650, 3150, 'Nov', 2013);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE IF NOT EXISTS `facturas` (
  `IdFactura` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL,
  `Servicio` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Abono` int(11) NOT NULL DEFAULT '0',
  `Total` int(11) NOT NULL,
  `Hora` varchar(12) COLLATE utf8_spanish_ci NOT NULL,
  `Dia` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `Mes` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `Year` int(11) NOT NULL,
  PRIMARY KEY (`IdFactura`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`IdFactura`, `IdSocio`, `Servicio`, `Abono`, `Total`, `Hora`, `Dia`, `Mes`, `Year`) VALUES
(1, 1, 'Mensualidad', 150, 3000, '11:37 am', '01', 'Nov', 2013),
(2, 1, 'Bar', 0, 600, '01:45 pm', '03', 'Nov', 2013),
(3, 1, 'Invitados', 150, 150, '9:51 pm', '11', 'Nov', 2013),
(4, 4, 'Mensualidad', 1500, 3000, '9:51 pm', '11', 'Nov', 2013),
(5, 4, 'Carros', 150, 150, '9:52 pm', '11', 'Nov', 2013);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE IF NOT EXISTS `historial` (
  `IdHistorial` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL,
  `Nombre` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `FechaA` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `HoraA` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdHistorial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE IF NOT EXISTS `socios` (
  `IdSocio` int(5) NOT NULL AUTO_INCREMENT,
  `IdPariente` int(11) NOT NULL,
  `Nombre` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `ApellidoP` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `ApellidoM` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `Filtro` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `Parentesco` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `FNacimiento` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `Domicilio` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Manzana` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Lote` int(10) NOT NULL,
  `Coto` int(10) NOT NULL,
  `Telefono` int(12) NOT NULL,
  `Celular` int(12) NOT NULL,
  `Correo` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `Membresia` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `TipoMembresia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Sangre` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `FAlta` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `Foto` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Afiliacion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Cuota` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Mayor` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdSocio`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`IdSocio`, `IdPariente`, `Nombre`, `ApellidoP`, `ApellidoM`, `Filtro`, `Parentesco`, `FNacimiento`, `Domicilio`, `Manzana`, `Lote`, `Coto`, `Telefono`, `Celular`, `Correo`, `Membresia`, `TipoMembresia`, `Sangre`, `FAlta`, `Foto`, `Afiliacion`, `Cuota`, `Mayor`) VALUES
(1, 0, 'Oscar', 'Vargas', 'Muñoz', 'Oscar Vargas Muñoz', '', '24/11/1990', 'domicilio 1', 'manzana 1', 0, 0, 123, 1234567890, '', 'Rentista', 'Individual', 'A', '14/10/2013', 'socios/1/perfil.jpg', 'Golf', '', '0'),
(3, 0, 'Israel', 'Alcantar', 'Cortés', 'Israel Alcantar Cortés', '', '10/01/2013', 'Domicilio1', '1', 2, 3, 1234567, 2147483647, 'isracortes62@gmail.com', 'Propietario', 'Familiar', 'A+', '10/22/2013', 'socios/3/perfil.jpg', 'Piscina, Gym, SPA', '', '0'),
(4, 1, 'Victor', 'Chapa', 'Clavillo', 'Victor Chapa Clavillo', 'Esposo', '26/06/1990', 'En la misma casa', '1', 1, 1, 1234567, 1234567890, 'victor_260690@hotmail.com', 'Propietario', 'Familiar', 'O+', '28/10/2013', 'socios/4/perfil.jpg', 'Gym', '', 'Si');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Clave` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Permiso` int(11) NOT NULL,
  PRIMARY KEY (`Id_Usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id_Usuario`, `Usuario`, `Clave`, `Permiso`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
