import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AxiosGetRequest from '../../infrastructure/api/AxiosGetRequest';
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';

function Products(): JSX.Element {
  const [products, setProducts] = React.useState([]);
  const history = useHistory();

  async function listProducts(): Promise<void> {
    const axiosGetRequest = new AxiosGetRequest();
    const resultGetRequest = await axiosGetRequest.getRequest();
    if (resultGetRequest.body === 401) {
      history.push('/login');
    } else {
      setProducts(resultGetRequest.body.data.data);
    }
  }

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <div>
      <h1>Notebooks</h1>
      <Grid container spacing={2}>
        {products.map((product: Product) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
    </div>
  );
}

export default Products;
