var i = 0;
var images = [];
var time = 3000;

images[0] = 'photos/cat.png';
images[1] = 'photos/dog.png';
images[2] = 'photos/rabbit.png';

function changeImg(){
    document.slide.src = images[i];
    if (i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;

function addProductToCart(buttonID) {
    cart = document.getElementById("rightDiv");
    switch (buttonID) {
        case "dogfood1":
            qty = document.getElementById("f1qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Pedigree: "+qty+" Price: <strong class='price'>" +(49.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood2":
            qty = document.getElementById("f2qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Omega Plus: "+qty+" Price: <strong class='price'>"+(52.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood3":
            qty = document.getElementById("f3qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Royal Canin: "+qty+" Price: <strong class='price'>"+(51.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood4":
            qty = document.getElementById("f4qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Natures Goodness: "+qty+" Price: <strong class='price'>"+(51.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood5":
            qty = document.getElementById("f5qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Black Hawk: "+qty+" Price: <strong class='price'>"+(47.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood6":
            qty = document.getElementById("f6qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Hills: "+qty+" Price: <strong class='price'>"+(48.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood7":
            qty = document.getElementById("f7qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "K9 natural: "+qty+" Price: <strong class='price'>"+(46.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood8":
            qty = document.getElementById("f8qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Cop Rice: "+qty+" Price: <strong class='price'>"+(49.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "dogfood9":
            qty = document.getElementById("f9qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Purina: "+qty+" Price: <strong class='price'>"+(48.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood1":
            qty = document.getElementById("c1qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Omega Plus: "+qty+" Price: <strong class='price'>"+(29.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood2":
            qty = document.getElementById("c2qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Purina: "+qty+" Price: <strong class='price'>"+(32.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood3":
            qty = document.getElementById("c3qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Whiskas: "+qty+" Price: <strong class='price'>"+(31.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood4":
            qty = document.getElementById("c4qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Friskies: "+qty+" Price: <strong class='price'>"+(31.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood5":
            qty = document.getElementById("c5qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Hills: "+qty+" Price: <strong class='price'>"+(27.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood6":
            qty = document.getElementById("c6qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Chef: "+qty+" Price: <strong class='price'>"+(28.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood7":
            qty = document.getElementById("c7qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Royal Canin: "+qty+" Price: <strong class='price'>"+(26.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood8":
            qty = document.getElementById("c8qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Vegan Pet: "+qty+" Price: <strong class='price'>"+(49.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "catfood9":
            qty = document.getElementById("c9qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Iams: "+qty+" Price: <strong class='price'>"+(48.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood1":
            qty = document.getElementById("t1qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Tetra: "+qty+" Price: <strong class='price'>"+(9.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood2":
            qty = document.getElementById("t2qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Hikari Cichild: "+qty+" Price: <strong class='price'>"+(12.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood3":
            qty = document.getElementById("t3qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "JBL: "+qty+" Price: <strong class='price'>"+(11.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood4":
            qty = document.getElementById("t4qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Aqua One Vege: "+qty+" Price: <strong class='price'>"+(11.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood5":
            qty = document.getElementById("t5qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Marine Master: "+qty+" Price: <strong class='price'>"+(7.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood6":
            qty = document.getElementById("t6qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Sera: "+qty+" Price: <strong class='price'>"+(8.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood7":
            qty = document.getElementById("t7qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Vitalis: "+qty+" Price: <strong class='price'>"+(6.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood8":
            qty = document.getElementById("t8qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Aqua One: "+qty+" Price: <strong class='price'>"+(9.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "fishfood9":
            qty = document.getElementById("t9qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Wardley: "+qty+" Price: <strong class='price'>"+(18.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood1":
            qty = document.getElementById("o1qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Kaytee: "+qty+" Price: <strong class='price'>"+(29.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood2":
            qty = document.getElementById("o2qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Toplite: "+qty+" Price: <strong class='price'>"+(32.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood3":
            qty = document.getElementById("o3qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Higgins: "+qty+" Price: <strong class='price'>"+(31.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood4":
            qty = document.getElementById("o4qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Little Friends: "+qty+" Price: <strong class='price'>"+(31.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood5":
            qty = document.getElementById("o5qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Boltz: "+qty+" Price: <strong class='price'>"+(27.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood6":
            qty = document.getElementById("o6qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Kaytee Bird Food: "+qty+" Price: <strong class='price'>"+(28.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood7":
            qty = document.getElementById("o7qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Audubon Park: "+qty+" Price: <strong class='price'>"+(26.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood8":
            qty = document.getElementById("o8qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Flower Power: "+qty+" Price: <strong class='price'>"+(29.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "otherfood9":
            qty = document.getElementById("o9qty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Trill: "+qty+" Price: <strong class='price'>"+(28.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

    }
}

function invoice() {

    modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    cross = document.getElementsByClassName("close")[0];
    console.log(cross);


    cross.onclick = function() {
        modal.style.display = "none";
    }


// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    //Take everything from shopping cart
    cart = document.getElementById("rightDiv");
    items = document.getElementsByClassName("orderedProducts");
    //invoicePlace is the place we add items in
    invoicePlace = document.getElementById("invoicePlace");
    i = 0;
    text = "<h2>Invoice</h2>";
    while (i<items.length){
        text += "<p>"+items[i].innerHTML+"</p>";
        i++;
    }

    //calculate total
    total = 0;
    i = 0;
    prices = document.getElementsByClassName("price");
    while (i<prices.length){
        console.log(prices[i].innerText);
        total += Number(prices[i].innerText);
        i++;
    }
    if(total < 300){
        total = total+5
    }
    total = total.toFixed(2);
    text += "<p>Total: $"+total+"</p>";
    invoicePlace.innerHTML = text;
}
