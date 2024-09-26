import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookActions';
import { Book } from '../utility/types/type';
import { Button, TextField } from '@mui/material';

const AddBook: React.FC = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicationYear, setPublicationYear] = useState<number | ''>('');

    const handleAddBook = () => {
        const newBook: Book = {
            id: Date.now().toString(), 
            title,
            author,
            publicationYear: Number(publicationYear),
        };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
        setPublicationYear('');
    };

    return (
        <div>
            <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <TextField
                label="Publication Year"
                type="number"
                value={publicationYear}
                onChange={(e) => setPublicationYear(Number(e.target.value))}
            />
            <Button onClick={handleAddBook}>Add Book</Button>
        </div>
    );
};

export default AddBook;