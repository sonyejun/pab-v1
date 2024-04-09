<?php 
    include( 'includes/header.php' );
?>

    <div class="align-wrap">
        <main>
            <div class="main-search-wrap">
                <h1 class="page-title">Find a LEGO® Store</h1>
                <div class="search-wrap">
                    <div class="input-wrap">
                        <input type="text" class="search-input" name="search">
                    </div>
                    <button class="search-btn btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
                <button class="all-btn btn none">Region Filter</button>
            </div>
            <div class="main-result-wrap">
                <div class="result-title-wrap">
                    <p>
                        <span class="result-keyword"></span>
                        Result
                        <span class="result-quantity"></span>
                    </p>
                </div>
                <div class="result-section-wrap">
                    <div class="result-filter-button-wrap">
                        <button class="filter-btn" name="all">All Store</button>
                        <button class="filter-btn" name="AP">Asia Pacific</button>
                        <button class="filter-btn" name="EU">Europe</button>
                        <button class="filter-btn" name="ME">Middle East & Africa</button>
                        <button class="filter-btn" name="NA">North America</button>
                        <button class="filter-btn" name="SA">South America</button>
                    </div>
                    <div class="result-content-wrap">
                            
                        <!-- //  echo ''; -->
                        
                    </div>
                    <div id="pagination"></div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>