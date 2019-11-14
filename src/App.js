import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Ranking from './containers/Ranking';
import CustomizedMenus from './containers/CustomizedMenus';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <CssBaseline />

        <AppBar>
          <Toolbar>
            <Typography type="title" color="inherit" style={{ marginRight: 15 }}>
              シフト管理アプリ
            </Typography>
            <div style={{ float: 'right', display: 'inline-block', width: 1000 }}>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                style={{ marginRight: 15 }}
              >
                シフト
              </Button>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                style={{ marginRight: 15 }}
              >
                シフト提出
              </Button>
              <CustomizedMenus style={{ marginRight: 15 }} />
            </div>
          </Toolbar>
        </AppBar>

        <div style={{ marginTop: 64, padding: 32 }}>
          <BrowserRouter>
            <Switch>
              <Route path="/all" component={Ranking} />
              <Route
                path="/category/1"
                render={() => <Redirect to="/all" />}
              />
              <Route
                path="/category/:id"
                render={
                  ({ match }) => <Ranking categoryId={match.params.id} />
                }
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div >
    );
  }
}

export default App;
