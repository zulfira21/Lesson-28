const circle_a  = document.querySelector('.circle3');
console.log(circle_a);

circle_a.onclick = () => {
    const menu_cart2 = document.querySelector('.menu_cart2');
    console.log(menu_cart2);
    menu_cart2.classList.toggle("circle_db");
}

// var title = document.getElementsByClassName('item_title');
// console.log(title[0].innerHTML);

// var price = document.getElementsByClassName('item_price');
// console.log(price[2].innerHTML);

// var old = document.getElementsByClassName('old_price');
// console.log(old[3]);

// var sweatshirt =document.getElementsByClassName('sweatshirt');
// console.log(sweatshirt);


// metod foreach

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log(fruits);

// alert( fruits[0] ); // Яблоко
// alert( fruits[1] ); // Апельсин
// alert( fruits[2] ); // Слива

// fruits.forEach(function(item,i) {
//     console.log(i + item);
// });
    
// metod filter
// var myNumbers = [1,-1,2,-2,3,-4];
// var positiveArr = myNumbers.filter(function(number){
//     return number < 0;
// });

// console.log(positiveArr);

// metod MAP
// var names = ['HTML','CSS','JavaScript','React'];

// var nameLengths = names.map(function(name){
//     return name.length;

// });

// console.log(nameLengths);
// Reduce
// var myNum = [1, 2, 3, 4, 5,6,6];

// var result = myNum.reduce(function(sum, current){
//     return sum + current;
// },0);

// console.log(result); // 21

// var title = document.getElementsByClassName('item_title');
// console.log(title[0].innerHTML);
// console.log(title[1].innerHTML);
// console.log(title[2].innerHTML);
// console.log(title[3].innerHTML);
// console.log(title[4].innerHTML);

// for (let text of title){
//     console.log(text.innerHTML);
// }

var addBtns = document.getElementsByClassName('add_to_card');

var addToBasketFunction = function(){
    var title = this.parentNode.parentNode.getElementsByClassName('item_title');
    console.log(title[0].innerText);
}

for (var i = 0; i < addBtns.length; i++ ){
    addBtns[i].addEventListener('click',addToBasketFunction,false);
}

