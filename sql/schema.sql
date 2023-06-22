DROP DATABASE IF EXISTS employe_db;
CREATE DATABASE employe_db;

USE employe_db;

CREATE TABLE department (
  id INT NOT NULL primary key auto_increment,
  name VARCHAR(30) NOT NULL

);

CREATE TABLE role (
  id INT NOT NULL primary key auto_increment,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL, 
  department_id INT NOT NULL
);

CREATE TABLE employe(
  id INT NOT NULL primary key auto_increment,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL
);
