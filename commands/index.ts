import { Bot } from "grammy";
import { start } from "../commands/start/start";

export function setupCommands(bot: Bot) {
    bot.command("start", start);
}