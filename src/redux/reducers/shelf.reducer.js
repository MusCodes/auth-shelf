const shelf = (state = [], action) => {
    switch (action.type) {
        case "SET_SHELF":
            console.log("in the shelf reducer");
            return action.payload;
        default:
            return state;
    }
};

export default shelf;