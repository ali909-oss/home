import React from 'react';
import { StyleSheet, View, Text,FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';


const DATA=[
  
    {
        name:'La Redoute',
        id:'1',
        image:require("../assets/images/download1.png")

    },
    {
        name:'c discount',
        id:'2',
        image:require("../assets/images/download1.png")

    },
    {
        name:'amazon',
        id:'3',
        image:require("../assets/images/download1.png")

    },
    {
        name:'suisses',
        id:'4',
        image:require("../assets/images/download1.png")

    },
    {
        name:'promod',
        id:'5',
        image:require("../assets/images/download1.png")

    },
    {
       name:'placedes',
       id:'6',
       image:require("../assets/images/download1.png")
    },
    {
        name:'ebay',
        id:'7',
        image:require("../assets/images/download1.png")        

    },
    

    {
        name:'finac',
        id:'8',
        image:require("../assets/images/download1.png")        

    },





]




const Menue = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#e1eaed', height: hp('16%'), }}>
                <Text style={{ fontSize: 20, fontWeight: '500', marginTop: hp('1'), marginLeft: wp('22'), color: 'black' }}>Select a Store to Shop</Text>
                <TextInput style={styles.textin}
                    placeholder="Search US Stores"
                    placeholderTextColor="#666666"


                />
                <AntDesign style={{ marginTop: hp('-5.5'), marginLeft: wp('6') }} name={"search1"} size={25} color="black" />
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#e1eaed', marginTop: hp('-4.5'), marginLeft: wp('85'), borderRadius: 4, borderWidth: 2, borderColor: '#0047AB', width: 50, height: 45 }} />

                    <Entypo style={{ marginTop: hp('-5.8'), marginLeft: wp('88') }} name={"list"} size={25} color="#0047AB" />
                </TouchableOpacity>
                <Text style={{ color: '#0047AB', marginTop: hp('-0.8'), marginLeft: wp('87.5'), fontSize: 13 }}>Filter</Text>

            </View>



            <Text style={{ fontSize: 30, fontWeight: '500', marginTop: hp('1'), marginLeft: wp('35'), color: 'black' }}>All Stores</Text>
         <FlatList
         
  data = {DATA} keyExtractor = {(item)=>{item.id}}      renderItem = {({item}) =>{
      return(
          <View style = {{paddingLeft:10}}>

              <View style = {{justifyContent:'space-between'}}>
<Image source={item.image}/>

 
              </View>

              </View>
      )
  }}/>
            
            
            </View>
            
            
            
            






    
    
    )
}



export default Menue;



const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    flat:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textin: {
        marginLeft: wp('2'),
        backgroundColor: '#FFF',
        fontSize: 20,
        marginTop: hp('3'),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('80%'),
        borderRadius: 10,
        textAlign: 'center',
        height: 50
    },
    lineStyle: {
        borderWidth: 0.2,
        borderColor: 'grey',
        marginTop: hp('2')
    },
    hImage:{
        height: hp('15%'),
        width: wp('42%')
       
        
    },
    Idesign:{ 
           flexDirection:'row',
           borderWidth:1,
           borderColor:'black'
    },

});