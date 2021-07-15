import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './NavTabs.css'
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { SINGLE_LIST } from '../routes';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    marginTop: '40px'
  },
  back: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: 'none'
  }
}));

export default function NavTabs({ data: { title, price, img, id, description } }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let { path, url } = useRouteMatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" classes={{ root: classes.back }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Description" href="/description" {...a11yProps(0)} to={SINGLE_LIST} />
          <LinkTab label="Information" href="/information" {...a11yProps(1)} component={Link} to={url + '/information'} />
          <LinkTab label="Reviews" href="/reviews" {...a11yProps(2)} component={Link} to={url + '/reviews'} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box class="tab-content" id="advancedTabContent">
          <Box class="tab-pane fade active show" id="description" role="tabpanel" aria-labelledby="description-tab">
            <h5 className='texth5'>{title}</h5>
            <p className="small text-muted">Shirts</p>
            <ul className="rating">
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-primary"></i>
              </li>
            </ul>
            <h6 className='texth5'>{price}</h6>
            <p>{description}</p>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
          <h5 className='texth5'>Additional Information</h5>
          <table className="table table-striped table-bordered mt-3">
            <thead>
              <tr>
                <th scope="row" className="w-150 dark-grey-text h6">Weight</th>
                <td><em>0.3 kg</em></td>
              </tr>
            </thead>
            <tbody>
              <tr className='darkrow'>
                <th scope="row" class="w-150 dark-grey-text h6">Dimensions</th>
                <td><em>50 × 60 cm</em></td>
              </tr>
            </tbody>
          </table>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
          <h5><span>1</span> review for <span>Fantasy T-shirt</span></h5>
          <Box className="media mt-3 mb-4">
            <img className="d-flex mr-3 z-depth-1" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" width="62" alt="Generic placeholder image" />
            <Box className="media-body">
              <Box component='div' display='flex' style={{ justifyContent: 'space-between' }}>
                <p style={{ marginTop: '0px', marginBottom: '0px' }}>
                  <strong>Marthasteward </strong>
                  <span>– </span><span>January 28, 2020</span>
                </p>
                <ul className="rating mb-0">
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="far fa-star fa-sm text-primary"></i>
                  </li>
                </ul>
              </Box>
              <p className="mb-0">Nice one, love it!</p>
            </Box>
          </Box>
          <h5 className="mt-4">Add a review</h5>
          <p>Your email address will not be published.</p>
          <Box className="my-3">
            <ul className="rating mb-0">
              <li>
                <a href="#!">
                  <i className="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="far fa-star fa-sm text-primary"></i>
                </a>
              </li>
            </ul>
          </Box>
          <Box>
            <TextField
              id="standard-full-width"
              label="Your review"
              style={{ margin: 8 }}
              placeholder="Your review"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Box display='flex' alignItems='center'>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <Button variant="contained" color="secondary">
                Add a review
              </Button>
            </Box>
          </Box>
        </Box>
      </TabPanel>



    </Box>
  );
}
