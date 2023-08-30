const {addKeyword} = require('@bot-whatsapp/bot')


const FlowPlataforma = addKeyword('1',{sensitive:true})
    .addAnswer('Asesorias plataforma moodle')


const FlowVC = addKeyword('2',{sensitive:true})
    .addAnswer('Asesorias para videoconferencias')


const FlowALDEA = addKeyword('3',{sensitive:true})
    .addAnswer('Asesorias para ALDEA')

exports.FlowAgente = addKeyword('agente')
    .addAnswer('Selecciona una de las siguientes opciones')
    .addAnswer([
        "*1* Problemas con la plataforma",
        "*2* Videoconferencias",
        "*3* Acceso a ALDEA"
    ],null,null,
    [FlowPlataforma, FlowVC,FlowALDEA])