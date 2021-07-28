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
import { UserContext } from "../../store/UserContextProvider";
import { useContext } from "react";

const ProductList = () => {
  const [data, setData] = useState(productData);
  const [loading, setLoading] = useState(false);
  const userData = useContext(UserContext);
  console.log(userData);
  const [page, setPage] = useState({
    page: 1,
    total: 100,
    limit: 20,
  });

  const changePage = (e, p) => {
    setLoading(true);
    Api.getPages(p)
      .then((resp) => {
        setPage({
          ...page,
          page: p,
        });
        setData(resp);
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
        setData(resp);
        localStorage.setItem("isLoggedIn", userData.data.isLoggedIn);
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <MainContent>
      <Image />
      <Container maxWidth="lg">
        <Grid container md>
          <Grid item xs={4} md={4} sm={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={8} md={8} sm={12} mt={5} component="Box">
            <Grid container>
              <Label
                total={page.total}
                limit={page.limit}
                onChange={changePage}
              />
              <Loader isLoading={loading}>
                {data.map((el) => (
                  <Grid item xs={4} lg={4} md={6} sm={6} mb={5}>
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
