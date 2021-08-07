import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import AxiosGetRequest from '../../infrastructure/api/AxiosGetRequest';
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';

function Products(): JSX.Element {
  const [products, setProducts] = React.useState([]);

  async function listProducts(): Promise<void> {
    const axiosGetRequest = new AxiosGetRequest();
    const resultGetRequest = await axiosGetRequest.getRequest();
    setProducts(resultGetRequest.body.data);
  }

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product: Product) => {
        return (
          <Grid item xs={4}>
            <ProductCard
              id={product.id}
              description={product.description}
              model={product.model}
              idNotebook={product.idNotebook}
              img={product.img}
              linkDetails={product.linkDetails}
              price={product.price}
              ratting={product.ratting}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Products;
