import {useEffect, useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function useContent(target){
    const [content, setContent] = useState([]);
    const {firebase} = useContext(FrebaseContext)


    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const allContent = snapshot.doc.map(contentObj => (
                    {
                        ...contentObj.data(),
                        docId = contentObj.id
                    }
                ))
            })
        return () => {
            
        };
    }, []);
}