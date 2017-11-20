export const CHANGE_SORT = 'CHANGE_SORT'
    // create action
export function changeSortSelection(selection) {
    return {
        type: CHANGE_SORT,
        payload: selection
    }
}