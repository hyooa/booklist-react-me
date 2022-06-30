import React, { createContext, useReducer, useContext, useRef } from "react"

const initialBooks = [ // 초기값
    {
        id : 1,
        writer : "김공공",
        title : "공공이의 일기",
        year : "2021"
    },
    {
        id : 2,
        writer : "김일일",
        title : "일일이의 일기",
        year : "2021"
    },
    {
        id : 3,
        writer : "김이이",
        title : "이이의 일기",
        year : "2020"
    },
    {
        id : 4,
        writer : "김삼삼",
        title : "삼삼이의 일기",
        year : "2020"
    },
    {
        id : 5,
        writer : "김사사",
        title : "사사의 일기",
        year : "2019"
    },
    {
        id : 6,
        writer : "김오오",
        title : "오오의 일기",
        year : "2019"
    },
    {
        id : 7,
        writer : "김육육",
        title : "육육이의 일기",
        year : "2018"
    },
    {
        id : 8,
        writer : "김칠칠",
        title : "칠칠이의 일기",
        year : "2018"
    }
];

// Book List 클릭시 전체보기
// 버튼 클릭시 년도별 묶음
// 삭제 기능
// 추가 기능

function booklistReducer (state, action) {
    switch(action.type) {
        case 'CREATE' :
        return state.concat(action.book);

        // case 'TOGGLE' :
        // return state;

        case 'REMOVE' :
        return state.filter(book => action.id !== book.id);

        default :
        return state;
    }
}

const BookStateContext = createContext();
const BookDispatchContext = createContext();
const BookNextIdContext = createContext();

export function BookProvider ({children}) {
    const [ state, dispatch ] = useReducer(booklistReducer , initialBooks);
    const nextId = useRef(9);

    return (
        <BookStateContext.Provider value={state}>
            <BookDispatchContext.Provider value={dispatch}>
                <BookNextIdContext.Provider value={nextId}>
                    {children}
                </BookNextIdContext.Provider>
            </BookDispatchContext.Provider>
        </BookStateContext.Provider>
    )
}
export function useBookState() {
    return useContext(BookStateContext);
}
export function useBookDispatch() {
    return useContext(BookDispatchContext);
}
export function useBookNextId() {
    return useContext(BookNextIdContext);
}
