// inlineQueries.ts
import { InlineQueryResult, InlineQueryResultArticle } from 'grammy/types';
import {groups} from "../groups/groups"

// Funzione per generare i risultati della query inline
export function generateInlineResults(query: string): InlineQueryResult[] {
    // Filtra group based on query
    const results: InlineQueryResultArticle[] = groups
      .filter(group => group.name.toLowerCase().includes(query.toLowerCase()))
      .map(group => ({
        type: 'article',
        id: group.name,
        title: group.name,
        input_message_content: {
          message_text: `Ecco il link al gruppo: ${group.link}`,
        },
      }));
  
    if (results.length === 0) {
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