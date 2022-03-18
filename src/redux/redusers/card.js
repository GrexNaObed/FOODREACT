import { DESSERT, HOTDISHES, COLDDISHES, SOUP, GRILL, APPETIZER, } from "components/pages/home/sortList";
import { card1, card2, card3, card4, card5, card6, card7, card8 } from "img/export";
import { ADDCARD, ADDTOCART, DELETEFROMCART, GETCARDS } from "redux/actions/cards";
import { notDublicateCard } from "redux/utils";


const defState = {
    cards: [
        { id: 0, img: card1, title: 'Spicy seasoned seafood noodles', price: 500.49, count: 1, taken: 1, type: HOTDISHES },
        { id: 1, img: card2, title: 'Salted Pasta with mushroom sauce', price: 3.52, count: 17, taken: 1, type: HOTDISHES },
        { id: 2, img: card3, title: 'Beef dumpling in hot and sour soup', price: 3.01, count: 14, taken: 1, type: COLDDISHES },
        { id: 3, img: card4, title: 'Healthy noodle with spinach leaf', price: 3.21, count: 11, taken: 1, type: SOUP },
        { id: 4, img: card5, title: 'Hot spicy fried rice with omelet', price: 2.49, count: 8, taken: 1, type: SOUP },
        { id: 5, img: card6, title: 'Spicy instant noodle with special omelette', price: 3.49, taken: 1, count: 5, type: GRILL },
        { id: 6, img: card7, title: 'Healthy noodle with spinach leaf', price: 3.49, count: 2, taken: 1, type: APPETIZER },
        { id: 7, img: card8, title: 'Hot spicy fried rice with omelet', price: 3.49, count: 1, taken: 1, type: DESSERT },
        { id: 8, img: card1, title: 'Hot spicy fried rice with omelet', price: 3.49, count: 1, taken: 1, type: DESSERT },
        { id: 9, img: card2, title: 'Hot spicy fried rice with omelet', price: 3.49, count: 1, taken: 1, type: DESSERT },
        { id: 10, img: card3, title: 'Hot spicy fried rice with omelet', price: 3.49, count: 1, taken: 1, type: SOUP },
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
                cartCards: notDublicateCard(state.cartCards)(payload)
            }
        case DELETEFROMCART:
            return {
                ...state,
                cartCards: state.cartCards.filter(_card => _card.id !== payload.id)
            }
        default:
            return state
    }
}