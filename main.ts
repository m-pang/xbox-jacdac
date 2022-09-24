modules.potentiometer2.onPositionChangedBy(50, function () {
    Mode += 1
    Mode = Mode % 2
})
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (Mode) {
        serial.writeString("c")
    }
})
modules.flex1.onBendingChangedBy(10, function () {
    if (Mode) {
        serial.writeString("d")
    }
})
input.onButtonPressed(Button.A, function () {
    if (Mode > 0) {
        serial.writeString("a")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Mode > 0) {
        serial.writeString("b")
    }
})
let Mode = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
