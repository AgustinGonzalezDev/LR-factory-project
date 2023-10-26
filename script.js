// Buttons
const $enter = document.querySelector('#enter');
const $seeStock = document.querySelector('#see-stock');
const $updateStock = document.querySelector('#update-stock');
const $addProduct =  document.querySelector('.add-product button');
const $salesHistory = document.querySelector('.sales-history button');
const $moreStatistics = document.querySelector('.more-statistics button');
const $agreeElement = document.querySelector('#create-element');
const $modalX = document.querySelector('.content-modal button');

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
const $modalAddProduct = document.querySelector('.modal-add-product');
 
let arrayElements =[];



//Event Listeners

$enter.addEventListener('click', () => {
    selectElement($select.value)
})

$addProduct.addEventListener('click', () => {
 $modalAddProduct.classList.add('show');
})

$agreeElement.addEventListener('click', (e) => {
    e.preventDefault();
    createElement();
}) 

$modalX.addEventListener('click', () => {
    $modalAddProduct.classList.remove('show');
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
            quantity: $inputQuantityProduct.value,
            cost: $inputCostProduct.value,
            saleValue: $inputSaleValue.value,
            id: index,
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

function selectElement(id) {

     if($select.value == "") {
        return
    } else {
        $divSelectProduct.classList.remove('close');
        $divSelectProduct.classList.add('open');
        $divProduct.style.display = 'block';
    }
}