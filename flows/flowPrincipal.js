const {addKeyword, EVENTS, addAnswer} = require("@bot-whatsapp/bot")

exports.FlowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAnswer('Hola ¿Cómo te puedo ayudar?')