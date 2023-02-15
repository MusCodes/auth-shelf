import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* setShelfList(action) {
    try {
        console.log('in shelf list saga');

        const shelf = yield axios.get("/api/shelf");
        yield put({
            type: "SET_SHELF",
            payload: shelf.data
        });
    } catch (err) {
        console.log("error in shelf saga", err)
    }
}

function* addItemToShelf(action) {
    try {
        console.log('In AddItemToShelf');
        yield axios.post('/api/shelf/', action.payload);
        yield put({
            type: 'ADD_SHELF'
        });
    } catch (err) {
        console.log('error in add item', err);
    }
}

function* fetchShelf() {
    yield takeLatest("ADD_SHELF", setShelfList);
    yield takeLatest("ADD_ITEM", addItemToShelf);
}

export default fetchShelf;
