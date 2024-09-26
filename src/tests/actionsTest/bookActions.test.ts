import { addBook } from '../../redux/actions/bookActions';
import { ADD_BOOK } from '../../utility/constants/actionConstants';
import { Book } from '../../utility/types/type';

describe('Book Actions', () => {
    test('should create an action to add a book with valid data', () => {
        const book: Book = { id: '1', title: 'Test Book', author: 'Author', publicationYear: 2024 };
        const expectedAction = {
            type: ADD_BOOK,
            payload: book,
        };
        expect(addBook(book)).toEqual(expectedAction);
    });

    test('should not create an action to add a book when title is missing', () => {
        const book: Book = { id: '2', title: '', author: 'Author', publicationYear: 2024 };
        expect(addBook(book)).toBeUndefined();
    });

    test('should not create an action to add a book when author is missing', () => {
        const book: Book = { id: '3', title: 'Test Book', author: '', publicationYear: 2024 };
        expect(addBook(book)).toBeUndefined();
    });

    test('should not create an action to add a book when publication year is invalid', () => {
        const book: Book = { id: '4', title: 'Test Book', author: 'Author', publicationYear: NaN };
        expect(addBook(book)).toBeUndefined();
    });

    test('should not create an action to add a book when all fields are missing', () => {
        const book: Book = { id: '5', title: '', author: '', publicationYear: 0 };
        expect(addBook(book)).toBeUndefined();
    });

    test('should not create an action to add a book when some fields are valid but others are missing', () => {
        const book: Book = { id: '6', title: 'Valid Title', author: '', publicationYear: 2024 };
        expect(addBook(book)).toBeUndefined();
    });
});
