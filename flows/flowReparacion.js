const {addKeyword} = require('@bot-whatsapp/bot')
const {readFileSync} = require('fs')
const {join} = require('path')

const ChatgptClass = require('../configs/chatgptClass')

chatgptClass = new ChatgptClass

const obtenerPrompt = async () => {
    const pathPromp = join(process.cwd(), "promps");
    const text = readFileSync(join(pathPromp, "reparacion.txt"), "utf-8");
    return text;
};

exports.FlowReparacion = addKeyword('reparacion')
    .addAction(async() =>{
        //await flowDynamic([{body:'Dame un momento por favor'}])
        const prompt = await obtenerPrompt()
        const rta = await chatgptClass.handleMsgChatGPT(prompt)
        console.log(rta.text)
    })
    .addAnswer('Como encargado de reparación de teléfonos y computadoes ¿Cómo te puedo ayudar?',
        {capture:true},
        async(ctx,{fallBack}) =>{
            if (!ctx.body.toLowerCase().includes('ofertas') && !ctx.body.toLowerCase().includes('agente')) {
                const repuestaIA = await chatgptClass.handleMsgChatGPT(ctx.body)
                await fallBack(repuestaIA.text)
            }
        }
    )