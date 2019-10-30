import {useState} from 'react'

export default function useLocalStorage(key){
    const [storedValue, setStoredValue] = useState(()=>{
        // if(window.localStorage.getItem(key)){
        //     return JSON.parse(window.localStorage.getItem(key))
        // }
        // return(
        //     initialValue
        // )
//below is a better way of doing it:

            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : false;

        
    });

    function setValue(value){

        //In the directions this step came before setting the stored value
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value)
    }

    return [storedValue, setValue]
    
}