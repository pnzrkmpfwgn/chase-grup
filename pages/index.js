import Head from "next/head";
import Image from "next/image";
import {useState} from 'react'
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data,setData] = useState("Home Page!")
  return <div> {data} </div>;
}
