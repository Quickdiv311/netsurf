import { firestore, downloadCollectionsData } from "../../firebase/firebase";

export const updateCollectionStart = () => ({
    type: 'UpdateCollectionStart',
}) 

export const updateCollectionSuccess = collection => ({
    type: 'UpdateCollectionSuccess',
    payload: collection
})

export const updateCollectionError = error => ({
    type: 'UpdateCollectionError',
    payload: error
})

export const updateCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(updateCollectionStart());

        collectionRef.get().then(snapshot => {
            const collectionsObject = downloadCollectionsData(snapshot);
            dispatch(updateCollectionSuccess(collectionsObject))
        }).catch(error => dispatch(updateCollectionError(error)))
    }
}
