import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemDivider, IonItem, IonInput, IonLabel } from '@ionic/react';
import './Contact.css';

const Auth: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>

          <IonItem>
            <IonInput value={text} placeholder="Username" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItem>
            <IonInput value={text} placeholder="Email" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItem>
            <IonInput value={text} placeholder="Password" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItem>
            <IonInput value={text} placeholder="Repeat Password" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>
        </IonList>

        
      </IonContent>
    </IonPage>
  );
};

export default Auth;
