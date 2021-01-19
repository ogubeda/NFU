import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import users from '../data/users.json'


class EPG extends Component {

  render() {

    return (
      <header>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{users.user.username}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
          </IonContent>
        </IonPage>
      </header>
    );
  }
}


export default EPG;