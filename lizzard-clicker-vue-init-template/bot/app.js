import { Telegraf, Markup } from 'telegraf'

const token = '7797416362:AAGxmZLs8Fc2nYnQk63qiChK6j0G3bY-o1c'
const webAppUrl = 'https://eagle-invasion.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press to start the app', 
        Markup.inlineKeyboard([
            Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}
            `),
        ])
    )
})

bot.launch()