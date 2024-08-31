// Define the type for inline query result manually
export interface InlineQueryResultArticle {
    type: 'article';
    id: string;
    title: string;
    input_message_content: {
      message_text: string;
    };
  }

  