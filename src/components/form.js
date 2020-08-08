import React, {useState} from 'react';
// import { Input } from 'antd';
import CustomInput from "./utils/customInput";
import { Space } from 'antd';

function Form() {

    const [replacementIncome, setReplacementIncome] = useState('');
    const [outOfPocketHealthcare, setOutOfPocketHealthcare] = useState('');
    const [homeModificationExpense, setHomeModificationExpense] = useState('');
    const [medicalHomecareExpense, setMedicalHomecareExpense] = useState('');
    const [otherExpenses, setOtherExpenses] = useState('');

    return (
        <Space
            direction="vertical"
            size="large"
            className="expenses-wrapper"
        >
            <CustomInput
                label='Desired Replacement Income (after-tax)'
                suffix="/month"
                bindedValue={replacementIncome}
                onChangeCallback={(e) => setReplacementIncome(e.target.value)}
            />

            <CustomInput
                label='Out-of-pocket healthcare expenses'
                bindedValue={outOfPocketHealthcare}
                onChangeCallback={(e) => setOutOfPocketHealthcare(e.target.value)}
            />

            <CustomInput
                label='Home modification expenses'
                bindedValue={homeModificationExpense}
                onChangeCallback={(e) => setHomeModificationExpense(e.target.value)}
            />

            <CustomInput
                label='Medical homecare expenses'
                suffix="/month"
                bindedValue={medicalHomecareExpense}
                onChangeCallback={(e) => setMedicalHomecareExpense(e.target.value)}
            />

            <CustomInput
                label='Other expenses (transport, childcare, etc)'
                suffix="/month"
                bindedValue={otherExpenses}
                onChangeCallback={(e) => setOtherExpenses(e.target.value)}
            />
        </Space>
    )
}

export default Form;