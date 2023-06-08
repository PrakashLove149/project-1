import './ExploreContainer.css';
 import { IonButton , IonCol, IonGrid,IonButtons,IonDatetime,IonTitle,IonDatetimeButton,IonToolbar, IonModal,IonIcon,IonAlert, IonRow ,IonCard, IonHeader, IonCardSubtitle, IonInput, IonCheckbox, IonCardHeader, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
 import {  play } from 'ionicons/icons';
 import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
 
interface ContainerProps { }



const ExploreContainer: React.FC<ContainerProps> = () => {

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };


  return (
    <>
    <div>
     <IonButton href='https://google.com' size='large' color='danger'  shape='round'>
      click me
     </IonButton>
     <IonButton >
     <IonIcon icon={play} />
      play
    </IonButton>
    
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Alert"
        subHeader="Important message"
        message="This is an alert!"
        buttons={['OK']}
      ></IonAlert>
  <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

<IonModal keepContentsMounted={true}>
  <IonDatetime id="datetime"></IonDatetime>
</IonModal>
    </div>
     <div>
<IonGrid>
  <IonRow >
    <IonCol  >
<img src="https://i.pravatar.cc?img=3" />                   
    </IonCol>
    <IonCol  >
    <img src="https://i.pravatar.cc?img=1" />      
    </IonCol>
    <IonCol >
    <img src="https://i.pravatar.cc?img=2" />       
    </IonCol>
  </IonRow>
</IonGrid>
     </div>

     <div>
<IonGrid>
  <IonRow >
    <IonCol>
    <img src="https://i.pravatar.cc?img=23" />                     
    </IonCol>
    <IonCol>
    <img src="https://i.pravatar.cc?img=9" />    
    </IonCol>
    <IonCol>
    <img src="https://i.pravatar.cc?img=8" />     
    </IonCol>
  </IonRow>
</IonGrid>
     </div>

<div>
  <IonCard>
    <img src='./src/img/image-1.jpeg'/>
<IonHeader>
  <IonCardSubtitle>
Register Now
  </IonCardSubtitle>

  <IonInput placeholder=' First Name'></IonInput>
  
  <IonInput placeholder=' Last Name'></IonInput>

  <IonButton expand='full' className='ion-margin'>Submit</IonButton>
</IonHeader>
  </IonCard>
</div>
<div>
<IonCheckbox>I agree to the terms and conditions</IonCheckbox>
</div>

<div>
<IonButton onClick={openScanner}>Scan barcode</IonButton>
</div>



      {/* <div className="TitleHead">Help Center</div> */}
    
        <IonGrid  >
       
        <IonRow  >
    <IonCol size='4'>
    </IonCol>
    <IonCol  size='4'>
    {/* <div style={{boxShadow: "1px 1px 15px" , borderRadius:"15px", height:"12rem"}}> */}
      <p>
      We have a lot of content created in our Help Center that will answer
          your questions. 
          </p>
          {/* <div style={{textAlign:"center"}}> */}
          <IonButton >Get Help</IonButton>
          {/* </div> */}
          {/* </div>  */}
    </IonCol>
    <IonCol  size='4'>
    </IonCol>
    </IonRow> 
    
      </IonGrid>
      <IonCard>
  <IonToolbar>
    <IonTitle>Test</IonTitle>
    <IonButtons slot="start">
      <IonButton
        style={{
          backgroundColor: "red",
          borderRadius: "100%",
          color: "white",
          width: 32
        }}
      >
      </IonButton>
    </IonButtons>
  </IonToolbar>
  <IonCardContent>
    This is some text that is the content of the card with the close
    button below
  </IonCardContent>
</IonCard>



     </>
  );
};

export default ExploreContainer;
