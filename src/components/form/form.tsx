import React, { Component, useState } from 'react';
import { IonContent, IonPage, IonText, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";


class Form extends Component {


  
  render() {
    const [text, setText] = useState<string>();

    return (
      <header>
        <IonPage>
      <IonContent className="ion-padding">
        <IonText>
          <h2>Create Account</h2>
        </IonText>
        <form>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>

          </IonItem>
          <IonButton expand="block" type="submit" className="ion-margin-top">
            Register
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
      </header>
    );
  }
}


export default Form;