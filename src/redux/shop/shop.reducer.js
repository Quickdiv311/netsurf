// import ShopData from './shopdata';

const initState = {
    collections: null,
    isFetching: false,
    errorMes: null
}
const shopReducer = (state = initState, action) => {
    switch(action.type)
    {
        case 'UpdateCollectionStart':
            return{
                ...state,
                isFetching: true
            }

        case "UpdateCollectionSuccess":
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case "UpdateCollectionError":
            return {
                ...state,
                isFetching: false,
                errorMes: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;