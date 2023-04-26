<?php

$host = 'localhost';
$user = 'root';
$passw = 'Vowa1955!!!';
$port = '3314';

$tableUsers = 'users';
$tablePainting = 'paintdoors';
$tableFilmColor = 'filmcolor';
$tableHandColor = 'handcolor';
$tableWidthDoors = 'widthdoors';
$tableHeightDoors = 'heightdoors';
$tableOpeningDoors = 'openingdoors';
$tableAcsessories = 'accesories';
$tableZakaz = 'zakaz';

$db = new mysqli($host, $user, $passw);

if ($db->connect_error) {
    die("Ошибка подключения: " . $db->connect_error);
}

$database = 'config_door';

$sql = "SHOW DATABASES LIKE '".$database."'";
$resultCheckedDb = $db->query($sql);

if ($resultCheckedDb->num_rows > 0) {
    
    
  $sql = "SHOW TABLES";
  $resultCheckedTable = $db->query($sql);

  if ($resultCheckedTable == false) {
    createBase($db, $database);
    $link = connectionBase($host, $user, $passw, $database);
    createTable($link,
                  $tableUsers,
                  $tablePainting,
                  $tableFilmColor,
                  $tableHandColor,
                  $tableWidthDoors,
                  $tableHeightDoors,
                  $tableOpeningDoors,
                  $tableAcsessories,
                  $tableZakaz
              );    
   $conn = connectionBase($host, $user, $passw, $database);
  } else {
   $conn = connectionBase($host, $user, $passw, $database);
  }
     



} else {
        createBase($db, $database);
      $link = connectionBase($host, $user, $passw, $database);
      createTable($link,
                    $tableUsers,
                    $tablePainting,
                    $tableFilmColor,
                    $tableHandColor,
                    $tableWidthDoors,
                    $tableHeightDoors,
                    $tableOpeningDoors,
                    $tableAcsessories,
                    $tableZakaz
                );
}

function createTable($link,
                    $tableUsers,
                    $tablePainting,
                    $tableFilmColor,
                    $tableHandColor,
                    $tableWidthDoors,
                    $tableHeightDoors,
                    $tableOpeningDoors,
                    $tableAcsessories,
                    $tableZakaz) {
    
    $queryUsers = "CREATE TABLE IF NOT EXISTS $tableUsers (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `login` VARCHAR(50) NOT NULL,
        `password` VARCHAR(255) NOT NULL
       ) ENGINE=InnoDB";
    $link->query($queryUsers);

    $queryCreatePainting = "CREATE TABLE IF NOT EXISTS $tablePainting (
         `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
         `color` VARCHAR(50) NOT NULL,
         `zena` DECIMAL(6) NOT NULL
       ) ENGINE=InnoDB";
    $link->query($queryCreatePainting);

    $queryCreateFilmColor = "CREATE TABLE IF NOT EXISTS $tableFilmColor (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `color` VARCHAR(50) NOT NULL,
        `zena` DECIMAL(6) NOT NULL
      ) ENGINE=InnoDB";
    $link->query($queryCreateFilmColor);
      
    $queryCreateHandColor = "CREATE TABLE IF NOT EXISTS $tableHandColor (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `color` VARCHAR(50) NOT NULL,
        `zena` DECIMAL(6) NOT NULL
      ) ENGINE=InnoDB";
    $link->query($queryCreateHandColor);

    $queryCreateWidthDoors = "CREATE TABLE IF NOT EXISTS $tableWidthDoors (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `width` DECIMAL(20) NOT NULL,
        `zena` DECIMAL(6) NOT NULL
      ) ENGINE=InnoDB";
    $link->query($queryCreateWidthDoors);

    $queryCreateHeightDoors = "CREATE TABLE IF NOT EXISTS $tableHeightDoors (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `height` DECIMAL(20) NOT NULL,
        `zena` DECIMAL(6) NOT NULL
      ) ENGINE=InnoDB";
    $link->query($queryCreateHeightDoors);

    $queryCreateOpeningDoors = "CREATE TABLE IF NOT EXISTS $tableOpeningDoors (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `typeOpening` VARCHAR(30) NOT NULL,
        `zena` DECIMAL(6) NOT NULL
      ) ENGINE=InnoDB";
    $link->query($queryCreateOpeningDoors);

    $queryCreateAcsessories = "CREATE TABLE IF NOT EXISTS $tableAcsessories (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `nameacsessories` VARCHAR(100) NOT NULL,
        `zena` DECIMAL(6) NOT NULL
      ) ENGINE=InnoDB";
    $link->query($queryCreateAcsessories);

    $queryCreateZakaz = "CREATE TABLE IF NOT EXISTS $tableZakaz (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `nameZakaz` VARCHAR(100) NOT NULL,
        `famZakaz` VARCHAR(100) NOT NULL,
        `telegram` VARCHAR(100) NOT NULL,
        `paintingdoors` VARCHAR(100) NOT NULL,
        `filmcolor` VARCHAR(100) NOT NULL,
        `handcolor` VARCHAR(100) NOT NULL,
        `width` VARCHAR(100) NOT NULL,
        `height` VARCHAR(100) NOT NULL,
        `opening` VARCHAR(100) NOT NULL,
        `acsessories` VARCHAR(100) NOT NULL,
        `totalAmount` VARCHAR(100) NOT NULL
      ) ENGINE=InnoDB";
    $link->query($queryCreateZakaz);
    
}

function connectionBase($host, $user, $passw, $database) {
    $base = new mysqli($host, $user, $passw, $database);
    return $base;

}

function createBase($db, $database)
{
    $queryCreateDb = "CREATE DATABASE IF NOT EXISTS $database";
    $db->query($queryCreateDb);

}

?>