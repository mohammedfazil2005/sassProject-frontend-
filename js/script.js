
let allrecipes;
const fetchRecipe=async()=>{
    try {
        const responce=await fetch("http://dummyjson.com/recipes")
        const {recipes}=await responce.json()
       allrecipes=recipes
        renderFood(recipes)
    } catch (error) {
        console.log(error)
    }
}

let totalFoodperPage=4
let totalPages=0
let currentpage=1
let firstIndex=0
let lastIndex=3


function renderFood(recipes){
    totalPages=Math.trunc(recipes.length/totalFoodperPage)
    lastIndex=currentpage*totalFoodperPage
    firstIndex=lastIndex-totalFoodperPage

  


    let slicedArray=recipes.slice(firstIndex,lastIndex)
 

    const recipeContainer=document.querySelector('.food-section-parent')
    // console.log(totalPages)
    if(!recipes) console.log('not found');
    recipeContainer.innerHTML=slicedArray.map((a)=>(
        `<div class="food-box">
            <div class="food-box-header">
                <button>20% off</button>
                <button><i class="fa-regular fa-heart"></i></button>
            </div>
            <img src="${a?.image}" alt="">
            <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i></p>
            <div class="details-div">
                <div>
                    <h6>${a?.name}</h6>
                    <p>₹${a?.caloriesPerServing}</p>
                </div>
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>`
    ))
    document.querySelector(".cpage").textContent=currentpage
    document.querySelector(".tpage").textContent=totalPages 

}

fetchRecipe()

document.querySelector(".backward-btn").addEventListener("click",()=>{
    if(currentpage>1){
        currentpage--
        renderFood(allrecipes)
      
    }
})

document.querySelector(".forward-btn").addEventListener("click",()=>{
    if(currentpage<7){
        currentpage++
       renderFood(allrecipes)
    }
})