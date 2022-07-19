
const dividir = (numero1, numero2) => numero1 / numero2
let numero1, numero2, operacion

do {
    numero1 = parseFloat(prompt("ingrese monto a Pagar"))
    numero2 = parseFloat(prompt("ingrese cantidad de cuotas en las que quiere abonar"))
    operacion = prompt("ingrese ok para confirmar")
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("por favor ingresar números válidos")
    }

    if (numero2 === 0 && operacion === "ok") {
        alert("no se puede dividir entre cero")
    }
} while ((isNaN(numero1) || isNaN(numero2) || (numero2 === 0 && operacion === "ok")))

switch (operacion) {
    case "ok":
        alert(("Importe a abonar por cuota $") + (dividir(numero1, numero2)))
        break
    default: ("operacion no valida")
        break
} 