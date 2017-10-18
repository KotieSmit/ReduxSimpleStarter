export function selectBook (book){
    // selectBook s an actionCretor, it needs to return an action
    // an object with a type property
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}

