import React, {createContext, useReducer} from 'react'
import Reducer from './reducer'

// Create our inital global state for the application.
const initialState = {
    last3Input: '',
    modalInputValue:'',
    showDialog:false

}

/**
 * Create our Store component to be wrapped around the main application.
 */
const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default Store