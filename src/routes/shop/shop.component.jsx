// // import SHOP_DATA from '../../shop-data.json'

// import { Fragment, useContext } from 'react';
// // import { ProductsContext } from "../../contexts/products.context";
// import { CategoriesContext } from '../../contexts/categories.context';

// // import ProductCard from '../../components/product-card/product-card.component';
// import CategoryPreview from '../../components/category-preview/category-preview.component';

// import './shop.styles.scss';

// const Shop = () => {
//     // const { products } = useContext(CategoriesContext);
//     const { categoriesMap } = useContext(CategoriesContext);
//     return (
//         // <Fragment>
//         //     {Object.keys(categoriesMap).map((title) => (
//         //         <Fragment key={title}>
//         //             <h2>{title}</h2>
//         //             <div className="products-container">
//         //                 {categoriesMap[title].map((product) => (
//         //                     <ProductCard key={product.id} product={product} />
//         //                 ))}
//         //             </div>
//         //         </Fragment>
//         //     ))}
//         // </Fragment>
//         <div className="shop-container">
//             {Object.keys(categoriesMap).map((title) => {
//                 const products = categoriesMap[title];
//                 return (
//                     <CategoryPreview
//                         key={title}
//                         title={title}
//                         products={products}
//                     />
//                 );
//             })}
//         </div>
//     );
//     // return (
//     //     <div className="products-container">
//     //         {products.map((product) => (
//     //             <ProductCard key={product.id} product={product}></ProductCard>
//     //         ))}
//     //     </div>
//     // );
// };

// export default Shop;

import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
