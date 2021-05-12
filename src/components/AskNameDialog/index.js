// @flow
import React from "react";
import User from "entities/user";

import TextInput from "components/TextInput";

type Props = {
  pin:string,
  onSubmit:Function,
  role:string
}

function AskNameDialog({ role, pin, onSubmit }:Props){
  const [ text, setText ] = React.useState<string>("");
  const [ inputPin, setInputPin ] = React.useState<string>("");

  const styles = {
    container: {
      width: "100%", height: "100%", display: "flex",
      alignItems: "center", justifyContent: "center"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) alert("Merci de saisir votre prénom")
    else if(onSubmit && inputPin === pin) {
      const user = new User(text, role);
      onSubmit(user);
    }else if(inputPin !== pin) alert("Mauvais PIN");
  }

  return (
    <form style={styles.container}>
      <div className="Vlt-card Vlt-bg-white" style={{ maxWidth: 500 }}>
        <div className="Vlt-card__header">
          <h3>Entrez votre prénom et le code PIN</h3>
        </div>
        <div className="Vlt-card__content">
          <TextInput text={text} onChange={setText} placeholder="Merci d'écrire votre prénom"/>
          <TextInput type="password" text={inputPin} onChange={setInputPin} placeholder="PIN"/>
        </div>
        <div className="Vlt-card__footer Vlt-card__footer--noborder">
          <button type="submit" className="Vlt-btn Vlt-btn--primary Vlt-btn--app" onClick={handleSubmit}>Rejoindre</button>
        </div>
      </div>
    </form>
  )
}
export default AskNameDialog;