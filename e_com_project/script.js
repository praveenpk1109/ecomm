let a = 0;
let imagenav = 0;
let size = 4;
let cost = 125, sum = 0, finalprice = 0;
let img1 = document.getElementById("bgimg");
let img2 = document.getElementById("bgimg1");
function next() {
    a = a + 1;
    document.getElementById("num").innerHTML = a;
}
function prev() {
    if (a > 0) { a = a - 1; }
    document.getElementById("num").innerHTML = a;
}
function notification() {
    if (a > 0) {
        sum = sum + a;
        finalprice = sum * cost;
       
        document.getElementById("imp").style.display = 'flex';
        document.getElementById("imp").innerHTML = sum;
        let img = document.querySelector("img");
        img.src = "images/image-product-2-thumbnail.jpg";
        document.getElementById("fetch").style.display = 'flex';
        document.getElementById("remm").style.display = 'flex';
        document.getElementById("overall").innerHTML = "Fall Limited Edition Sneakers " + cost + "x" + sum + "=" + finalprice;
    }
}
function display() {
    document.getElementById("listitem").style.display = 'flex';
    if (finalprice == 0) {

        document.getElementById("fetch").style.display = 'none';
        document.getElementById("remm").style.display = 'none';
        document.getElementById("overall").innerHTML = "Your Cart is Empty!!! ";

    }
}
function remove() {
    document.getElementById("listitem").style.display = 'none';
}
function remove2() {
    document.getElementById("select").style.display = 'none';
}
function clear3() {
    document.getElementById("popup").style.display = 'none';
}
function clear4() {
        document.getElementById("fetch").style.display = 'none';
        document.getElementById("remm").style.display = 'none';
        document.getElementById("imp").style.display = 'none';
        sum = 0;
        finalprice = 0;
    
}
function clear5(){
    alert("The items which are  checked out.");
    document.getElementById("fetch").style.display = 'none';
    document.getElementById("remm").style.display = 'none';
    document.getElementById("imp").style.display = 'none';
    sum = 0;
    finalprice = 0;
}
function image() {
    document.getElementById("popup").style.display = 'flex';
}
function nav() {
    document.getElementById("select").style.display = 'flex';
}

function imagenavset() {
    switch (imagenav) {
        case 1:
            img1.style.backgroundImage = "url('images/image-product-2.jpg')";
            break;
        case 2:
            img1.style.backgroundImage = "url('images/image-product-3.jpg')";
            break;
        case 3:
            img1.style.backgroundImage = "url('images/image-product-4.jpg')";
            break;
        default:
            img1.style.backgroundImage = "url('images/image-product-1.jpg')";
    }
}
function photoclick1(){
    img2.style.backgroundImage = "url('images/image-product-1.jpg')";
}
function photoclick2(){
    img2.style.backgroundImage = "url('images/image-product-2.jpg')";
}
function photoclick3(){
    img2.style.backgroundImage = "url('images/image-product-3.jpg')";
}
function photoclick4(){
    img2.style.backgroundImage = "url('images/image-product-4.jpg')";
}
function imageleft() {
    if (imagenav > 0) {
        imagenav = imagenav - 1;
    }
    else {
        imagenav = size - 1;
    }
    imagenavset(imagenav);
}

function imageright() {
    if (imagenav < size) {
        imagenav = imagenav + 1;
    }
    else {
        imagenav = 1;
    }
    imagenavset(imagenav);
}