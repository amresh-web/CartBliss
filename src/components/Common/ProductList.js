import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';

const ProductList = () => {
    const {categorySlug} = useParams();

    useEffect(() => {

    },[categorySlug])
    return(<>
     <h1>Products in {categorySlug} category</h1>
    </>)
}

export default ProductList;