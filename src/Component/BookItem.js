import React from 'react';
import styled from 'styled-components';
import { useBookState } from './BookListContext';
import BookTable from './BookTable';

const ItemTable = styled.table `
border-collapse: collapse;
width: 100%;
margin-top: 30px;
th {
    border-top: 3px solid #111;
    padding: 10px 0;
}
tr {
    border-bottom: 1px solid #222;
}
td {
    padding :10px;
    font-size : 14px;
    color: #555;
}
`;

const BookItem = () => {
    const books = useBookState();
    return (
    <ItemTable>
    <tr>
        <th>글쓴이</th>
        <th>제목</th>
        <th>년도</th>
        <th>삭제</th>
     </tr>
        {books.map(book => (
            <BookTable
                id={book.id}
                writer={book.writer}
                title={book.title}
                year={book.year}
                >
            </BookTable>
        ))}
    </ItemTable>

    );
};

export default BookItem;