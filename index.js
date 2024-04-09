//alert(12121212121);
// var currentPage;
var currentPage=1;
var totalPages = 0;
var pageSize = 10;

function addActiveClassToPageElement(pageNumber) {
    var currentPageElement = document.querySelector('[data-page="' + pageNumber + '"]');
    
    // console.log(currentPageElement, pageNumber)
    currentPageElement.classList.add('active');
}

window.getPageData =  function(type,keyword,page){
    // console.log(type,keyword,page);
    var regionText ='';
    if(type === "filter"){
        switch(keyword){
            case "all" :
                regionText = "All Store";
                break;
            case "AP" :
                regionText = "Asia Pacific";
                break;
            case "EU" :
                regionText = "Europe";
                break;
            case "ME" :
                regionText = "Middle East & Africa";
                break;
            case "NA" :
                regionText = "North America";
                break;
            case "SA" :
                regionText = "South America";
                break;
            default :
            regionText = "All Store";
                break;
        }
    }
      
    console.log(type,keyword,page)
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'database.php?'+type+'=' + encodeURIComponent(keyword)+'&page='+page, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var element ='';
            console.log(response)
            response.pages.forEach(function(data){
                element += `<div class="result-row">
                <div class="result-left-section">
                <div class="shop-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>
                </div>
                <p class="result-store-name">`+data.name+`
                <span class="result-store-phone">(Phone : `+data.phone+`)</span>
                </p>
                </div>
                <button class="go-btn">Go</button>
                </div>
                `
            });
            document.querySelector('.result-content-wrap').innerHTML = element;
            document.querySelector('.result-keyword').innerText = type === "filter" ? regionText : keyword;
            document.querySelector('.result-quantity').innerText = "("+response.total_items+")";
    
            // 전체 페이지 수 업데이트
            totalPages = response.total_pages;
            // currentPage = response.page
            
            updatePagination(type,keyword,page);
            addActiveClassToPageElement(page);
        }
    }
    xhr.send();

}



function getNextPage(type, keyword) {
    currentPage = Math.min(currentPage + pageSize, totalPages);
    getPageData(type, keyword, currentPage);
}

function getPreviousPage(type, keyword) {
    currentPage = Math.min(currentPage - pageSize, totalPages);
    getPageData(type, keyword, currentPage);
}

function updatePagination(type, keyword,page) {
    var paginationLinks = '';
    var startPage = Math.max(1, currentPage - Math.floor(pageSize / 2));
    var endPage = Math.min(totalPages, startPage + pageSize - 1);
    if (currentPage > 1) {
        paginationLinks += '<button class="pagination-btn arrow" onclick="getPreviousPage(\'' + type + '\', \'' + keyword + '\')">'+
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">'+
        '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />'+
        '</svg></button>';
    }

    for (var i = startPage; i <= endPage; i++) {
        
        paginationLinks += '<button class="pagination-btn" onclick="getPageData(\'' + type + '\', \'' + keyword + '\', ' + i + ')" data-page="'+i+'">' + i + '</button>';
    }

    if (currentPage < totalPages) {
        paginationLinks += '<button class="pagination-btn arrow" onclick="getNextPage(\'' + type + '\', \'' + keyword + '\')">'+
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">'+
        '<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />'+
        '</svg></button>';
    }
    
    document.getElementById('pagination').innerHTML = paginationLinks;
}

window.onload = function () {
    // var xhr = new XMLHttpRequest();
    let filterBtn = document.querySelectorAll('.filter-btn');
    var searchInput = document.querySelector('.search-input');
    var searchBtn =document.querySelector('.search-btn');
    
    
    // var currentPage;
    //all btn function
    document.querySelector('.all-btn').addEventListener('click',function(){
        document.querySelector('.result-filter-button-wrap').classList.remove('none');
        document.querySelector('[name=all]').click();
        searchInput.value ='';
    });

    //filter button click function
    filterBtn.forEach(function(filter){
        filter.addEventListener('click',function(e){
            // console.log("filter");
            document.querySelector('.all-btn').classList.add('none');
            filterBtn.forEach(function(btn){
                btn.classList.remove('active');
            });
            filter.classList.add('active');
            var keyword = e.target.name;
            // currentPage = 1;
            getPageData("filter",keyword, currentPage);
            
        });
    });
    document.querySelector('[name=all]').click();
    
    //search
    
    searchBtn.addEventListener('click',function(){
        // console.log("search");
        // document.querySelector('[name=all]').click();
        document.querySelector('.all-btn').classList.remove('none');
        document.querySelector('.result-filter-button-wrap').classList.add('none');
        var keyword = searchInput.value.trim();
        // currentPage = 1;
        getPageData("search",keyword,currentPage);
        

    });

    
    searchInput.addEventListener("keyup",function(event){
        if(event.key === "Enter"){
            searchBtn.click();
        }
    });

   
    setTimeout(function() {
        addActiveClassToPageElement(currentPage);
    }, 100); 
   
}
