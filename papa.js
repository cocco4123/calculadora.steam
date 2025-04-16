let precioFINAL = document.getElementById("PrecioFINAL")
const valorUSD = 900
let precioUSD = prompt("ingresa precio incial");
let  precioPESOS = precioUSD * valorUSD;
let precioIMPUESTO = precioPESOS * 1.3;
let precioIVA = precioIMPUESTO * 1.23;
precioFINAL.textContent = "MAAAAA me das plata necesito " + precioIVA + " pesos";
