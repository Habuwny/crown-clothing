import {Types} from "./Types";


const addItem = (item) => (
    {
        type: Types.ADD_ITEM,
        payload: item
    }
);

export default addItem;