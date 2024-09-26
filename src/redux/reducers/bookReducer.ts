import { ADD_BOOK } from '../../utility/constants/actionConstants';
import { Book } from '../../utility/types/type';

interface BookState {
    books: Book[];
}

const initialState: BookState = {
    books: [],
};

const bookReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_BOOK:
            return { ...state, books: [...state.books, action.payload] };
        default:
            return state;
    }
};

export default bookReducer;
