// Buttons
const $enter = document.querySelector('#enter');
const $seeStock = document.querySelector('#see-stock');
const $updateStock = document.querySelector('#update-stock');
const $addProduct =  document.querySelector('.add-product button');
const $salesHistory = document.querySelector('.sales-history button');
const $moreStatistics = document.querySelector('.more-statistics button');
const $agreeElement = document.querySelector('#create-element');
const $modalAddProductX = document.querySelector('.content-modal-add-product #x');
const $modalUpdateStockX = document.querySelector('.content-modal-update-stock #x');
const $inStock = document.querySelector('#in-stock');
const $extStock = document.querySelector('#ext-stock');

//modal input agree elements
const $inputName = document.querySelector('#name');
const $inputQuantityProduct = document.querySelector('#quantity-product');
const $inputCostProduct = document.querySelector('#cost-product');
const $inputSaleValue = document.querySelector('#sale-value');

//statistics numbers
const $quantityOfProduct = document.querySelector('.quantity-of-product h5');
const $productCost = document.querySelector('.product-cost h5');
const $saleValue = document.querySelector('.sale-value h5');
const $saleLast30 = document.querySelector('.sale-last-30 h5');
const $grossProfit = document.querySelector('.gross-profit h5');
const $netProfit = document.querySelector('.net-profit h5');
const $profitMargin = document.querySelector('.profit-margin h5');

//others elements DOM 
const $select = document.querySelector('.select-button select');
const $nameProduct = document.querySelector('.product h3');
const $displayNameProduct = document.querySelector('.display-product h3');

//sections
const $divSelectProduct = document.querySelector('.select-product');
const $divProduct = document.querySelector('.product');
const $sectionDisplayProduct = document.querySelector('.products');
const $modal = document.querySelectorAll('.m');
const $modalUpdateStock = document.querySelector('#sec2 .modal');
const $modalUpdateStock1 = document.querySelector('.content-modal-update-stock')
const $entry = document.querySelector('.entry');
const $release = document.querySelector('.release');
const $modalAddProduct = document.querySelector('#sec3 .modal');
const $displayproduct = document.querySelector('.display-product');
 
let arrayElements =[];



//Event Listeners

$enter.addEventListener('click', () => {
    selectElement($select.value)
})

$addProduct.addEventListener('click', () => {
 $modalAddProduct.classList.add('show');
})

$modalAddProductX.addEventListener('click', () => {
    $modalAddProduct.classList.remove('show');
})

$agreeElement.addEventListener('click', (e) => {
    e.preventDefault();
    createElement();
}) 

$inStock.addEventListener('click', () => {
    $modalUpdateStock1.classList.add('open2');
    $release.style.display = 'none';
    $entry.style.display = 'block';
})

$extStock.addEventListener('click', () => {
    $modalUpdateStock1.classList.add('open2');
    $entry.style.display = 'none';
    $release.style.display = 'block';
    
})

// $modal.addEventListener('click', (event) => {
//     const element = event.target;
//     const elementData = element.attributes.data.value
//     if(elementData == 'add-product') {
//         $modalAddProduct.classList.remove('show');
//     } else if(elementData == update-stock) {
//         $modalUpdateStock.classList.remove('show');
//     };
// })


$seeStock.addEventListener('click', () => {
    $displayproduct.style.display = 'block';
    location.href = '#products';
});

$updateStock.addEventListener('click', () => {
    $modalUpdateStock.classList.add('show');
})

$modalUpdateStockX.addEventListener('click', () => {
    $modalUpdateStock.classList.remove('show');
    $modalUpdateStock1.classList.remove('open2');
    $entry.style.display = 'none';
    $release.style.display = 'none';
})


//Function create element
function createElement() {
    let name = $inputName.value;
    let index = arrayElements.length;

    if( $inputName.value == "" || 
        $inputQuantityProduct.value == ""  || 
        $inputCostProduct.value =="" || 
        $inputSaleValue.value == ""){
            alert('Es necesario completar todos los datos para continuar')
    } else {
        arrayElements.push({
            name: $inputName.value,
            addProduct: 0,
            sales: "",
            quantity: $inputQuantityProduct.value,
            cost: $inputCostProduct.value,
            saleValue: $inputSaleValue.value,
            id: index,
            salesLast30: "",
            grossProfit: "",
            netProfit: "",
            profitMargin: "",
            

        })
        let option = `<option value=${index}>${name}</option>`;
        document.querySelector('.select-button select').insertAdjacentHTML('beforeend', option);

        $inputName.value = ""
        $inputQuantityProduct.value = ""
        $inputCostProduct.value = ""
        $inputSaleValue.value = ""
        $modalAddProduct.classList.remove('show');
    }
}


//Function select element

function selectElement() {


     if($select.value== "") {
        return
    } else {
        $divSelectProduct.classList.remove('close');
        $divSelectProduct.classList.add('open');
        $divProduct.style.display = 'block';
    }
    $nameProduct.innerHTML = arrayElements[$select.value].name;
    $displayNameProduct.innerHTML = arrayElements[$select.value].name;
    $quantityOfProduct.innerHTML = arrayElements[$select.value].quantity;
    $productCost.innerHTML = `$ ${arrayElements[$select.value].cost}`;
    $saleValue.innerHTML = `$ ${arrayElements[$select.value].saleValue}`;
    $saleLast30.innerHTML = arrayElements[$select.value].salesLast30;
    $grossProfit.innerHTML = arrayElements[$select.value].grossProfit;
    $netProfit.innerHTML = arrayElements[$select.value].netProfit;
    $profitMargin.innerHTML = arrayElements[$select.value].profitMargin;

} 