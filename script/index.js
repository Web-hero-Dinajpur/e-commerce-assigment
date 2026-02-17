const ProductCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => DisplayCategoryBtn(data))
}
const loadcategory = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => displayAllProcuct(data))
}
function loadCategorySection(id){
   fetch(`https://fakestoreapi.com/products/category/${id}`)
   .then(res=>res.json())
   .then(data=>DisplayCategorySection(data))
}
const DisplayCategorySection=(categoriesSection)=>{
    const SetcionContainer=document.getElementById('setcion-container')
    SetcionContainer.innerHTML="";
    categoriesSection.forEach(cateSection => {
        console.log(cateSection);
        const DivCard =document.createElement('DivCard');
        DivCard.innerHTML=` <div class="shadow border-gray-100 rounded-lg md:max-h-full pb-4
">
           <div class="bg-gray-300 md:w-full rounded-t-lg"> <img class="md:h-[200px] items-center mx-auto md:p-4" src="${cateSection.image}" alt=""></div>
               <div class="m-4">
                 <div class="flex justify-between items-between">
                    <span class="bg-sky-100 px-1 text-primary font-bold text-sm rounded-full">${cateSection.category}</span>
                    <div class="font-bold">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                    <span>${cateSection.rating.rate}</span>
                    </div>
                </div>
                <p class="font-bold text-xl my-2">${cateSection.title}</p>
                <h2 class="font-bold">$${cateSection.price}</h2>
                <div class="flex items-center pt-4 justify-between">
                    <button class="btn btn-active">Default</button>
                    <button class="btn btn-active btn-primary">Primary</button>
                </div>
               </div>
        </div>`;

        SetcionContainer.append(DivCard)
    });
}

const displayAllProcuct = (products) => {
    // console.log(products);
    const AllProductContainer = document.getElementById('Product-Container');
    AllProductContainer.innerHTML = '';
    products.forEach(product => {
        // console.log(product);
        const prodiv = document.createElement('prodiv');
        prodiv.innerHTML = ` <div class="shadow border-gray-100 rounded-lg md:max-h-full pb-4
">
           <div class="bg-gray-300 md:w-full rounded-t-lg"> <img class="md:h-[200px] items-center mx-auto md:p-4" src="${product.image}" alt=""></div>
               <div class="m-4">
                 <div class="flex justify-between items-between">
                    <span class="bg-sky-100 px-1 text-primary font-bold text-sm rounded-full">${product.category}</span>
                    <div class="font-bold">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                    <span>${product.rating.rate}</span>
                    </div>
                </div>
                <p class="font-bold text-xl my-2">${product.title}</p>
                <h2 class="font-bold">$${product.price}</h2>
                <div class="flex items-center pt-4 justify-between">
                    <button class="btn btn-active">Default</button>
                    <button class="btn btn-active btn-primary">Primary</button>
                </div>
               </div>
        </div>`;

        AllProductContainer.append(prodiv)
    });
}
const DisplayCategoryBtn = (categories) => {
    // console.log(categories);
    const ProductCategory = document.getElementById('products-container');
    ProductCategory.innerHTML = '';
    const allDiv = document.createElement('div');
    allDiv.innerHTML = `
    <button onclick="loadcategory()" class="category-btn active font-bold md:flex justify-center gap-4 btn btn-neutral btn-outline rounded-full">
      All
    </button>
  `;
    ProductCategory.append(allDiv);

    categories.forEach(categori => {

        const button = document.createElement("button");

        button.innerText = categori;

        button.className =
            "font-bold btn btn-neutral btn-outline rounded-full";

        button.addEventListener("click", () => {
            loadCategorySection(categori);
        });

        ProductCategory.append(button);

    });

}

ProductCategory();