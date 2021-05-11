import React from "react";
import './names.css'
export default function Names(props){
    const {firstName, lastName} = props
    return (
        <section className={'namesContainer'}>
            <section className={'firstName'}>{props.firstName}</section>
            <section className={'lastName'}>{props.lastName}</section>
        </section>
    )
}
