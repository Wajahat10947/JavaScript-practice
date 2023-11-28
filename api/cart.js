const strData = localStorage.getItem('addToCartItems')
const obj = JSON.parse(strData);





const cartItemPush = new Promise((res , err)=>{

    let apiNewcart = cart;


})

.then(function(res){
    for (let i = 0; i < cartItemPush.length; i++) {
        
        
        cartShow.innerHTML += `
            <div class="p-5 border border-1  rounded-1 shadow-lg m-2 ">
                    <img style="width:200px; height:300px;" src = '${apiItems[i].image}'>
                    <p><span class="font-bold text-lg text-wrap">Title: </span> ${apiItems[i].title}</p>
                    <p><span class="font-bold text-lg text-wrap">ID: </span> ${apiItems[i].id}</p>
                    <p><span class="font-bold text-lg text-wrap">Descriptions: </span> ${apiItems[i].description}</p>
                    <p><span class="font-bold text-lg text-wrap">Category: </span> ${apiItems[i].category}</p>
            </div>
            `
        const strObj = JSON.stringify(cart);
        localStorage.setItem('addToCartItems' , 'strObj')
    }
})

.catch(function(err){
    console.log(err);
})

