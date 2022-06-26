import React from 'react';
import "./styles.css";


interface BoxProps{
    background: string;
    children: JSX.Element|JSX.Element[];
};

export default function Box(props: BoxProps) {
    return ( <section className={`box ${props.background}`}>{props.children}</section>); 
}
