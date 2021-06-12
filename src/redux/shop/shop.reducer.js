// import ShopData from './shopdata';

const initState = {
    collections: null
}
const shopReducer = (state = initState, action) => {
    switch(action.type)
    {
        case "UpdateCollection":
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;