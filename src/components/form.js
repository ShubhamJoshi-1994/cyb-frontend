import React from 'react';
// import { Input } from 'antd';
import CustomInput from "./utils/customInput";

function Form() {

    return (
        <>
            <CustomInput
                label='Desired Replacement Income (after-tax)'
            />

            <CustomInput
                label='Out-of-pocket healthcare expenses'
            />

            <CustomInput
                label='Home modification expenses'
            />

            <CustomInput
                label='Medical homecare expenses'
            />

            <CustomInput
                label='Other expenses (transport, childcare, etc)'
            />
        </>
    )
}

export default Form;