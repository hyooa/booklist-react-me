import React from 'react';
import styled from 'styled-components';

const BookTitleBlock = styled.div `
    font-size: 20px;
    text-align: center;
    cursor: pointer;
`;

const BookTitle = () => {
    return (
        <BookTitleBlock>
            <h1>Book List</h1>
        </BookTitleBlock>
    );
};

export default BookTitle;