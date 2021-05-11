import React from "react";
import './buttons.css'
import {Button, Switch} from "antd";
import EditLastName from "./editLastName";
import BabyNameGenerator from "../../services/BabyNameGenerator";
export default function Buttons(){

    const handleBabyNameChange = () => {
        const newName = BabyNameGenerator(true, null)
        console.log(newName)
    }
    return (
        <section className={'buttonsContainer'}>
            <section className={'top'}>
                <Button shape={'round'} style={{borderColor: 'red', color:'red'}}>
                    Add to Favorites
                </Button>
            </section>
            <section className={'bottom'}>
                <Button size={'large'} onClick={handleBabyNameChange}>
                    New Name
                </Button>
                <Switch defaultChecked checkedChildren={'Boy'} unCheckedChildren={'Girl'}/>
                <EditLastName/>
            </section>
        </section>
    )
}
