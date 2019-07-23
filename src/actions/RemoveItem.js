import {Types} from "./Types";

const RemoveItem = (item) => {
    return{
        type:Types.REMOVE_ITEEM,
        payload: item
    }
};

export default RemoveItem;
