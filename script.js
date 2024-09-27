/********************************selection**************************** */
var product = document.getElementsByClassName('product'); console.log(product);
var price = document.querySelectorAll('.price'); console.log(price);
var quantity = document.getElementsByClassName('quantity'); console.log(quantity);
var buttonincrement = document.getElementsByClassName('incrementBtn'); console.log(buttonincrement);
var buttondecrement = document.getElementsByClassName('decrementBtn'); console.log(buttondecrement);
var likeicone = document.querySelectorAll('.fa-heart'); console.log(likeicone);
var trashicone = document.querySelectorAll(".fa-trash"); console.log(trashicone);
/************************************************************** */

var quantityValue=[];
for(let i = 0; i < quantity.length; i++){
     quantityValue[i]= parseInt(quantity[i].innerHTML);
}
console.log (quantityValue)

var priceValue=[];
for(let i = 0; i < price.length; i++){
     priceValue[i]= parseInt(price[i].innerHTML);
}
console.log (priceValue)


/************************updateTotal****************************** */

function total() {
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total+= quantityValue[i]*priceValue[i];
    }
    return document.getElementById('total').innerText = total;
}
/******************************************************** */
total();


/*************************delete******************************* */

for (let i in trashicone) {
    trashicone[i].onclick= function () {
       // console.log(i);

       trashicone[i].closest('.product').remove();
       quantityValue[i]=0;
        total() 
        console.log(total())
    }
}
/**************************like****************************** */

for (let like of likeicone) {
    like.addEventListener('click', function () {
        /*  if (like.style.color != 'red') {
              like.style.color = 'red';
          } else like.style.color = 'black';*/
        like.classList.toggle("heart")

    });

}



/***************************incrementation **************** */

for (let i = 0; i < buttonincrement.length; i++) {
    buttonincrement[i].addEventListener('click', function () {
        //console.log(i);

        quantityValue[i]++;console.log(quantityValue);
       // document.querySelector('.quantity').innerText =quantityValue;
       quantity[i].innerHTML = quantityValue[i];
        total()
    })
}


/************************decrementation***************************** */
for (let i = 0; i < buttondecrement.length; i++) {
    buttondecrement[i].addEventListener('click', function () {
        console.log(i);
        if ( quantityValue[i] > 0) {
            quantityValue[i]--;
        }
        else {  quantityValue[i] = 0 };console.log(quantityValue);
        quantity[i].innerHTML = quantityValue[i];
        total()
    })
}




