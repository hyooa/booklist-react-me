import React, { useState } from 'react';
import styled from 'styled-components';
import { useBookDispatch, useBookNextId } from './BookListContext';

const BookCreateBlock = styled.div `
    background : #ccc;
    padding : 32px 32px 72px;
    border-radius : 16px;
    margin-top : 10px;
    height : 200px;
`;

const BookInput = styled.form `
input {
    display : flex;
    border-radius : 4px;
    width : 100%;
    outline : none;
    font-size : 14px;
    border : none;
    outline : none;
    padding : 8px 0;
    margin : 8px 0;
}
`;

const BookButton = styled.div `
text-align: center;
button {
    padding : 10px 20px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #222;
    margin : 10px;
    border-radius : 16px;
}
`;

// 객체로 받아주기 ??

const BookCreate = () => {

    const [ value1, setValue1 ] = useState("");
    const [ value2, setValue2 ] = useState("");
    const [ value3, setValue3 ] = useState("");
    const dispatch = useBookDispatch();
    const nextId = useBookNextId();

    const onChange_writer = e => setValue1(e.target.value);
    // console.log(value);
    const onChange_title = e => setValue2(e.target.value);
    const onChange_year = e => setValue3(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type : 'CREATE' ,
            book : {
                id : nextId.current,
                title : value1,
                writer : value2,
                year : value3,
            }
        })
        setValue1('');
        setValue2('');
        setValue3('');
        nextId.current += 1;
    }

    return (
        <BookCreateBlock>
            {/* form태그 내 onsubmit 이벤트 */}
            <BookInput onSubmit={onSubmit}>
                글쓴이 : <input writer={value1} onChange={onChange_writer}></input>
                제목 : <input title={value2} onChange={onChange_title}></input>
                년도 : <input year={value3} onChange={onChange_year}></input>
                <BookButton>
                    <button type='reset'>취소</button>
                    <button type='submit'>확인</button>
                </BookButton>
            </BookInput>
        </BookCreateBlock>
    );
};

export default BookCreate;