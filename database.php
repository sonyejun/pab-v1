<?php

include('includes/connect.php');
include('includes/config.php');
include('includes/functions.php'); 

$filter = isset($_GET['filter']) ? $_GET['filter'] : 'all';
$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

// 필터 값에 따라 적절한 쿼리 수행
if ($filter == 'all') {
    $query = "SELECT *
              FROM stores";
} else {
    $query = "SELECT stores.*
              FROM stores
              JOIN countries ON stores.reference_id = countries.reference_id
              JOIN regions ON countries.region_id = regions.id
              WHERE regions.name = '".$filter."'";
}

// 검색어가 있는 경우에는 쿼리에 검색어 조건 추가
if ($searchTerm) {
    $query .= " WHERE name LIKE '%".$searchTerm."%'";
}

$query .= " ORDER BY id DESC";

$result = mysqli_query($connect, $query);

$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// JSON 형식으로 데이터 전송
header('Content-Type: application/json');
echo json_encode($data);
exit;
?>
