import React from 'react';
import styles from './header.module.css'

function MyAwesomeButton(){
    return (
        <button className = {styles.myAwesomeButton} onClick= {()=> {console.log("button MyAwesomeButton clicked")}}>MyAwesomeButton</button>
    );
}


export default function Header(){
    return <>
        <MyAwesomeButton/>
        <MyAwesomeButton/>
        <MyAwesomeButton/>
        <MyAwesomeButton/>
    </>
}