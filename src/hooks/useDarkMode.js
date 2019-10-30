import {useEffect} from 'react'
import useLocalStorage from "./useLocalStorage"



export default function useDarkMode(key, darkMode){
    const[storedValues, setValues] = useLocalStorage('theUpsideDown')


    useEffect(()=> {
        storedValues === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [setValues]);


    return [storedValues, setValues]
}

