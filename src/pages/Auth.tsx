import React, { useState, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButton, IonLoading } from '@ionic/react';
import './Contact.css';
import { Redirect, useHistory } from "react-router-dom";

import { AppContext } from '../state';

const Auth: React.FC = () => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const { state, dispatch } = useContext(AppContext);
  const [showLoading, setShowLoading] = useState(false);
  let history = useHistory();



  async function logIn(event) {
    event.preventDefault();

    dispatch({
      type: 'setEmail',
      email: email
    });

    dispatch({
      type: 'setUsername',
      username: username
    });

    console.log(state);

    setShowLoading(true);
    
    setTimeout(() => {
      history.push('/games');
    }, 1000);

  }// end_logIn

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLoading isOpen={showLoading} message={"Logging In..."} duration={1000}/>
        <form onSubmit={logIn}>
          <IonList>
            <IonItem>
              <IonInput value={username} placeholder="Username" onIonChange={e => setUsername(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
            <IonButton color="primary" type="submit">Register</IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
