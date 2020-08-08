const INITIAL_STATE = {
    recovery_period: 0,
    expenses_minus_other_expenses: 0,
    all_expenses_sum: 0,
};


export default function calculatorReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_RECOVERY_PERIOD':
            return Object.assign({}, state, {
                recovery_period: action.recovery_period
            });
        case 'SET_EXPENSES_MINUS_OTHER_EXPENSES':
            return Object.assign({}, state, {
                expenses_minus_other_expenses: action.expenses_minus_other_expenses
            });
        case 'SET_ALL_EXPENSES_SUM':
            return Object.assign({}, state, {
                all_expenses_sum: action.all_expenses_sum
            });
        default:
            return state
    }
}