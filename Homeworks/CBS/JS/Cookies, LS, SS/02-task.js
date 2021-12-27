window.onload = function() {
    let tvs = document.getElementById("tv");
    let btn1 = document.getElementById("buy");
    let btn2 = document.getElementById("cart");
    let art = document.getElementById("art");
    let price = document.getElementById("price");

    let tvIndex, tvPrice, tvArt;

    tvs.addEventListener("change", function() {
        tvIndex = tvs.options.selectedIndex;
        tvPrice = tvs.options[tvIndex].value;
        tvArt = tvs.options[tvIndex].dataset.name;
        art.value = tvArt;
        price.value = tvPrice;
    }, false);

    btn1.addEventListener("click", function() {
        let newTV = {};
        newTV.name = tvs.options[tvIndex].label;
        newTV.art = tvArt;
        newTV.price = tvPrice;
        localStorage.setItem(newTV.art, JSON.stringify(newTV))
    }, false)

}