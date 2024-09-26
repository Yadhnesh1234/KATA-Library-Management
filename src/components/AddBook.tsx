import React, { useState } from 'react';

const AddBook: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [publicationYear, setPublicationYear] = useState<number | "">('');

    const handleAddBook = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleAddBook}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            <div>
                <label>Author:</label>
                <input 
                    type="text" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                />
            </div>
            <div>
                <label>Publication Year:</label>
                <input 
                    type="number" 
                    value={publicationYear === "" ? "" : publicationYear} 
                    onChange={(e) => setPublicationYear(e.target.value ? Number(e.target.value) : "")} 
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
