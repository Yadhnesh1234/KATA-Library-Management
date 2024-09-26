import { addBook} from '../../redux/actions/bookActions';
import {ADD_BOOK} from '../../utility/constants/actionConstants'
import { Book } from '../../utility/types/type';

test('should create an action to add a book', () => {
    const book: Book = { id: '1', title: 'Test Book', author: 'Author', publicationYear: 2024 };
    const expectedAction = {
        type: ADD_BOOK,
        payload: book,
    };
    expect(addBook(book)).toEqual(expectedAction);
});