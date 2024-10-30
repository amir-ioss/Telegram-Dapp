const TelegramBot = require('node-telegram-bot-api');
const token = '5698404405:AAEOBfZb2M2Y-FknR1jL7PpDU-1rZiMIDR8';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const webAppUrl = 'https://desklog.io/';

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open Mini App', web_app: { url: webAppUrl } }]
      ]
    }
  };

  bot.sendMessage(chatId, 'Welcome! Click the button below to launch the mini app.', options);
});
