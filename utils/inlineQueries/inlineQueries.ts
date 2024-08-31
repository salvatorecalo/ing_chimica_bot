// inlineQueries.ts
import { InlineQueryResult, InlineQueryResultArticle } from 'grammy/types';

interface Group {
  name: string;
  link: string;
}

const groups: Group[] = [
  { name: 'Analisi 1', link: 'https://t.me/joinchat/TqbNkpTYMiTMHf_E' },
  { name: 'Chimica', link: 'https://t.me/joinchat/RPhAVyaTD-Vjjjr4' },
  { name: "Polito Students",link: "https://t.me/PolitoStudents"},
  { name: "Future Matricole (TIL)", link: "https://t.me/tilpolito"},
  { name: "Matricole", link: "https://t.me/matricolepolito"},
  { name: "Ingegneria Chimica", link: "https://google.com"},
  { name: "Informatica", link: "https://t.me/joinchat/TfAjcf-bbPijANB9"},
  { name: "Fisica 1", link: "https://t.me/joinchat/S-FMSXNvev5CGe0z"},
  { name: "Algebra Lineare e Geometria", link: "https://t.me/joinchat/UQ6ZscAodMekfL6O"},
  { name: "Scienze e Tecnologia dei Materiali", link: "https://t.me/joinchat/UQ6ZscAodMekfL6O"},
  { name: "Analisi 2", link: "https://t.me/analisi2chimica"}
];

// Funzione per generare i risultati della query inline
export function generateInlineResults(query: string): InlineQueryResult[] {
    // Filtra i gruppi che corrispondono alla query
    const results: InlineQueryResultArticle[] = groups
      .filter(group => group.name.toLowerCase().includes(query.toLowerCase()))
      .map(group => ({
        type: 'article',
        id: group.name, // Assicurati che ogni ID sia unico
        title: group.name,
        input_message_content: {
          message_text: `Ecco il link al gruppo: ${group.link}`,
        },
      }));
  
    if (results.length === 0) {
      // Se non ci sono risultati, mostra un messaggio di errore
      results.push({
        type: 'article',
        id: 'no_result',
        title: 'Nessun risultato',
        input_message_content: {
          message_text: 'Nessun gruppo trovato con il nome inserito.',
        },
      });
    }
  
    return results;
  }