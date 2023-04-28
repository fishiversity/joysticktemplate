comment.comment("Replace with the Radio Group on your Joystick")
radio.setGroup(255)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        comment.comment("If the joystick is moved up")
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        comment.comment("If the joystick is moved down")
        radio.sendNumber(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        comment.comment("If the joystick is moved left")
        radio.sendNumber(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        comment.comment("If the joystick is moved right")
        radio.sendNumber(4)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(7)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendNumber(8)
    } else {
        radio.sendNumber(0)
    }
})
