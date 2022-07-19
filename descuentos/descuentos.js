const precioOriginal = 120;
const descuento = 18;

const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const priceDiscount = () => {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const resultP = document.getElementById("resultPrice");

    const discountPrice = calcularPrecioConDescuento(price, discount);
    resultP.innerText = "El precio de tu producto con descuento es de $" + discountPrice;
    return discountPrice;
}
const couponPriceDiscount = () => {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const coupon = document.getElementById("couponOptions");
    const couponValue = coupon.value;
    const resultP = document.getElementById("resultPrice");
    
    const discountPrice = calcularPrecioConDescuento(price, couponValue);
    resultP.innerText = "El precio de tu producto con descuento es de $" + discountPrice;
    return discountPrice;
}






