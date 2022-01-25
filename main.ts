input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (poopEmoji))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == poopEmoji) {
        grove.setupWifi(
        SerialPin.P15,
        SerialPin.P1,
        BaudRate.BaudRate115200,
        "",
        ""
        )
    }
})
let poopEmoji = ""
poopEmoji = poopEmoji
radio.setGroup(77)
