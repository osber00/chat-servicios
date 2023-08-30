require('dotenv').config()

class ChatGPTClass{
    queue = [];
    optionsGPT = { model: process.env.OPEN_AI_MODEL };
    openai = undefined;

    constructor() {
        this.init().then();
    }

    init = async () => {
        const { ChatGPTAPI } = await import("chatgpt");
        this.openai = new ChatGPTAPI(
            {
                apiKey: process.env.OPEN_AI_TOKEN
            }
        );
    }

    handleMsgChatGPT = async (body) => {
        const interaccionChatGPT = await this.openai.sendMessage(body, {
            conversationId: !this.queue.length
            ? undefined
            : this.queue[this.queue.length - 1].conversationId,
            parentMessageId: !this.queue.length
            ? undefined
            : this.queue[this.queue.length - 1].id,
        })

        this.queue.push(interaccionChatGPT);
        return interaccionChatGPT
      };
}

module.exports = ChatGPTClass