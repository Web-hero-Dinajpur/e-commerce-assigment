const ProductCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => DisplayCategoryBtn(data))
}
const DisplayCategoryBtn = (categories) => {
    console.log(categories);
    const ProductCategory = document.getElementById('products-container');
    ProductCategory.innerHTML = '';
    const allDiv = document.createElement('div');
    allDiv.innerHTML = `
    <button class="category-btn active flex justify-center gap-4 btn btn-neutral btn-outline rounded-full">
      All
    </button>
  `;
    ProductCategory.append(allDiv);

    categories.forEach(categori => {
        console.log(categori)
        const div = document.createElement('div');
        div.innerHTML = `<button class=" btn btn-neutral btn-outline rounded-full">${categori}</button>`;

        ProductCategory.append(div)
    });
}
ProductCategory();