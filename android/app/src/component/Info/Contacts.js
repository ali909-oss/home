import React from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DATA = [

    {

        name: "Ali",
        id: "1",
        imageURI: 'https://cdn.pixabay.com/photo/2015/06/26/18/40/person-822803_1280.jpg'
        


    },
    {

        name: "Hamza",
        id: "2",
       


    },
    {

        name: "fadii",
        id: "3",
       


    },
    {

        name: "Hassan",
        id: "4",
      

    },
    {

        name: "lari",
        id: "5",
        

    },
    
]



    


  const SPACING=15;

      const Contacts = () => {
       
      
        return (
          <SafeAreaView style={styles.container}>
            <FlatList
            
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({item}) =>(
                  <View style={{padding:SPACING,marginBottom:SPACING,backgroundColor:'#e1eaed',borderRadius:19,
                    shadowColor:'#e1eaed',
                    shadowOffset:{
                        width:0,height:10
                    },
                    shadowOpacity:.8,
                    shadowRadius:20
                    
                  }}>
                      <Image
      source={{ uri: item.imageURI }}/>
                      
                      <Text style={{fontSize:20,fontWeight:'700',color:'black'}}>{item.name}</Text>
                      
                  </View>
              )
            
            
            }
            />

          </SafeAreaView>
        );
      }


export default Contacts;

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white',
       height: hp('100%'),
       width: wp('100%'),
       
 
    },
   

});