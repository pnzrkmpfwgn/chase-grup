import Image from 'next/image';
import useSWR from 'swr';
import {useEffect,useState} from 'react';
export default function Deneme(){
    const [data,setData] = useState([]);
    const [info, setInfo]  = useState([]);
    useEffect(async()=>{
        let arr1=[]
        let arr2=[]
        arr1 = await fetch("http://localhost:1337/getcoin/logos").then(res => res.json()).then(data => data)
        arr2 = await fetch("http://localhost:1337/getcoin").then(res => res.json()).then(data=> data)
        setData(arr1)
        setInfo(arr2)
    },[])
    console.log(info)
    console.log(data)
    return info.map(i => <div>Fucking piece of shit {i.id} </div>)
    
}