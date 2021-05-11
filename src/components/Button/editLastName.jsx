import React, {useState} from "react";
import {Button, Input, Modal} from "antd";
export default function EditLastName() {
    const [isVisible, setIsVisible] = useState(false)
    const [inputLastName, setInputLastName] = useState('')
    const handleOk = () => {
        console.log(inputLastName)
        setIsVisible(false);
    };
    return (
        <section>
            <Button type={"link"} size={'large'} onClick={() => {setIsVisible(true)}}>
                Edit Lastname
            </Button>
            <Modal onOk={handleOk} title="Enter Surname" visible={isVisible} onCancel={() => setIsVisible(false)}>
                <Input placeholder={'Enter Lastname'}
                       onChange={(e) => setInputLastName(e.target.value)}
                />
            </Modal>
        </section>
    )
}
