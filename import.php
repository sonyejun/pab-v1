<?php

// include('includes/connect.php');
// include('includes/config.php');
// include('includes/functions.php');

// Original store JSON is available at:
// https://www.lego.com/api/graphql/StoresDirectory
// 
// Individual stores follow the URL format:
// https://www.lego.com/en-my/stores/store/bondi-junction

$url = 'import.json';
$stores = json_decode(file_get_contents($url), true);


$query = 'TRUNCATE TABLE regions';
mysqli_query($connect, $query);

$query = 'TRUNCATE TABLE countries';
mysqli_query($connect, $query);

$query = 'TRUNCATE TABLE stores';
mysqli_query($connect, $query);


foreach($stores['storesDirectory'] as $key => $country)
{   
    $query = 'SELECT COUNT(*) FROM regions WHERE name = "'.$country['region'].'"';
    $result = mysqli_query($connect, $query);
    $row_count = mysqli_fetch_row($result)[0];

    if (!$row_count) {
        $query = 'INSERT INTO regions ( name ) VALUES ( "'.$country['region'].'" )';
        $result = mysqli_query($connect, $query);
        $inserted_id = mysqli_insert_id($connect);
    }

    $query = 'INSERT INTO countries ( name, reference_id, region_id ) VALUES ( "'.$country['country'].'", "'.$country['id'].'", "'.$inserted_id.'" )';
    $result = mysqli_query($connect, $query);

    foreach($country['stores'] as $key => $store)
    {
        $_certified = $store['certified']? 1: 0;
        $_storeInfo = mysqli_real_escape_string($connect, $store['additionalInfo']);
        $query = 'INSERT INTO stores ( name, phone, info, certified, reference_id, storeUrl ) VALUES ( "'.$store['name'].'", "'.$store['phone'].'", "'.$_storeInfo.'", "'.$_certified.'", "'.$country['id'].'","'.$store['storeUrl'].'")';
        $result = mysqli_query($connect, $query);
    }
}