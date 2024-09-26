import { Book } from '../../utility/types/type';
import { ADD_BOOK } from '../../utility/constants/actionConstants';

export const addBook = (book: Book) => ({
    type: ADD_BOOK,
    payload: book,
});