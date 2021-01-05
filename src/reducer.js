const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_last_3Num_INPUT':
            return {
                ...state,
                last3Input: action.value
            }
        case 'SET_DIALOG':
            return {
                ...state,
                showDialog: action.value
            }
        case 'SET_all_Num_INPUT':
            return {
                ...state,
                modalInputValue: action.value
            }
        default:
            return state
    }
}

export default Reducer