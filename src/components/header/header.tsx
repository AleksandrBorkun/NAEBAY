import React from 'react';

function MyAwesomeButton(){
    return<button onClick= {()=> {console.log("button MyAwesomeButton clicked")}}>MyAwesomeButton</button>
  }


export default function Header(){
    return <>
        <MyAwesomeButton/>
        <MyAwesomeButton/>
        <MyAwesomeButton/>
        <MyAwesomeButton/>
    </>
}