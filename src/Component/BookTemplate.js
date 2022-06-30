import React from 'react';
import styled from 'styled-components';

const BookTemplateBlock = styled.div `
    text-align : center;
    background : #fff;
    height : 850px;
    width : 700px;
    border-radius : 16px;
    margin : 0 auto;
    box-shadow : 0 0 8px 0 rgba(0,0,0,0.05);
    padding : 20px;
    margin-top : 20px;
    overflow: scroll;
`;

const BookTemplate = ({children}) => {
    return (
        <BookTemplateBlock>
            {children}
        </BookTemplateBlock>
    );
};

export default BookTemplate;