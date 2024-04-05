<?php

// ************************************************************
// Connect to the database
// 
// Load environment variables from the .env file and then use
// the database variables to connect to a MySQL database. 

$env = file(__DIR__.'/../.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

foreach($env as $value)
{
  $value = explode('=', $value);  
  define($value[0], $value[1]);
}

$connect = mysqli_connect(
  "localhost", 
  "root", 
  "root", 
  "brickmmo_pab");

if (!$connect) {
  die("Fail to connect with database: " . mysqli_connect_error());
}

mysqli_set_charset( $connect, 'UTF8' );