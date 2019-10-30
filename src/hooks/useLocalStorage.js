import {useState} from 'react'

export default function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(()=>{
        if(window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key))
        }
        return(
            initialValue
        )
    })

    return (
        null
    )
    
}