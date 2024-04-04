//alert(12121212121);
window.onload = function () {
    let allBtn = document.querySelector(".all-btn");
    allBtn.addEventListener('click',function(){
        document.querySelector(".result-filter-button-wrap").classList.remove("none");
        allBtn.classList.add("none")
    });
}