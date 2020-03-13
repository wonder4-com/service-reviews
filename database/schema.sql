DROP DATABASE IF EXISTS wonder4;

CREATE DATABASE wonder4;

USE wonder4;

CREATE TABLE restuarants (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  review_id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  comment VARCHAR(2000) NOT NULL,
  date DATE NOT NULL,
  username VARCHAR(255) NOT NULL,
  usercity VARCHAR(255) NOT NULL,
  restuarant_id INT NOT NULL,
  PRIMARY KEY (review_id)
);