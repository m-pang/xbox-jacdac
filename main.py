def on_potentiometer2_position_changed_by():
    global Mode
    Mode += 1
    Mode = Mode % 2
modules.potentiometer2.on_position_changed_by(50, on_potentiometer2_position_changed_by)

def on_button1_button_down():
    if Mode:
        serial.write_string("c")
modules.button1.on_event(jacdac.ButtonEvent.DOWN, on_button1_button_down)

def on_flex1_bending_changed_by():
    if Mode:
        serial.write_string("d")
modules.flex1.on_bending_changed_by(10, on_flex1_bending_changed_by)

def on_button_pressed_a():
    if Mode > 0:
        serial.write_string("a")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if Mode > 0:
        serial.write_string("b")
input.on_button_pressed(Button.B, on_button_pressed_b)

Mode = 0
serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BAUD_RATE115200)