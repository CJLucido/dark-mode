import {useEffect} from 'react'
import useLocalStorage from "./useLocalStorage"



export default function useDarkMode(){
    const[storedValues, setValues] = useLocalStorage('theUpsideDown')


    useEffect(()=> {
        storedValues === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [storedValues]);//it needs to be watching this callback to see if it is being triggered or it can be the value itself


    return [storedValues, setValues]
}

