import { Bot } from "grammy";
import { logging } from "./logging";

export function setupMiddlewares(bot: Bot) {
    bot.use(logging);
}
