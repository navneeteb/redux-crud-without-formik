// action and its state will be defined here the reducer will invoke when we invoke the dispatch()
 const userReducer = (state, action) => {
 var list=JSON.parse(localStorage.getItem('token'))

    switch (action.type) {
        case "INSERT":
            list.push(action.payload)
            localStorage.setItem('token', JSON.stringify(list))
            return { list, currentIndex: -1 }
    
        case "UPDATE":
            list[state.currentIndex]=action.payload
            localStorage.setItem('token', JSON.stringify(list))
            return { list, currentIndex: -1 }
        
        case "DELETE":
            list.splice(action.payload,1)
            localStorage.setItem('token', JSON.stringify(list))
            return { list, currentIndex: -1 }
                
        case "UPDATE-INDEX":
            return { list, currentIndex: action.payload }
        default:
            return state
    }
}

export default userReducer