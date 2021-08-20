//Variables 
const ram__eightGB = document.getElementById('eight-gb-memory');
const ram__sixteenGB = document.getElementById('sixteen-gb-memory');
const storage__256GB = document.getElementById('storage-size-256');
const storage__512GB = document.getElementById('storage-size-512');
const storage__1TB = document.getElementById('storage-size-1tb');
const delivery__free = document.getElementById('delivery-free');
const delivery__notFree = document.getElementById('delivery-nonfree');
// const laptop__price = document.getElementById('laptop-price').innerText;
// const memory__charge = document.getElementById('memory-charge').innerText;
// const storage__charge = document.getElementById('storage-charge').innerText;
// const delivery__charge = document.getElementById('delivery-charge').innerText;
const input = document.getElementById('input');
const coupon__btn = document.getElementById('coupon-btn');
// const total__all = document.getElementById('total-all').innerText;


function getValueAndUpdate(updateLocation, price){
    const location = document.getElementById(updateLocation);
    location.innerText = price;
}
function updateTotal(laptop,memory,storage,delivery){
    const laptopCost = document.getElementById(laptop).innerText;
    const memoryCost = document.getElementById(memory).innerText;
    const storageCost = document.getElementById(storage).innerText;
    const deliveryCost = document.getElementById(delivery).innerText;

    // console.log(laptopCost,memoryCost,storageCost,deliveryCost)
    return parseInt(laptopCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost)
}


// Event Listeners

ram__eightGB.addEventListener('click', function(){
    getValueAndUpdate('memory-charge', 0);
})
ram__sixteenGB.addEventListener('click', function(){
    getValueAndUpdate('memory-charge', 180);
})
storage__256GB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 0);
})
storage__512GB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 100);
})
storage__1TB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 180);
})
delivery__free.addEventListener('click', function(){
    getValueAndUpdate('delivery-charge', 0);
})
delivery__notFree.addEventListener('click', function(){
    getValueAndUpdate('delivery-charge', 20);
})
coupon__btn.addEventListener('click', function(){

})
const totalCost = document.getElementById('total');
const total = updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge');
totalCost.innerText = total;

window.onload = totalCost