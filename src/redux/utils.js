export const notDublicateCard = (cartCards) => (payload) => {

    const reqObj = cartCards.find(_card => _card.id === payload.id)

    return reqObj
        ? cartCards.map(_card => _card.id === reqObj.id
            ? { ...reqObj, taken: reqObj.taken + 1 }
            : { ..._card }
        )
        : [...cartCards, { ...payload }]
}