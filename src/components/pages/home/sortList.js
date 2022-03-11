import { card1, card2, card3, card4, card5, card6, card7, card8 } from "img/export"

export const ALL = 'ALL'
export const HOTDISHES = 'HOTDISHES'
export const COLDDISHES = 'COLDDISHES'
export const SOUP = 'SOUP'
export const GRILL = 'GRILL'
export const APPETIZER = 'APPETIZER'
export const DESSERT = 'DESSERT'


export const sortListItems = {
    [HOTDISHES]: { title: 'Hot Dishes' },
    [COLDDISHES]: { title: 'Cold Dishes', },
    [SOUP]: { title: 'Soup', },
    [GRILL]: { title: 'Grill', },
    [APPETIZER]: { title: 'Appetizer', },
    [DESSERT]: { title: 'Dessert', },
    [ALL]: { title: 'All' },
}

class SortListItems {
    constructor(items) {
        return items.map((item, index) => ({ id: index, title: item }))
    }
}

export const _sortListItems = new SortListItems(Object.keys(sortListItems))