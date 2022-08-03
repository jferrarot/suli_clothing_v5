/**
 * ! deprecated products context was used before fetching from db, data was stored in a plain file.
 * * addCollectionAndDocuments was used only once to write data in db (firebase)
 */

import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.jsx';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_DATA);

    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);

    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
