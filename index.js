//alert(12121212121);

window.onload = function () {
    var xhr = new XMLHttpRequest();
    var region = '';
    var response = '';
    let filterBtn = document.querySelectorAll('.filter-btn');
    var searchInput = document.querySelector('.search-input');
    var searchBtn =document.querySelector('.search-btn');
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
            region = e.target.name;
            xhr.open('GET', 'database.php?filter='+encodeURIComponent(region), true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    response = JSON.parse(xhr.responseText);
                    var element ='';
                    response.forEach(function(data){
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
                        <a href="`+data.storeUrl+`" class="go-btn">Go</a>
                        </div>
                        `
                    });
                    var regionName ='';
                    switch(region){
                        case "all" :
                            regionName = "All Store";
                            break;
                        case "AP" :
                            regionName = "Asia Pacific";
                            break;
                        case "EU" :
                            regionName = "Europe";
                            break;
                        case "ME" :
                            regionName = "Middle East & Africa";
                            break;
                        case "NA" :
                            regionName = "North America";
                            break;
                        case "SA" :
                            regionName = "South America";
                            break;
                        default :
                            regionName = "All Store";
                            break;
                    }
                    document.querySelector('.result-content-wrap').innerHTML = element;
                    document.querySelector('.result-keyword').innerText = regionName;
                    document.querySelector('.result-quantity').innerText = "("+response.length+")";
                }
            };
            xhr.send();
        });
    });
    document.querySelector('[name=all]').click();
    
    //search
    
    searchBtn.addEventListener('click',function(){
        // console.log("search");
        // document.querySelector('[name=all]').click();
        document.querySelector('.all-btn').classList.remove('none');
        document.querySelector('.result-filter-button-wrap').classList.add('none');
        var searchTerm = searchInput.value.trim();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'database.php?search=' + encodeURIComponent(searchTerm), true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var element ='';
            response.forEach(function(data){
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
            document.querySelector('.result-keyword').innerText = searchTerm;
            document.querySelector('.result-quantity').innerText = "("+response.length+")";
        }
    };
    xhr.send();
    });


    searchInput.addEventListener("keyup",function(event){
        if(event.key === "Enter"){
            searchBtn.click();
        }
    });
   
}