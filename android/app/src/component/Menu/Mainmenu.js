import React from 'react';
import { StyleSheet,View,Text, ScrollView, TouchableOpacity,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';







const Mainmenu = () => {
return(
    <View style={styles.container}>

       <ScrollView>
           <Text style={{fontSize:20,fontWeight:'700',marginTop:hp('8'),marginLeft:wp('3'),color:'black'}}>Popular Services</Text>
           <View style = {styles.lineStyle} />
           <View style={{flexDirection:'row',justifyContent:'space-around'}} >
           <Icon style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"female"} size={60} color="blue"/>
           <Icon style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"ambulance"} size={60} color="blue"/>
           <MaterialCommunityIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"bus-school"} size={60} color="blue"/>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>House Maid</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Ambulance</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>School Van</Text>

          </View>

          <Text style={{fontSize:20,fontWeight:'700',marginTop:hp('5'),marginLeft:wp('3'),color:'black'}}>More</Text>
          <View style = {styles.lineStyle} />

          <View style={{flexDirection:'row',justifyContent:'space-around'}} >
          <MaterialCommunityIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"hammer-screwdriver"} size={60} color="blue"/>
          <Entypo style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"video-camera"} size={60} color="blue"/>
          <Icon style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"cutlery"} size={60} color="blue"/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Carpenter</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Photographer</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Gardening</Text>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}} >
          <FontAwesome5 style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"truck"} size={60} color="blue"/>
          <Icon style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"medkit"} size={60} color="blue"/>
          <Icon style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"newspaper-o"} size={60} color="blue"/>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Transport</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('5')}}>Medical</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('2')}}>Newspaper</Text>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}} >
          <Fontisto style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"doctor"} size={60} color="blue"/>
          <Icon style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"female"} size={60} color="blue"/>
          <FontAwesome5 style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"user-cog"} size={60} color="blue"/>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Doctor</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('5')}}>House Maid</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('2')}}>Labour</Text>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}} >
          <MaterialIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"cleaning-services"} size={60} color="blue"/>
          <Icon style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"ambulance"} size={60} color="blue"/>

          <MaterialIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"car-repair"} size={60} color="blue"/>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>House Keeping</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('-3')}}>Ambulance</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('2')}}>Car Repair</Text>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}} >
          <MaterialIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"home-repair-service"} size={60} color="blue"/>
          <MaterialIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"design-services"} size={60} color="blue"/>

          <MaterialIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"local-laundry-service"} size={60} color="blue"/>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Civil Work</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Gents tailor</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('-1')}}>Laundry Service</Text>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}} >
              <TouchableOpacity>  <MaterialIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"face-retouching-natural"} size={60} color="blue"/></TouchableOpacity>
        
          <MaterialCommunityIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"bus-school"} size={60} color="blue"/>

          <MaterialIcons style={{marginTop:hp('4'),marginLeft:wp('6')}} name={"electrical-services"} size={60} color="blue"/>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>Beautician</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('3')}}>School Van</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:wp('-1')}}>Electrician</Text>

          </View>

          </ScrollView>



    </View>

)
}

export default Mainmenu; 

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white',
       height: hp('100%'),
       width: wp('100%')
 
    },
    lineStyle:{
        borderWidth: 0.2,
        borderColor:'grey',
        marginTop:hp('1')
    },

});