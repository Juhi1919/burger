DROP DATABASE IF EXISTS `burgers`;
CREATE DATABASE `burgers`;

USE burgers;

CREATE TABLE burgers (
id int AUTO_INCREMENT,
PRIMARY KEY (id),
burger_name varchar(50) NOT NULL,
devoured BOOLEAN default false
);
