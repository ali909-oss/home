import React ,{useState}from 'react';
import { StyleSheet,View,Text, TextInput,TouchableOpacity,updateSecureTextEntry, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Picker } from "@react-native-picker/picker";
import CheckBox from '@react-native-community/checkbox';



 

  const SignUpScreen = () => {

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
   var radio =[
       {label:"Male" , value:0},
       {label:"Female" , value:1},
       {label:"Other" , value:2}
   ]

   const [country, setCountry] = useState('Unknown');
   const [isSelected, setSelection] = useState(false);

   
      





    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.htext}>Your Logo will appear here </Text>
        </View>
       
        <View style={styles.footer}> 
        <ScrollView>
        <View>       
            <TextInput placeholder="Name (English)*"
                    placeholderTextColor="#666666"
                    style={styles.textInput2} />
                    <View/>
        <View>       
            <TextInput placeholder="Mobile Number*"
                    placeholderTextColor="#666666"
                    style={styles.textInput} />
                    <View/>
                    
                    
        <View>
        <TextInput 
                    placeholder="Create Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput1}
                    onChangeText={(val) => handlePasswordChange(val)}
                    />
                    
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather style={{marginLeft:wp('80'),marginTop:hp('-5')}}
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather style={{marginLeft:wp('80'),marginTop:hp('-5')}}
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                    </View>
                    </View>
               <View>
                   <Text style={{color:'black',fontSize:20,marginTop:hp('2')}}> Gender</Text>
               <RadioForm
                  
                  buttonSize={16}
                  radioStyle={{paddingTop:25,paddingLeft:20}}
                  selectedButtonColor="#418dd9"
                  radio_props={radio}
                  initial={0}
                  animation={0}
                  formHorizontal={true}
                  onPress={(value) => (value)}
                   
                />
                </View>
               <View >
               <Picker
        selectedValue={country}
        onValueChange={(value, _index) => setCountry(value)}
        mode="dropdown" 
        style={styles.picker}
      >
        <Picker.Item label="Please select your country" value="Unknown" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Japan" value="Japan" />
      </Picker>
               </View>

               <View style={{marginTop:hp('2')}}>
               <CheckBox 
          value={isSelected}
          onValueChange={setSelection}
          
          tintColors={{ true: '#0971e8', false: 'black' }}
/>
        <Text style={{marginTop:hp('-4'),fontSize:15,marginLeft:wp('10'),color:'blue'}}>I agree to the Terms and Conditions</Text>
      
               </View>





               <View>   
               <TouchableOpacity> 
        <View style={{backgroundColor:'#0201cb',borderRadius:30,width:wp('60'),height:hp('6'),justifyContent:'center',alignItems:'center',marginLeft:wp('17'),marginTop:hp('6')}}/>

        <Text style={{fontSize:20,marginLeft:wp('36'),marginTop:hp('-5'),color:'white'}}>PROCEED</Text>
        </TouchableOpacity>
        </View>
       
        
        <Text style={{fontSize:15,marginLeft:wp('15'),marginTop:hp('6'),justifyContent:'center',alignItems:'center'}}>Already Registered?</Text>
        <Text style={{fontSize:15,marginLeft:wp('53'),marginTop:hp('-3'),justifyContent:'center',alignItems:'center',color:'blue'}}>Login Here</Text>

        <Text style={{fontSize:15,marginTop:hp('3'),color:'blue',marginLeft:wp('25'),}}>Privacy and Policy</Text>
        






        </View>
        </ScrollView>
        </View>
        
        </View>
           
                
                
    
    
        
    );
        }
   
        
        
            
      
   
  
  
  export default SignUpScreen ;

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

  picker: {
    marginTop:hp('2'),
    width: 350,
    padding: 10,
    borderWidth: 2,
    borderColor: "#666",
    backgroundColor:'#e1eaed',
    borderRadius:20
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
    borderRadius:10,
    marginTop:hp('2')
},
textInput2: {
    
    backgroundColor:'#e1eaed',
    paddingLeft: 10,
    color: '#05375a',
    fontSize:15,
    borderRadius:10,
    marginTop:hp('1')
},
textInput1: {
    
    backgroundColor:'#e1eaed',

    paddingLeft: 10,
    color: '#05375a',
    fontSize:15,
    borderRadius:10,
    marginTop:hp('2')
    
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

  

