
const productsdiv = document.querySelector('.product-render');
const productsdivtop = document.querySelector('.product-render-top');
const cartitems = document.querySelector('.cart-list');
const cartSummary = document.querySelector('.cart-summary');

let apiItems;
const arr = [];

axios.get('https://fakestoreapi.com/products')


.then(function(response){

    // console.log(response.data);
    apiItems = response.data;

    for (let i = 0; i < apiItems.length; i++) {
        
        console.log(apiItems[i]);

        productsdiv.innerHTML += `	
		
		<div class="product">
		<div class="product-img">
		<img src="${apiItems[i].image}" alt="">
		<div class="product-label">
		<span class="sale">-30%</span>
		<span class="new">NEW</span>
		</div>
	</div>
	<div class="product-body">
	<p class="product-category">${apiItems[i].category}</p>
	<h3 class="product-name"><a href="#">${apiItems[i].title}</a></h3>
	<h4 class="product-price">${apiItems[i].price}</h4>
	<div class="product-rating">
	<i class="fa fa-star"></i>
	<i class="fa fa-star"></i>
	<i class="fa fa-star"></i>
	<i class="fa fa-star"></i>
	<i class="fa fa-star"></i>
	</div>
	<div class="product-btns">
	<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
	<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
	</div>
	</div>
	<div class="add-to-cart">
	<button onclick='addToCart(${i})' class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
		</div>
				</div>		
		`
    
    }

})

.catch(function(error){

    console.log(error);

})

let qty = document.querySelector('.fa fa-shopping-cart')

function addToCart(i) {

	




	// console.log(apiItems[i]);

	arr.push(apiItems[i]);
    console.log(arr);
    Swal.fire({
        title: "Good job!",
        text: "Product added to cart successfully",
        icon: "success"
      });

	 
	  const cartproducts = arr;
	  const strObj = JSON.stringify(cartproducts);
     localStorage.setItem('productDetails' , strObj)

}


const strData = localStorage.getItem('productDetails');
const obj = JSON.parse(strData);


let carttotal = 0;


let result = [];
obj.forEach(elem => {
  let match = result.find(r => r.id === elem.id);
  if(match) {
    return {...match, ...elem, admin: true};
  } else {
    result.push({...elem, admin: false });
  }
});
console.log(result);





	for (let i = 0; i < result.length; i++) {
	
	    carttotal += result[i].price

		
		cartitems.innerHTML += `
		<div class="product-widget">
		<div class="product-img">
		<img src="${result[i].image}" alt=""></div>
	
		<div class="product-body">
		<h3 class="product-name"><a href="#">${result[i].title}</a></h3>
		<h4 class="product-price"><span class="qty">${obj.length}x</span>${result[i].price}</h4>
	</div>
	<button class="delete"><i class="fa fa-close"></i></button>
	`

	cartSummary.innerHTML = `
	<small>${obj.length} Item(s) selected</small>
	<h5>SUBTOTAL:${carttotal.toFixed(2)}</h5>
	`
	}

	


