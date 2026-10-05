let productimages = document.querySelectorAll(".product-images img")
let coverimage = document.querySelector(".product-image-cover img")

productimages.forEach((item)=>{
    item.addEventListener("click", ()=>{
     coverimage.src = item.src;  
    })
})