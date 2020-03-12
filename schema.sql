DROP DATABASE IF EXISTS wonder4-reviews;

CREATE DATABASE wonder4-reviews;

USE wonder4-reviews;

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  comment VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  date DATE,
  PRIMARY KEY (id)
);