input.onButtonPressed(Button.A, function () {
    serial.writeString("A")
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    serial.writeString("B")
    basic.showString("B")
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
