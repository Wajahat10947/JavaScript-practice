const div = document.querySelector('.render-api');
const cartShow = document.querySelector('.cart');

let apiItems;

axios.get('https://fakestoreapi.com/products')



.then(function(response){

    // console.log(response.data);
    apiItems = response.data;

    for (let i = 0; i < apiItems.length; i++) {
        
        // console.log(apiItems[i].title);

        div.innerHTML += `
            <div class="p-5 border border-1  rounded-1 shadow-lg m-2 ">
                    <img class="pb-3" style="width:200px; height:300px;" src = '${apiItems[i].image}'>
                    <p><span class="font-bold text-lg text-wrap">Title: </span> ${apiItems[i].title}</p>
                    <p><span class="font-bold text-lg text-wrap">ID: </span> ${apiItems[i].id}</p>
                    <p><span class="font-bold text-lg text-wrap">Descriptions: </span> ${apiItems[i].description}</p>
                    <p><span class="font-bold text-lg text-wrap">Category: </span> ${apiItems[i].category}</p>
                                       
                    <button onclick='addToCart(${i})' class="btn btn-primary m-2">Add to Cart</button>
            </div>
            `
        
    }

})

.catch(function(error){

    console.log(error);

})

let cart = [];


function addToCart(index) {

  cart.push(apiItems[index]);

   
    
}

console.log(cart);

