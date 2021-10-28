
import React from 'react';

import {StyleSheet,View} from 'react-native';
import Contacts from './android/app/src/component/Info/Contacts';
import SignUpScreen from './android/app/src/component/Login/SignUpScreen';
import Mainmenu from './android/app/src/component/Menu/Mainmenu';
import Menue from './android/app/src/component/Menue';
import Insta from './android/app/src/component/Insta';
import Shopass from './android/app/src/component/Assistant/Shopass';
const  App = ()=> {
 
  return (
    <View style={styles.sectionContainer}>

     <Menue/>

      </View>
  );
};

      
const styles = StyleSheet.create({
  sectionContainer: {
    
    backgroundColor:'#fff',
  },

});
  

  



export default App;


