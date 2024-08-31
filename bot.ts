import { Bot, Context } from "grammy";
import 'dotenv/config'
import { setupCommands } from "./commands/";
import { setupMiddlewares } from "./middleware";
import { startText } from "./commands/start/start";
import { bachelorKeyboard, generalKeyboard, masterKeyboard, primoAnnoKeyboard, secondoAnnoKeyboard, startKeyboard, terzoAnnoKeyboard } from "./utils/keyboard/keyboards";
import { generateInlineResults } from "./utils/inlineQueries/inlineQueries";

// Token of the bot
let token: string = process.env.BOT_TOKEN!;
// Istance of the bot
export const bot = new Bot(token);

// Manage keyboard callback
bot.on("callback_query:data", async (ctx: Context) => {
    const callbackData = ctx.callbackQuery!.data;

    if (callbackData === "generali") {
        await ctx.editMessageText(startText(ctx), {
            reply_markup: generalKeyboard
        });
    } else if (callbackData === "triennale" || callbackData === "back_triennale") {
        await ctx.editMessageText(startText(ctx), {
            reply_markup: bachelorKeyboard
        });
    } else if (callbackData === "magistrale") {
        await ctx.editMessageText(startText(ctx), {
            reply_markup: masterKeyboard
        });
    } else if (callbackData === "primo_anno") {
        await ctx.editMessageText(startText(ctx), {
            reply_markup: primoAnnoKeyboard
        });
    } else if (callbackData === "secondo_anno") {
        await ctx.editMessageText(startText(ctx), {
            reply_markup: secondoAnnoKeyboard
        });
    } else if (callbackData === "terzo_anno") {
        await ctx.editMessageText(startText(ctx), {
            reply_markup: terzoAnnoKeyboard
        });
    } else if (callbackData === "back_main") {
        await ctx.editMessageText(startText(ctx), {
            reply_markup: startKeyboard
        });
    

    await ctx.answerCallbackQuery();
}});


bot.on('inline_query', async (ctx: Context) => {
    const query = ctx.inlineQuery?.query;
  
    // Genera i risultati della query inline
    const results = generateInlineResults(query!);
  
    // Rispondi alla query inline
    await ctx.answerInlineQuery(results);
  });

// Setup middleware
setupMiddlewares(bot);

// Setup commands
setupCommands(bot);

// Start the bot.
bot.start();