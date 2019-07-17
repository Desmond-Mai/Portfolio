// here is a variable where we can store the value of the counter
let value = 0

// set the header to the initial value

//document.querySelector('#value').innerHTML = value.toString()

changeheader();

// 1. add a handler for the `subtract` button

document.querySelector('#subtract').onclick = function() {
    value--
    //document.querySelector('#value').innerHTML = value.toString()
changeheader(); }

// 2. add a handler for the `add` button

document.querySelector('#add').onclick = function() {
    value++
    //document.querySelector('#value').innerHTML = value.toString()
changeheader();  }

// 3. "DRY" your code out by making a function

function  changeheader() {

 document.querySelector('#value').innerHTML = value.toString()
}