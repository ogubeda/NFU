import React, { Component } from 'react';
import epg from '../../data/epg.json'
import { IonCard, IonCardHeader, IonCardTitle, IonSlide, IonSlides, IonCardContent, IonCardSubtitle } from '@ionic/react';


class EPG extends Component {
  showDetails(epg) {
    alert(`Duration: ${epg.duration}\nStart: ${epg.start}\nDescription: ${epg.ext ? epg.ext.text : ''}`)
  }

  formatDate(unix) {
    let date = new Date(unix * 1000);
    let minutes = "0" + date.getMinutes()
    let week = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    return `${week[date.getDay()]}\n${date.getHours()}:${minutes.substr(-2)}`;
  }

  render() {
    const slideOpts = {
      slidesPerView: 9,
      grabCursor: true,
    };

    Object.entries(epg.events).map((t, k) => {
      console.log(t[1].spa);
    })

    return (
      <header>
        <h2>{epg.title}</h2>
        <IonSlides pager={false} options={slideOpts}>
          {Object.entries(epg.events).map((t, k) =>
            <IonSlide id={t[1].spa.id.toString()}>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>
                    {this.formatDate(t[1].spa.start)}
                  </IonCardSubtitle>
                  <IonCardTitle onClick={() => this.showDetails(t[1].spa)}>{t[1].spa.name}</IonCardTitle>
                  <IonCardContent>
                  </IonCardContent>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

          )}
        </IonSlides>
      </header>
    );
  }
}


export default EPG;