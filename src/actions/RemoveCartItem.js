import {Types} from "./Types";

const RemoveCartItem = item => ({
    type: Types.REMOVE_CART_ITEM,
    payload: item
});
export default RemoveCartItem;