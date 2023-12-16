const cartDiv = document.querySelector('.cartitems')

const strData = localStorage.getItem('cart')

const cart = JSON.parse(strData);

// console.log(cart);





const cartItemPush = new Promise((res , err)=>{

    let apiNewcart = cart;


})

.then(function(res){
    for (let i = 0; i < cartItemPush.length; i++) {
        
        
        cartDiv.innerHTML += `
            <div class="p-5 border border-1  rounded-1 shadow-lg m-2 ">
                    <img style="width:200px; height:300px;" src = '${apiNewcart[i].image}'>
                    <p><span class="font-bold text-lg text-wrap">Title: </span> ${apiNewcart[i].title}</p>
                    <p><span class="font-bold text-lg text-wrap">Descriptions: </span> ${apiNewcart[i].description}</p>
                    <p><span class="font-bold text-lg text-wrap">Category: </span> ${apiNewcart[i].category}</p>
            </div>
            `
        
    }
})

.catch(function(err){
    console.log(err);
})

