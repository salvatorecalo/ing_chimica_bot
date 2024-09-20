import { Context } from 'grammy';
import { startKeyboard } from '../../utils/keyboard/keyboards';

export function startText(ctx: Context) : string {
    return `Ciao ${ctx.from?.first_name}, bentornat*! 👋\n\nQuesto bot contiene i link ai vari gruppi relativi ai corsi di Ingegneria Informatica (triennale e magistrale).\n\nQuasi tutti i gruppi qui presenti, compreso il bot stesso, fanno parte di @PoliTo_Network.\n\nPer discussioni, scrivete nel gruppo generale @PoliToStudents.\n\nPer tornare al menu principale, usa /start.\n\nPer cercare direttamente un gruppo, usa la ricerca inline (Scrivi @ing_chimica_bot seguito dal nome del gruppo che vuoi cercare, ad esempio @ing_chimica_bot Analisi 1).\n\nPer segnalare bug contattare: @Ignorante`
}
export function start(ctx: Context) {
    ctx.reply(
       startText(ctx),
        {
            reply_markup: startKeyboard
        }
    );
}