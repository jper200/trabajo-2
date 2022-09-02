input.onButtonPressed(Button.A, function () {
    suma = n1 + n2
    basic.showNumber(suma)
    palabra1 = "suma"
})
input.onButtonPressed(Button.AB, function () {
    multiplicacion = n1 * n2
    basic.showNumber(multiplicacion)
    palabra1 = "multiplicacion"
})
input.onButtonPressed(Button.B, function () {
    resta = n1 - n2
    basic.showNumber(resta)
    palabra1 = "resta"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(n1)
    basic.showNumber(n2)
    basic.showString(palabra1)
})
let multiplicacion = 0
let resta = 0
let suma = 0
let palabra1 = ""
let n2 = 0
let n1 = 0
n1 = randint(1, 5)
n2 = randint(1, 5)
palabra1 = "-"
suma = 0
resta = 0
multiplicacion = 0
