SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-05:00";

--
-- Base de datos: `node-express-mysql-crud`
--

-- --------------------------------------------------------

CREATE TABLE users(
            _id INT NOT NULL AUTO_INCREMENT,
            firstName VARCHAR(45) NOT NULL,
            lastName VARCHAR(45) NOT NULL,
            email VARCHAR(45) NOT NULL,
            createdAt DATETIME NULL,
            updatedAt DATETIME NULL,
            PRIMARY KEY (_id),
            UNIQUE INDEX _id_UNIQUE (_id ASC),
            UNIQUE INDEX email_UNIQUE (email ASC)
);
