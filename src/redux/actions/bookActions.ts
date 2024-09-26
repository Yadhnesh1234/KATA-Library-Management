import { ADD_BOOK } from '../../utility/constants/actionConstants';
import { Book } from '../../utility/types/type';

export const addBook = (book: Book) => {
    if (!book.title || !book.author || isNaN(book.publicationYear)) {
        return undefined;
    }

    return {
        type: ADD_BOOK,
        payload: book,
    };
};