

import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';





import Zalo from '../../components/Zalo'
import ProductSort from '../../components/ProductSort'
import ProductPage from '../../components/ProductPage';
import ProductNavigation from '../../components/ProductNavigation';
import ProductRight from '../../components/ProductRight';
import {getProducts} from '../../redux/actions/productAction';
function Jordan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleToProductDetail = (id) => {
  navigate(`/product/${id}`);
};
const listPr = useSelector((state) => state.getProducts);
  const { products } = listPr;
  
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
      <div>
    <ProductSort />
         <ProductPage jordan />
        <div className="main-product">
          <div className="main-product__left">
            <ProductNavigation jordan discount  />
          </div>
            <ProductRight handleToProductDetail={handleToProductDetail} products={products.filter(item => item.trademark ==="JORDAN")}/>
        </div>
    </div>
    <Zalo />
    </>
  )
}

export default Jordan