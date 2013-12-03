-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 03-12-2013 a las 21:27:12
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
-- Estructura de tabla para la tabla `balance`
--

CREATE TABLE IF NOT EXISTS `balance` (
  `IdBalance` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL,
  `Nombre` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `Abono` int(11) NOT NULL DEFAULT '0',
  `Cargo` int(11) NOT NULL,
  `Mes` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Year` int(11) NOT NULL,
  PRIMARY KEY (`IdBalance`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=29 ;

--
-- Volcado de datos para la tabla `balance`
--

INSERT INTO `balance` (`IdBalance`, `IdSocio`, `Nombre`, `Abono`, `Cargo`, `Mes`, `Year`) VALUES
(26, 1, 'Oscar Vargas Muñoz', 0, 4500, 'Dic', 2013),
(27, 3, 'Israel Alcantar Cortés', 2100, 2700, 'Dic', 2013),
(28, 4, 'Victor Chapa Clavillo', 0, 0, 'Dic', 2013);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE IF NOT EXISTS `cargos` (
  `IdCargo` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL,
  `Servicio` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Cargo` int(11) NOT NULL,
  `Abono` int(11) NOT NULL,
  `Saldo` int(11) NOT NULL DEFAULT '0',
  `Hora` varchar(12) COLLATE utf8_spanish_ci NOT NULL,
  `Dia` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `Mes` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `Year` int(11) NOT NULL,
  PRIMARY KEY (`IdCargo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=45 ;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`IdCargo`, `IdSocio`, `Servicio`, `Cargo`, `Abono`, `Saldo`, `Hora`, `Dia`, `Mes`, `Year`) VALUES
(38, 1, 'Mensualidad', 1500, 0, 1500, '', '03', 'Dic', 2013),
(41, 3, 'Carro Bar', 1000, 700, 300, '7:08 pm', '03', 'Dic', 2013),
(42, 3, 'Velaria', 1000, 500, 500, '7:09 pm', '03', 'Dic', 2013),
(43, 3, 'Carro Bar', 200, 0, 200, '7:48 pm', '03', 'Dic', 2013),
(44, 3, 'Carro Bar', 500, 0, 500, '7:50 pm', '03', 'Dic', 2013);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargosf`
--

CREATE TABLE IF NOT EXISTS `cargosf` (
  `IdCargoF` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL,
  `Frecuencia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Servicio` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `Cargo` int(11) NOT NULL,
  PRIMARY KEY (`IdCargoF`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `cargosf`
--

INSERT INTO `cargosf` (`IdCargoF`, `IdSocio`, `Frecuencia`, `Servicio`, `Cargo`) VALUES
(1, 1, 'Mensual', 'Mensualidad', 1500);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`IdHistorial`, `IdSocio`, `Nombre`, `FechaA`, `HoraA`) VALUES
(1, 3, 'Israel Alcantar Cortés', '13/11/2013', '11:31 am');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recurrentes`
--

CREATE TABLE IF NOT EXISTS `recurrentes` (
  `IdServicio` int(11) NOT NULL AUTO_INCREMENT,
  `Servicio` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Cargo` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdServicio`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `recurrentes`
--

INSERT INTO `recurrentes` (`IdServicio`, `Servicio`, `Cargo`) VALUES
(1, 'Mensualidad', 1500),
(2, 'Mantenimiento', 1200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `saldos`
--

CREATE TABLE IF NOT EXISTS `saldos` (
  `IdSaldo` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL,
  `Nombre` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `SaldoAnt` int(11) NOT NULL DEFAULT '0',
  `SaldoAct` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdSaldo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `saldos`
--

INSERT INTO `saldos` (`IdSaldo`, `IdSocio`, `Nombre`, `SaldoAnt`, `SaldoAct`) VALUES
(1, 1, 'Oscar Vargas Muñoz', 0, 4500),
(2, 3, 'Israel Alcantar Cortés', 1000, 1500),
(3, 4, 'Victor Chapa Clavillo', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE IF NOT EXISTS `servicios` (
  `IdServicio` int(11) NOT NULL AUTO_INCREMENT,
  `Servicio` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Cargo` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdServicio`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`IdServicio`, `Servicio`, `Cargo`) VALUES
(1, 'Mensualidad', 1450),
(2, 'Carro Bar', 0),
(3, 'Velaria', 0),
(4, 'Invitados', 0),
(5, 'Mantenimiento', 0),
(6, 'Carros', 0),
(7, 'Canastas', 0),
(8, '1H Plataforma', 0),
(9, 'Hoyo 6', 0),
(10, 'Futbol', 0),
(11, 'Eventos', 0),
(12, 'Clases de Golf', 0),
(13, 'Pelotas de Golf', 0),
(14, 'Renta de equipos', 0),
(15, 'Torneo', 0),
(16, 'Varios', 0);

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
(1, 0, 'Oscar', 'Vargas', 'Muñoz', 'Oscar Vargas Muñoz', '', '24/11/1990', 'domicilio 1', 'manzana 1', 1, 1, 123, 1234567890, 'darckoso@hotmail.com', 'Propietario', 'Individual', 'AB-', '14/10/2013', 'socios/1/1679014-hachiko200505_2.jpg', 'Golf', '', '0'),
(3, 0, 'Israel', 'Alcantar', 'Cortés', 'Israel Alcantar Cortés', '', '10/01/2013', 'Domicilio1', '1', 2, 3, 1234567, 2147483647, 'isracortes62@gmail.com', 'Propietario', 'Familiar', 'A+', '10/22/2013', 'socios/3/perfil.jpg', 'Piscina, Gym, SPA', '', '0'),
(4, 1, 'Victor', 'Chapa', 'Clavillo', 'Victor Chapa Clavillo', 'Esposo', '26/06/1990', 'Casa 1', '1', 1, 1, 1234567, 1234567890, 'victor_260690@hotmail.com', 'Propietario', 'Jr', 'O+', '28/10/2013', 'socios/4/perfil.jpg', 'Gym', '', 'Si');

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
