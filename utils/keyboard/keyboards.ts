import { InlineKeyboard } from "grammy";

// Start Keyboard
export const startKeyboard = new InlineKeyboard()
    .text("Gruppi Generali", "generali").row()
    .text("Triennale", "triennale").row()
    .text("Magistrale", "magistrale").row()

// General Keyboard
export const generalKeyboard = new InlineKeyboard()
    .url("Polito Students", "https://t.me/PolitoStudents").row()
    .url("Future Matricole (TIL)", "https://t.me/tilpolito").row()
    .url("Matricole", "https://t.me/matricolepolito").row()
    .url("Ingegneria Chimica", "https://google.com").row()
    .text("Indietro", "back_main").row();
// Bachelor Keyboard
export const bachelorKeyboard = new InlineKeyboard()
    .text("Primo Anno", "primo_anno").row()
    .text("Secondo Anno", "secondo_anno").row()
    .text("Terzo Anno", "terzo_anno").row()
    .text("Indietro", "back_main").row();

// Bachelor Keyboard
export const primoAnnoKeyboard = new InlineKeyboard()
    .url("Analisi 1", "https://t.me/joinchat/TqbNkpTYMiTMHf_E").row()
    .url("Chimica", "https://t.me/joinchat/RPhAVyaTD-Vjjjr4").row()
    .url("Informatica", "https://t.me/joinchat/TfAjcf-bbPijANB9").row()
    .url("Fisica 1", "https://t.me/joinchat/S-FMSXNvev5CGe0z").row()
    .url("Algebra Lineare e Geometria", "https://t.me/joinchat/UQ6ZscAodMekfL6O").row()
    .url("Scienze e Tecnologia dei Materiali", "https://t.me/joinchat/UQ6ZscAodMekfL6O").row()
    .text("Indietro", "back_triennale").row();


// Bachelor Keyboard
export const secondoAnnoKeyboard = new InlineKeyboard()
    .url("Analisi 2", "https://t.me/analisi2chimica").row()
    .text("Indietro", "back_triennale").row();


// Bachelor Keyboard
export const terzoAnnoKeyboard = new InlineKeyboard()
    .text("Indietro", "back_triennale").row();

// Master Keyboard
export const masterKeyboard = new InlineKeyboard()
    //.text("Primo Anno", "opt3_1").row()
    //.text("Secondo Anno", "opt3_2").row()
    .text("Indietro", "back_main").row();
