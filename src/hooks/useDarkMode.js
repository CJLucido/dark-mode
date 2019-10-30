import {useState, useEffect} from 'react'
import useLocalStorage from "./useLocalStorage"


export default function useDarkMode(){
    const[storedValues, setValues] = useLocalStorage('theUpsideDown')


    return (
        null
    )
}

