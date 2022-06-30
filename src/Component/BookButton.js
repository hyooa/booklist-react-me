import React from 'react';
import styled from 'styled-components';

const BookButtonBlock = styled.button `
    border : none;
    background : none;
    button {
        border: none;
        outline: none;
        cursor: pointer;
        background-color: #222;
        color: #fff;
        padding: 10px 40px;
        border-radius: 5px;
        margin: 20px;
    }
`;

const BookButton = () => {
    return (
        <BookButtonBlock>
            <button>2022</button>
            <button>2021</button>
            <button>2020</button>
            <button>2019</button>
        </BookButtonBlock>
    );
};

export default BookButton;