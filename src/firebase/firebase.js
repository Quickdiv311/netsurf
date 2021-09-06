import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAK_SdSf2FW6AVn1gHc-Gt9ughktIntUCU",
    authDomain: "netsurf-fa8e0.firebaseapp.com",
    projectId: "netsurf-fa8e0",
    storageBucket: "netsurf-fa8e0.appspot.com",
    messagingSenderId: "933981163836",
    appId: "1:933981163836:web:ab2373d2bc7199f20fce39"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfile = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnap = await userRef.get();

    if(!userSnap.exists)
    {
        const {email,displayName} = userAuth;   
        const createdAt = new Date();

       try{
        userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
       }catch(error)
       {
           console.log(error);
       }
    }

    return userRef;
}

export const uploadCollectionsData = async (collectionName, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionName);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    })

    await batch.commit();
}

export const downloadCollectionsData = (collection) => {
    const newCollection = collection.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items            
        }
    })

    return newCollection.reduce((a,collection) => {
        a[collection.title.toLowerCase()] = collection;
        return a;
    },{});
} 


export default firebase;