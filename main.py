def on_potentiometer2_position_changed_by():
    global Mode
    Mode += 1
    Mode = Mode % 2
modules.potentiometer2.on_position_changed_by(50, on_potentiometer2_position_changed_by)
