import { HOTDISHES } from "components/pages/home/sortList";
import { card1 } from "img/export";
import { ADDCARD, ADDTOCART, DELETEFROMCART, GETCARDS } from "redux/actions/cards";


const defState = {
    cards: [
        { id: 0, img: card1, title: 'Spicy seasoned seafood noodles', price: 500.49, count: 1, type: HOTDISHES },
    ],
    cartCards: []
}

export const cardReduser = (state = defState, { type, payload }) => {
    switch (type) {
        case GETCARDS:
            return {
                ...state,
                cards: [...state.cards, ...payload ?? []]
            }
        case ADDCARD:
            return {
                ...state,
                cards: [...state.cards, payload.title ?? {}]
            }
        case ADDTOCART:
            return {
                ...state,
                cartCards: [...state.cartCards, payload ?? {}]
            }
        case DELETEFROMCART:
            return {
                ...state,
                cartCards: [...state.cartCards]
                    .filter(card => card.id != payload.id)
            }
        default:
            return state
    }
}