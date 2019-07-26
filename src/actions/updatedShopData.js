import {Types} from "./Types";


const UdatedShopData = (collections) => (
    {
        type: Types.UPDATED_SHOP_DATA,
        payload: collections
    }
);

export default UdatedShopData;