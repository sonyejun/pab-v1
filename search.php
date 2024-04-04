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
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <script src="index.js"></script>
</head>
<body>
    <?php include 'import.php'; ?>

    <header class="header">
        <a class="logo" href="#">
            <img src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="">
        </a>
        <ul class="nav">
            <li><a href="#" class="menu-btn">SHOP</a></li>
            <li><a href="#" class="menu-btn">DISCOVER</a></li>
            <li><a href="#" class="menu-btn">HELP</a></li>
        </ul>
    </header>
    <div class="align-wrap">
        <main>
            <div class="main-search-wrap">
                <h1 class="page-title">Find a LEGO® Store</h1>
                <div class="search-wrap">
                    <div class="input-wrap">
                        <input type="text">
                    </div>
                    <button class="search-btn btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
                <button class="all-btn btn">See All Store</button>
            </div>
            <div class="main-result-wrap">
                <div class="result-title-wrap">
                    <p>
                        <span class="result-keyword">keyword</span>
                        Result
                        <span class="result-quantity">(nn)</span>
                    </p>
                </div>
                <div class="result-section-wrap">
                    <div class="result-filter-button-wrap none">
                        <button class="filter-btn active">All Store</button>
                        <button class="filter-btn">Asia Pacific</button>
                        <button class="filter-btn">Europe</button>
                        <button class="filter-btn">Middle East & Africa</button>
                        <button class="filter-btn">North America</button>
                        <button class="filter-btn">South America</button>
                    </div>
                    <div class="result-content-wrap">
                        <?php
                        foreach ($stores as $s) {
                            print_r($s);
                        } ?>
                            
                        <!-- //  echo '<div class="result-row">
                        //         <div class="result-left-section">
                        //             <div class="shop-icon">
                        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        //                     <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        //                 </svg>
                        //             </div>
                        //             <p class="result-store-name">'.$s["name"].'
                        //                 <span class="result-store-phone">(Phone : '.$s["phone"].')</span>
                        //             </p>
                        //          </div>
                        //         <button class="go-btn">Go</button>
                        //  </div>'; -->
                        
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>