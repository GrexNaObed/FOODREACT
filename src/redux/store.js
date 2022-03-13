import { combineReducers, createStore } from "redux";
import { cardReduser } from "./redusers/card";


const rootReduser = combineReducers({
    cards: cardReduser
})

export const store = createStore(rootReduser)