<?php 
    include('includes/connect.php');
    include('includes/config.php');
    include('includes/functions.php'); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="../style.css"/>
    <script src="../index.js"></script>
</head>
<body>
<?php include 'import.php'; ?>
    <header class="header">
        <a class="logo" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        </a>
        <ul class="nav">
            <li><a href="#" class="menu-btn">SHOP</a></li>
            <li><a href="#" class="menu-btn">DISCOVER</a></li>
            <li><a href="#" class="menu-btn">HELP</a></li>
        </ul>
    </header>