import React from "react";
import MainContent from "../../layout/layouts/MainContent";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Label from "../../components/details/Label";
import { Container } from "@material-ui/core";
import Image from "../../layout/header/Image";
import productData from "../../api/data";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import Api from "../../api/Api";
import "./productList.css";
import { useDispatch } from "react-redux";
import { setProducts } from "./../../store/products/productActionCreator";
import { useSelector } from "react-redux";
import { selectProduct } from "./../../store/products/productSelector";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({
    page: 1,
    total: 100,
    limit: 20,
  });

  let dispatch = useDispatch();

  const dataProduct = useSelector(selectProduct);

  const changePage = (e, p) => {
    setLoading(true);
    Api.getPages(p)
      .then((resp) => {
        setPage({
          ...page,
          page: p,
        });
        dispatch(setProducts(resp));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    Api.getProductList()
      .then((resp) => {
        dispatch(setProducts(resp));
      })
      .catch((err) => {
        console.log("Caught it: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(productData);

  return (
    <MainContent>
      <Image />
      <Container maxWidth="lg">
        <Grid container md>
          <Grid item xs={12} sm={4} md={4} sm={4} className="empty">
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={8} sm={12} mt={5}>
            <Grid container>
              <Label
                xs={12}
                total={page.total}
                limit={page.limit}
                onChange={changePage}
              />
              <Loader isLoading={loading}>
                {dataProduct.products.map((el) => (
                  <Grid item xs={6} lg={4} md={6} sm={6} mb={5}>
                    <Card data={el} />
                  </Grid>
                ))}
              </Loader>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainContent>
  );
};

export default ProductList;
