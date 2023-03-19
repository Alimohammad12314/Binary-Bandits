const product = [
    {
        id: 0,
        image: 'css/images/solarpanel.jpg',
        title: 'Solar Panels',
        price: 120,
    },
    {
        id: 1,
        image: 'css/images/solarheatpump.jpg',
        title: 'Heat Pumps',
        price: 60,
    },
    {
        id: 2,
        image: 'css/images/solar-light-1000x1000.webp',
        title: 'Solar Light',
        price: 230,
    },
    {
        id: 3,
        image: 'css/images/solar-air-conditioner.jpg',
        title: 'Solar Air Conditioner',
        price: 100,
    },

    {
        id: 4,
        image: 'css/images/solar-water-ro.jpg',
        title: 'Solar water Ro',
        price: 100,
    },
    {
        id: 5,
        image: 'css/images/solar-cell-phone.jpg',
        title: 'Solar Cell Phone',
        price: 100,
    },
    {
        id: 6,
        image: 'css/images/solar-inverter-500x500-1.jpg',
        title: 'Solar Inverter',
        price: 100,
    },
    {
        id: 7,
        image: 'css/images/solar-dish-cooker-500x500.webp',
        title: 'Solar Dish Cooker',
        price: 100,
    },
    {
        id: 8,
        image: 'css/images/motovolt-urbn-ebike-right-side-view_360x240.webp',
        title: 'E-Bike',
        price: 100,
    }
 
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

