const shelf = (state = [], action) => {
    switch (action.type) {
        case "SET_SHELF":
            console.log("in the shelf reducer");
            return action.payload;
        default:
            return state;
    }
};



const postShelf = (state = [], action) => {
    switch(action.type) {
        case "ADD_SHELF": 
        console.log("In Post Shelf reducer");
        return action.payload;
        default: 
        return state;
    }
}
export default shelf;