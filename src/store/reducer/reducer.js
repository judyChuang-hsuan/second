const initialState={
    user:"",
    token:""
}

const reducer=(state=initialState,action={})=>{
    switch(action.type){
        case "LOGIN":
            return {...state};
        case "LOGOUG":
            return {...state};

        default:
            return {...state}
            

    }
}

export default reducer;