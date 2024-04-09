<?php

include('includes/connect.php');
include('includes/config.php');
include('includes/functions.php'); 

$filter = isset($_GET['filter']) ? $_GET['filter'] : 'all';
$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

// Case1. region filter button click
$query = "SELECT stores.*
          FROM stores
          JOIN countries ON stores.reference_id = countries.reference_id
          JOIN regions ON countries.region_id = regions.id";

if ($filter != 'all') {
    $query .= " WHERE regions.name = '".$filter."'";
}
// Case2. keyword searching
if ($searchTerm) {
    if ($filter != 'all') {
        $query .= " AND stores.name LIKE '%".$searchTerm."%'";
    } else {
        // If no filter condition, use "WHERE" to add the search condition
        $query .= " WHERE stores.name LIKE '%".$searchTerm."%'";
    }
}

$query .= " ORDER BY stores.id DESC";


//pagination
$items_per_page = 10;
$total_items_query = "SELECT COUNT(*) AS total_items FROM ($query) AS total_query";
$total_items_result = mysqli_query($connect, $total_items_query);
$total_items_row = mysqli_fetch_assoc($total_items_result);
$total_items = $total_items_row['total_items'];


//current page
$current_page = isset($_GET['page']) ? $_GET['page'] : 1;
$offset = ($current_page - 1) * $items_per_page;
$query .= " LIMIT $items_per_page OFFSET $offset";
$result = mysqli_query($connect, $query);


//make page
$total_pages = ceil($total_items/$items_per_page);
$data = array(
    'total_pages' => $total_pages,
    'total_items' => $total_items,
    'pages'=> array()
);

while ($row = mysqli_fetch_assoc($result)) {
    $data['pages'][] = $row;
}

// send data as json type
header('Content-Type: application/json');
echo json_encode($data);
exit;
?>
