import { Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AxiosGetWithParams from '../../infrastructure/api/AxiosGetWithParams';
import { Product } from '../../types/Product';

function EditProduct(): JSX.Element {
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState(0);
  const [ratting, setRatting] = useState('');

  async function getWithParams(id: number): Promise<void> {
    const axiosGetWithParams = new AxiosGetWithParams();
    const response = await axiosGetWithParams.getWithParams(id);
    const prod: Product = { ...response.body.data.data };

    setModel(prod.model);
    setDescription(prod.description);
    setImg(prod.img);
    setPrice(prod.price);
    setRatting(prod.ratting);
  }

  useEffect(() => {
    getWithParams(539);
  }, []);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="model"
            label="Number"
            value={model}
            type="text"
            onChange={(event) => {
              setModel(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            label="Description"
            type="text"
            multiline
            rows={2}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="img"
            label="Link to Image"
            value={img}
            onChange={(event) => {
              setImg(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="price"
            label="Price"
            value={price}
            onChange={(event) => {
              setPrice(+event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ratting"
            label="Rating"
            value={ratting}
            onChange={(event) => {
              setRatting(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditProduct;
