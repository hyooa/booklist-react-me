import React from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';
import { useBookDispatch } from './BookListContext';

const Remove = styled.div `
    &:hover {
        color : red;
    }
`;

const BookTable = ({id, writer, title, year}) => {
    const dispatch = useBookDispatch();
    const onRemove = () => dispatch({type:'REMOVE', id:id});
    return (
        <tr id='tr'>
            <td>{writer}</td>
            <td>{title}</td>
            <td>{year}</td>
            <Remove onClick={onRemove}>
                <MdDelete></MdDelete>
            </Remove>
        </tr>
    );
};

export default BookTable;