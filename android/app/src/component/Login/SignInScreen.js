import React from 'react';
import { StyleSheet,View,Text, Button, TextInput,TouchableOpacity,updateSecureTextEntry} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';




 

  const SignInScreen = () => {

    const [data, setData] = React.useState({
        mobilenum: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidemail: true,
        isValidPassword: true,
    });
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }





    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.htext}>Your Logo will appear here </Text>
        </View>
       
        <View style={styles.footer}> 
        <View>       
            <TextInput placeholder="Mobile Number"
                    placeholderTextColor="#666666"
                    style={styles.textInput} />
                    <View/>
                    
        <View>
        <TextInput 
                    placeholder="Enter Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.securesssTextEntry ? true : false}
                    style={styles.textInput1}
                    onChangeText={(val) => handlePasswordChange(val)}
                    />
                    
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather style={{marginLeft:wp('80'),marginTop:hp('-2')}}
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather style={{marginLeft:wp('80'),marginTop:hp('-2')}}
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                    </View>
                    </View>
               <View>    
        <View style={{backgroundColor:'#0201cb',borderRadius:30,width:wp('60'),height:hp('6'),justifyContent:'center',alignItems:'center',marginLeft:wp('17'),marginTop:hp('8')}}/>

        <Text style={{fontSize:20,marginLeft:wp('38'),marginTop:hp('-5'),color:'white'}}>LOGIN</Text>

        </View>
        <View>    
        <View style={{backgroundColor:'#2998f4',borderRadius:30,width:wp('60'),height:hp('6'),justifyContent:'center',alignItems:'center',marginLeft:wp('17'),marginTop:hp('4')}}/>
        <TouchableOpacity>
                   
        <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',marginLeft:wp('38'),marginTop:hp('-5'),color:'white'}}>Register</Text>
         </TouchableOpacity>
        </View>
        
        <Text style={{fontSize:15,marginTop:hp('6')}}>Forgot Password?</Text>
        <Text style={{fontSize:15,marginTop:hp('-2'),color:'blue',marginLeft:wp('75'),}}>Help</Text>
        






        </View>
        </View>
           
                
                
    
    
        
    );
        }
   
        
        
            
      
   
  
  
  export default SignInScreen ;

  const styles = StyleSheet.create({
   container:{

      backgroundColor: 'blue',
      height: hp('100%'),
      width: wp('100%')

   },
   header: {
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
  
    paddingBottom:50
},
footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
htext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
},
ftext: {
    color: '#05375a',
    fontSize: 18
},
action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
},
textInput: {
    
    backgroundColor:'#e1eaed',
    paddingLeft: 10,
    color: '#05375a',
    fontSize:15,
    borderRadius:10
},
textInput1: {
    
    backgroundColor:'#e1eaed',

    paddingLeft: 10,
    color: '#05375a',
    fontSize:15,
    borderRadius:10,
    top:20
},
errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
button: {
    alignItems: 'center',
    marginTop: 50
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
}
});

  

