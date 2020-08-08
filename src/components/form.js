/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
// import { Input } from 'antd';
import CustomInput from "./utils/customInput";
import { Space } from 'antd';
import { useDispatch } from 'react-redux'

function Form() {

    const [replacementIncome, setReplacementIncome] = useState(0);
    const [outOfPocketHealthcare, setOutOfPocketHealthcare] = useState(0);
    const [homeModificationExpense, setHomeModificationExpense] = useState(0);
    const [medicalHomecareExpense, setMedicalHomecareExpense] = useState(0);
    const [otherExpenses, setOtherExpenses] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        calculateExpensesSum(parseInt(replacementIncome), parseInt(outOfPocketHealthcare), parseInt(homeModificationExpense), parseInt(medicalHomecareExpense), parseInt(otherExpenses));
        
        calculateExpensesMinusOtherExpenses(parseInt(replacementIncome), parseInt(outOfPocketHealthcare), parseInt(homeModificationExpense), parseInt(medicalHomecareExpense), parseInt(otherExpenses));
    }, [replacementIncome, outOfPocketHealthcare, homeModificationExpense, medicalHomecareExpense, otherExpenses])

    const calculateExpensesSum = (replacementIncome, outOfPocketHealthcare, homeModificationExpense, medicalHomecareExpense, otherExpenses) => {
        let sum = replacementIncome + outOfPocketHealthcare + homeModificationExpense + medicalHomecareExpense + otherExpenses
        dispatch({type: 'SET_ALL_EXPENSES_SUM', all_expenses_sum: sum})
    }
    
    const calculateExpensesMinusOtherExpenses = (replacementIncome, outOfPocketHealthcare, homeModificationExpense, medicalHomecareExpense, otherExpenses) => {
        let value = replacementIncome + outOfPocketHealthcare + homeModificationExpense + medicalHomecareExpense - otherExpenses
        dispatch({type: 'SET_EXPENSES_MINUS_OTHER_EXPENSES', expenses_minus_other_expenses: value})
    }

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