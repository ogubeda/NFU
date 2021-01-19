import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GamesList from '../components/games/games-list';
import './Games.css';

const Games: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Games</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GamesList/>
      </IonContent>
    </IonPage>
  );
};

export default Games;
