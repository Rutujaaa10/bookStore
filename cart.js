let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{ //event listeners for opening and closing a cart feature. 
    body.classList.add('active');//opens the cart 
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');//hides the shopping cart
})

let products = [
    {
        id: 1,
        name: 'Believe Me',
        image: 'product-1.jpg',
        price: 600
      
        
    },
    {
        id: 2,
        name: 'Reveal Me',
        image: 'product-2.jpg',
        price: 500
    },
    {
        id: 3,
        name: 'Fracture Me',
        image: 'product-3.jpg',
        price: 400
    },
    {
        id: 4,
        name: 'Imagine Me',
        image: 'product-4.jpg',
        price: 500
    },
    {
        id: 5,
        name: 'Defy Me',
        image: 'product-5.jpg',
        price: 500
    },
    {
        id: 6,
        name: 'Shadow Me',
        image: 'product-6.jpg',
        price: 500
    },

    {
        id: 7,
        name: 'Ignite Me',
        image: 'product-7.jpg',
        price: 389
    },
    {
        id: 8,
        name: 'Shatter Me',
        image: 'product-8.jpg',
        price: 400
    },
    {
        id: 9,
        name: 'Destroy Me',
        image: 'product-9.jpg',
        price: 300
    },
    {
        id: 10,
        name: 'Twisted hate',
        image: 'product-10.png',
        price: 600
    },
    {
        id: 11,
        name: 'Credence',
        image: 'product-11.jpg',
        price: 400
    },
    {
        id: 12,
        name: 'King of Greed',
        image: 'product-12.jpg',
        price: 600
    }
 
];
let listCards  = [];// to declare a empty array,used to store data  to cards
function initApp(){ //this function is to initialize or set up some functionality when the application starts.
    products.forEach((value, key) =>{ //The forEach method iterates over each element in the products array
        let newDiv = document.createElement('div');// created new div
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="products/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₹${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){ //function is to add a product to the  cart 
        listCards[key] = JSON.parse(JSON.stringify(products[key]));// copy product form list to cart
        listCards[key].quantity = 1;
    }
    reloadCard();//update the cart display)
}
function reloadCard(){
    listCard.innerHTML = ''; //clears the existing content inside the listCard element
    let count = 0; //count is initialized to 0
    let totalPrice = 0; //totalPrice is initialized to 0
    listCards.forEach((value, key)=>{ //listcard contain product info copied from the products array
        totalPrice = totalPrice + value.price;//updated by adding the product’s price.
        count = count + value.quantity;//count is incremented by the product’s quantity
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="products/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₹${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();//updates the displayed total price
    quantity.innerText = count;//updates the displayed quantity of items in the cart
}
function changeQuantity(key, quantity){ //key,quantity is two parameters
    if(quantity == 0){ //function start checking  the quantity is equal to 0
        delete listCards[key];//removes the product from  cart
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
        //price property of  product is recalculated  the new quantity 
    }
    reloadCard();
}