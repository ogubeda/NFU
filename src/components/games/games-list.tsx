import React, { Component } from 'react';
import games from '../../data/games.json'
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/react';


class GamesList extends Component {

  render() {

    return (
      <header>
          {games.games.map((t, k) =>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>
                    {t.game.location}
                  </IonCardSubtitle>
                  <IonCardTitle>
                      {t.game.sport}
                  </IonCardTitle>
                  <IonCardTitle>
                      {t.game.field}
                  </IonCardTitle>
                  <IonCardContent>
                     Players {t.game.people} / {t.game.max_people}
                  </IonCardContent>
                </IonCardHeader>
              </IonCard>

          )}
      </header>
    );
  }
}


export default GamesList;