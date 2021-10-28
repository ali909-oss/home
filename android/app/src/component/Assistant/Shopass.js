import React from 'react';
import { StyleSheet,View,Text,Image, Button, TextInput,TouchableOpacity,updateSecureTextEntry} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Shopass = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={require('../../assets/images/logo.png')}
            style={{height: hp('40%'),
            width: wp('50%'),marginTop:hp('-4'),marginLeft:wp('20')}}
            />
            </View>
            <View style={styles.footer}>
            <View style={{marginTop:hp('5'),marginLeft:wp('8')}} >
            <Text style={{fontSize:15,fontWeight:'700',color:'black'}}>Paste a Product link below and Buying Assistant </Text>
            <Text style={{fontSize:15,fontWeight:'700',color:'black',marginLeft:wp('15')}}> will help get your goods</Text>
            </View>

            <View style={{backgroundColor: '#fafafa',marginTop:hp('8'),marginLeft:wp('5'),borderRadius:1,borderWidth:1,borderColor:'#0047AB',width:60,height:40}}/>
            <AntDesign style={{marginTop:hp('-5'),marginLeft:wp('8')}} name={"file1"} size={30} color="#0047AB"/>

            <TextInput style={styles.textin}
                    placeholder="Paste Your Link Here"
                    placeholderTextColor="#666666"
                    
                    
                    
                    
                />
                <TouchableOpacity>
                 <View style={{backgroundColor: '#b5b5b5',marginTop:hp('7'),marginLeft:wp('5'),borderRadius:4,borderWidth:0.22, height: hp('8%'),
       width: wp('90%')}}/>
       
            
            <Text style={{fontSize:25,fontWeight:'700',color:'white',marginLeft:wp('35'),marginTop:hp('-6')}}> Continue</Text>
            </TouchableOpacity>



            </View>
           

 
            </View>

)
}

export default Shopass; 

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white',
       height: hp('100%'),
       width: wp('100%')
 
    },
    header:{
       backgroundColor: '#fff',
        marginTop:hp('0'),
        height: hp('30%'),
       width: wp('100%')
    },
    footer:{
        backgroundColor: '#fafafa',
        marginTop:hp('2'),
        height: hp('42%'),
       width: wp('100%')

    },
    textin: {
        
        marginLeft: wp('22'), 
         fontSize: 20, 
         marginTop: hp('-5'), 
         justifyContent: 'center', 
         alignItems: 'center',
         width: wp('75%'),
         borderRadius:0.5,
         height:42,
         borderWidth:1.5,
         paddingLeft:wp('3')
    },
});