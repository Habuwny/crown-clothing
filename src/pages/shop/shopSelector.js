import {createSelector}  from "reselect";




const getShop = state => state.shop;


export const selectCollections = createSelector(
    [getShop],
    shop => shop.collections
);

export const selectColectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);


export const selectCollection = collectionUrlParam => createSelector(
   [selectCollections],
   collections => (collections ? collections[collectionUrlParam] : null)
);