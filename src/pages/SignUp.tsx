import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';

import * as ROUTES from '../constants/Routes';
import { RouteComponentProps } from 'react-router';

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
