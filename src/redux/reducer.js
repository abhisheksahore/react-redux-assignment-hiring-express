
const reducer = (state = {list:[], count: 0}, action) => {
    switch(action.type) {
        case "CREATE":
            return {...state, list: [...state.list, action.payload], count: state.count + 1}
        case "DELETE":
            const afterDeleting = state.list.filter(e => e.id !== action.payload);
            return {...state, list: afterDeleting}
        case "UPDATE": 
            const updatedList = state.list.map(e => {
                if (e.id === action.payload.id) {
                    e.item = action.payload.item;
                }
                return e
            })
            return {...state, list: updatedList}
        default: 
            return state
    }
}


export default reducer