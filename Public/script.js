// script.js
document.getElementById("dropdownContent").onclick = function() {
    var content = document.getElementById("dropdownButton");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

const products = [
    {
        "Image": "img/bajaj intruder.jpg",
        "Product name": "Bazaz intruder 218",
        "price": 9000.00
    },
    {
        "Image": "img/various ball.jpg",
        "Product name": "Kids play ball",
        "price": 20.00
    },
    {
        "Image": "img/umbrella.jpg",
        "Product name": "Umbrella",
        "price": 12.00
    },
    {
        "Image": "img/tvs 4v.jpg",
        "Product name": "TVS Apache 4v",
        "price": 11000.00 
    },
    {
        "Image": "img/tropicana.jpg",
        "Product name": "Tropicana juice",
        "price": 25.00
    },
    {
        "Image": "img/tenis ball.jpg",
        "Product name": "Tennis ball",
        "price": 13.00
    },
    {
        "Image": "img/sony camera.jpg",
        "Product name": "Sony s234t DSLR",
        "price": 2200.00
    },
    {
        "Image": "img/security czam.jpg",
        "Product name": "Security cam set",
        "price": 400.00
    },
    {
        "Image": "img/scale.jpg",
        "Product name": "Old style scale",
        "price": 22.00
    },
    {
        "Image": "img/nickon camera.jpg",
        "Product name": "Nickon DSLR cam",
        "price": 3998.00
    },
    {
        "Image": "img/mt-15.jpg",
        "Product name": "Yamaha MT-15",
        "price": 16000.00
    },
    {
        "Image": "img/motor.jpg",
        "Product name": "Motor cycle",
        "price": 4600.00
    },
    {
        "Image": "img/mini dolls.jpg",
        "Product name": "Kids dolls",
        "price": 25.12
    },
    {
        "Image": "img/balldd.jpg",
        "Product name": "Adidudes Football",
        "price": 350
    },
    {
        "Image": "img/bat6.jpg",
        "Product name": "Ura Cricket Bat",
        "price": 195
    },
    {
        "Image": "img/books.jpg",
        "Product name": "Travel Guide Book",
        "price": 25
    },
    {
        "Image": "img/borka.jpg",
        "Product name": "Baju Halal Female",
        "price": 85
    },
    {
        "Image": "img/bowling ball.jpg",
        "Product name": "Bowling Ball dude",
        "price": 223
    },
    {
        "Image": "img/bugatti.jpg",
        "Product name": "Bugatti Vairon E/L",
        "price": 400
    },
    {
        "Image": "img/busket ball.jpg",
        "Product name": "Busket Ball 5.5",
        "price": 144
    },
    {
        "Image": "img/cafe rases.jpg",
        "Product name": "ER Eagle 650cs",
        "price": 43000
    },
    {
        "Image": "img/call21.jpg",
        "Product name": "Deer Ball 5.in",
        "price": 50
    },
    {
        "Image": "img/canberry juice.jpg",
        "Product name": "Canberry Juice 750ml",
        "price": 8
    },
    {
        "Image": "img/canon p.jpg",
        "Product name": "Cannon Printer Enos22",
        "price": 178
    },
    {
        "Image": "img/cannon img p.jpg",
        "Product name": "Canon Cdr230 Printer",
        "price": 1700
    },
    {
        "Image": "img/cruser.jpg",
        "Product name": "Honda Crudo 165cc",
        "price": 12000
    },
    {
        "Image": "img/dress.jpg",
        "Product name": "Ladies Grawn",
        "price": 99
    }
]
function productsbox(product){
    let htmlForProduct = `
    <div class="product">
        <img class="ss" src="${product['Image']}" alt="Product">
        <h3 class="margin1">${product['Product name']}</h3>
        <p class="margin1">${product['price']}.00 RM</p>
    </div>`;
    return htmlForProduct;
}

function showproducts(){
    let allproductshtml = '';
    for (const product of products) {
        let htmlforeach = productsbox(product);
        allproductshtml = allproductshtml + htmlforeach;
    }

    let productcontainer = document.getElementById("123455");
    productcontainer.innerHTML = allproductshtml;
}

showproducts();
function showsecondproducts(){
    let allhltml = '';
    // let counter = 0;
    for (const product of products) {
        let htmleach = productsbox(product);
        allhltml = htmleach + allhltml;
        // if (counter % 5 == 0) {
        //     let brhtml = '<br/>'; 
        //     allhltml = allhltml + brhtml;
        // }
        // counter++;
    }

    let productpasscontainer = document.getElementById("12344");
    productpasscontainer.innerHTML = allhltml;
}
showsecondproducts();