export const TODAY = 'TODAY'
export const YESTERDAY = 'YESTERDAY'
export const LASTWEEK = 'LASTWEEK'
export const LASTMONTH = 'LASTMONTH'

export const dropDownItems = {
    [TODAY]: { type: 'Today', cards: [] },
    [YESTERDAY]: { type: 'Yesterday', cards: [] },
    [LASTWEEK]: { type: 'Last week', cards: [] },
    [LASTMONTH]: { type: 'Last month', cards: [] },
}


class DropDownItems {
    constructor(items) {
        return items.map((item, index) => ({ id: index, title: item }))
    }
}

export const _dropDownItems = new DropDownItems(Object.keys(dropDownItems))