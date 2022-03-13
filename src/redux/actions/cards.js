export const GETCARDS = 'GETCARDS'

export const ADDTOCART = 'ADDTOCART'
export const DELETEFROMCART = 'DELETEFROMCART'

export const ADDCARD = 'ADDCARD'
export const DELETECARD = 'DELETECARD'

export const getCards = (payload) => ({ type: GETCARDS, payload })

export const addToCart = (payload) => ({ type: ADDTOCART, payload })
export const deleteFromCart = (payload) => ({ type: DELETEFROMCART, payload })

export const addCard = (payload) => ({ type: ADDCARD, payload })
export const deleteCard = (payload) => ({ type: DELETECARD, payload })