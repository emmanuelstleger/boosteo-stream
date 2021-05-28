// @flow
import React from "react";
import clsx from "clsx";
import config from "config";

import useStyles from "./styles";

import Button from "components/Button";
import VonageLogo from "components/VonageLogo";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function IndexPage() {
  const mStyles = useStyles();
  const { push } = useHistory();

  return (
    <React.Fragment>
      <div className={mStyles.container}>
        <VonageLogo
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            zIndex: 2,
          }}
        />
        <br />
        <h1>Bienvenue sur Boosteo Online !</h1>
        <p>
          Choisissez votre rôle en cliquant sur les boutons ci-dessous.
        </p>
        <br />
        <Button
          text="Participant"
          onClick={() => {
            push("/participant");
          }}
        />
        <Button
          text="Moderateur"
          onClick={() => {
            push("/moderator");
          }}
        />
        <Button
          text="Présentateur"
          onClick={() => {
            push("/presenter");
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default IndexPage;
