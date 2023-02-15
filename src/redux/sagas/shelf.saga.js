import axios from "axios";
import { put } from "redux-saga/effects";

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

export default setShelfList;