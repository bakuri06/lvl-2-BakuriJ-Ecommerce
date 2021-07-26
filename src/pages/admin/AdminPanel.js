import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import AdminLayout from './../../layout/layouts/AdminLayout';
import AdminSidebar from './../../components/AdminSidebar';

const AdminPanel = () => (
  <AdminLayout>
    <Grid container md>
      <Container>
        <AdminSidebar />
      </Container>
    </Grid>
  </AdminLayout>
);

export default AdminPanel;
