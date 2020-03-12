DROP DATABASE IF EXISTS wonder4-reviews;

CREATE DATABASE wonder4-reviews;

USE wonder4-reviews;

CREATE TABLE restuarants (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  useravatar
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  review_id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  comment VARCHAR(255) NOT NULL,
  date DATE,
  user_id VARCHAR(50) NOT NULL,
  restuarant_id INT NOT NULL,
  PRIMARY KEY (review_id)
);