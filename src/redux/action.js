export const createItem = (item) => {
    return {
        type: "CREATE",
        payload: item
    }
}

export const updateItem = (item) => {
    return {
        type: "UPDATE",
        payload: item
    }
}

export const deleteItem = (item) => {
    return {
        type: "DELETE",
        payload: item
    }
}