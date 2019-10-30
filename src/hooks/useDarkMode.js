import {useEffect} from 'react'
import useLocalStorage from "./useLocalStorage"



export default function useDarkMode(){
    const[storedValues, setValues] = useLocalStorage('theUpsideDown')


    useEffect(()=> {
        storedValues === true ? body.className.add('dark-mode') : body.className.remove('dark-mode');
    }, [darkMode])

    return [storedValues, setValues]
}

