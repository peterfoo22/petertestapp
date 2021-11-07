import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import React, {useState} from 'react';
import ProductList from '../components/ProductList.js';



function index () {

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  function handleProductSelection(payload){
    setIsOpen(false);
    setProducts(payload.selection)

  }

  return (
    <Page
     title = "Product Selector"
     primaryAction = {{
      content: "Select Product",
      onAction: () => setIsOpen(true)
     }}
    >

    <ResourcePicker
      onCancel = {() => setIsOpen(false) }
      onSelection = {handleProductSelection}
      resourceType="Product"
      open = {isOpen} />

    <ProductList products = {products} />


    </Page>

  );
}

export default index;
