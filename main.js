// function check_cart() {
//     if (!localStorage.getItem("shopping_cart")){
//         let shopping_cart = [];
//         shopping_cart = JSON.stringify(shopping_cart);
//         localStorage.setItem("shopping_cart",shopping_cart);
//     }
// }

// function load_details() {
//     console.log("yo");
//     check_cart();
//     let bun_temp = localStorage.getItem("bun");
//     document.getElementById("prod_name").innerHTML = `${cinnabons[bun_temp]["name"]} Cinnamon Roll`
//     document.getElementById("prod_img").src = `${cinnabons[bun_temp]["photo"]}`
//     document.getElementById("prod_ingr").innerHTML = `${cinnabons[bun_temp]["ingredients"]}`
//     // `` Back ticks will allow JS to put variables in HTML
// }