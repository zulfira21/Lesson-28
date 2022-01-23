const circle_a  = document.querySelector('.circle3');
console.log(circle_a);

circle_a.onclick = () => {
    const menu_cart2 = document.querySelector('.menu_cart2');
    console.log(menu_cart2);
    menu_cart2.classList.toggle("circle_db");
}

var title = document.getElementsByClassName('item_title');
console.log(title[0].innerHTML);

var price = document.getElementsByClassName('item_price');
console.log(price[2].innerHTML);

var old = document.getElementsByClassName('old_price');
console.log(old[3]);

var sweatshirt =document.getElementsByClassName('sweatshirt');
console.log(sweatshirt);
