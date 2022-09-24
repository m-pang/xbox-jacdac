myModules.button5.onEvent(jacdac.ButtonEvent.Down, function () {
    if (Mode > 0) {
        serial.writeString("g")
    } else {
        serial.writeString("R")
    }
})
modules.potentiometer2.onPositionChangedBy(50, function () {
    Mode += 1
    Mode = Mode % 2
})
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (Mode) {
        serial.writeString("c")
    } else {
        serial.writeString("U")
    }
})
modules.flex1.onBendingChangedBy(10, function () {
    if (Mode) {
        serial.writeString("d")
    } else {
        serial.writeString("A")
    }
})
myModules.button3.onEvent(jacdac.ButtonEvent.Down, function () {
    if (Mode > 0) {
        serial.writeString("e")
    }
})
input.onButtonPressed(Button.A, function () {
    if (Mode > 0) {
        serial.writeString("a")
    }
})
myModules.button4.onEvent(jacdac.ButtonEvent.Down, function () {
    if (Mode > 0) {
        serial.writeString("f")
    } else {
        serial.writeString("L")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Mode > 0) {
        serial.writeString("b")
    }
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    if (Mode > 0) {
        serial.writeString("d")
    } else {
        serial.writeString("D")
    }
})
let Mode = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.showIcon(IconNames.Yes)
