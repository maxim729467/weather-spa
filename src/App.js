import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Container from "Components/Container";
import NavBar from "Components/NavBar";
import DefaultWidget from "Components/DefaultWidget";
import Form from "Components/Form";
import LocationsList from "Components/LocationsList";
import Wrapper from "Components/Wrapper";

function App() {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Wrapper>
            <DefaultWidget />
          </Wrapper>
        </Route>
        <Route exact path="/cities">
          <Wrapper>
            <Form />
            <LocationsList />
          </Wrapper>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
