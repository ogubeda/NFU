import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Games from './pages/Games';
import GamesMap from './pages/GamesMap';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import i18n from "i18next";

import {useTranslation, initReactI18next} from "react-i18next";


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          games: "Games"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });


const App: React.FC = () => {
  const {t} = useTranslation();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/games" component={() => {
              if (!localStorage.getItem("user")) {
                return <Redirect to="/login"/>;
              }
              return <Games/>
            }} exact={true} />
            <Route path="/gamesmap" component={GamesMap} exact={true} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Auth} />
            <Route path="/profile" component={Profile} />
            <Route path="/" render={() => <Redirect to="/games" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="games" href="/games">
              <IonIcon icon={triangle} />
                <IonLabel>{t('games')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="gamesmap" href="/gamesmap">
              <IonIcon icon={ellipse} />
              <IonLabel>Games Map</IonLabel>
            </IonTabButton>
            <IonTabButton tab="contact" href="/contact">
              <IonIcon icon={square} />
              <IonLabel>Contact</IonLabel>
            </IonTabButton>
            <IonTabButton tab="login" href="/login">
              <IonIcon icon={square} />
              <IonLabel>Log In</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={triangle} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}
  

export default App;
