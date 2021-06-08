import React, { version } from 'react';
import { Feather } from '@expo/vector-icons';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export default function Pontos (){

    navigation = useNavigation();


    function abrirHome(){

      navigation.goBack();

    }

    function abrirDetalhes (){
        navigation.goBack('Detalhes');
    }

    return (
        <>
        <View style = {styles.container}>
           <TouchableOpacity onPress = {abrirHome} > 
               <Feather name="arrow-left" size = {20} color ="#34cb79" />
           </TouchableOpacity>

           <Text style={style.title}>
               Bem vindo
           </Text>

           <Text>
               Enconte no mapa um ponto de coleta
           </Text>



           <View styles={styles.mapConteiner}>
               <MapView style = {styles.map} initialRegion = {{ latitude: -23.494524775245374, longitude:-46.84952635021571, latitudeDelta:0.014,  longitudeDelta:0.014}}>
                  
                  <Marker onPress = {abrirDetalhes} style = {styles.mapMarker} coordinate={{ latitude: -23.50817972533869, longitude: -46.88036444884044}}>
                       
                       <View style = {styles.mapMarkerContainer}>
                           <Image style = {styles.mapMarkerImage} source = {{uri:'https://www.esportividade.com.br/wp-content/uploads/2013/11/skate_barueri.jpg'}}/>
                           <Text style = {styles.mapMarkerTitle}>SP Pedro skatepark, cujo dono Flip</Text>
                       </View>
                  </Marker>

                  <Marker onPress = {abrirDetalhes} style = {styles.mapMarker} coordinate={{ latitude: -23.497809632004845, longitude: -46.87299493299575}}>
                       
                       <View style = {styles.mapMarkerContainer}>
                           <Image style = {styles.mapMarkerImage} source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH2J6bDOX8yRwVRTZcEu5_Bi2GKHafbiAo1MnMHogd8f_2xp2HTpRMknvpnjYFIE4svM&usqp=CAU'}}/>
                           <Text style = {styles.mapMarkerTitle}>Boa Vista skatepark</Text>
                       </View>
                  </Marker>

               </MapView>
           </View>
           
        </View>

        <View style = {styles.itemsContainer}>
          <ScrollView  horizontal showsHorizontalScrollIndicator={false}>


              <TouchableOpacity style = {styles.item}>
                  <Image width = {42} height = {42} source = {require ('../../assets/icones/baterias.png')}/>
                  <Text style = {styles.itemTitle}>Bateria</Text>
              </TouchableOpacity>

              <TouchableOpacity  style = {styles.item}>
                  <Image width = {42} height = {42} source = {require ('../../assets/icones/eletronicos.png')}/>
                  <Text style = {styles.itemTitle}>Eletrônicos</Text>
              </TouchableOpacity>

              <TouchableOpacity  style = {styles.item}>
                  <Image width = {42} height = {42} source = {require ('../../assets/icones/lampadas.png')}/>
                  <Text style = {styles.itemTitle}>Lâmpadas</Text>
              </TouchableOpacity>

              <TouchableOpacity  style = {styles.item}>
                  <Image width = {42} height = {42} source = {require ('../../assets/icones/oleo.png')}/>
                  <Text style = {styles.itemTitle}>Óleos</Text>
              </TouchableOpacity>

              <TouchableOpacity  style = {styles.item}>
                  <Image width = {42} height = {42} source = {require ('../../assets/icones/organicos.png')}/>
                  <Text style = {styles.itemTitle}>Orgânicos</Text>
              </TouchableOpacity>

              <TouchableOpacity  style = {styles.item}>
                  <Image width = {42} height = {42} source = {require ('../../assets/icones/papeis-papelao.png')}/>
                  <Text style = {styles.itemTitle}>Papéis</Text>
              </TouchableOpacity>


          </ScrollView>
        </View>

    </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 80
    },


    title:{
    fontSize: 20,
     marginTop:24,

    },

    description:{
    fontSize: 16,
    marginTop: 4,
    color: '#6c6c80'
   },
   
   mapConteiner:{
   flex: 1,
   width: '100%',
   borderRadius:10,
   overflow: 'hidden',
   marginTop: 16,
   },
   
   map:{
       width: '100%',
       height:'100%',
   },
    
   itemsContainer:{
       flexDirection:'row',
       marginTop: 16,
       marginBottom: 32
   },

   item: {
       backgroundColor: '#fff',
       height: 120,
       width: 120,
       borderRadius: 8,
       paddingHorizontal: 16,
       paddingTop: 20,
       paddingBottom: 16,
       marginRight: 8,
       alignItems: 'center',
       justifyContent: 'space-between',
       textAlign: 'center',
   },

   itemTitle:{
       textAlign: 'center',
       fontSize: 13
   },

   mapMarker:{
      width:90,
      height:80
   },
   
   mapMarkerContainer: {
       width:90,
       height:70,
       backgroundColor:'34CB79',
       flexDirection: 'column',
       borderRadius: 8,
       overflow: 'hidden',
       alignItems: 'center'
   },

   mapMarkerImage:{
       width:90,
       height:45,
       resize:'cover'
   },

   mapMarkerTitle: {
       flex:1,
       color:'#FFF',
       fontSize:10,
       lineHeight:23,
   }

});
