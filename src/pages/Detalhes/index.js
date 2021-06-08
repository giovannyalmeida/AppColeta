import React from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { ReactButton, TouchableOpacity } from 'react-native-gesture-handler';

export default function Detalhes(){

    navigation = useNavigation();

    function VoltaTela(){
        navigation.goBack();
    }

    return (
        <SafeAreaVie style ={{flex:1}}>
       <View style = {styles.Container}>
           <TouchableOpacity onPress = {VoltaTela}>
           <Feather name="arrow-left" size = {20} color ="#34cb79" />
           </TouchableOpacity>
           
           <image style ={styles.pointImage} source = {{uri:'https://paradoxalnews.com/wp-content/uploads/2020/07/maxresdefault-1.jpg'}}/>
      
       <Text style = {styles.pointName}>Pista de Skate SP Pedro</Text>
       <Text style = {style.pointItems}>Pista de Skate Boa Vista</Text>

       <View style = {styles.address}>
           <Text style = {styles.addressTitle}>Endereço</Text>
           <Text style = {styles.addressContent}>Av josé maria João nº777, República, São Paulo - SP</Text>
       </View>

       </View>

       <View style={styles.footer}>

           <ReactButton style = {style.button} onPress ={()=>{}}>
               <FontAwesome name ="whatsapp" size={20} color = "#FFF" />
               <Text style = {styles.buttonText}>Whatsapp</Text>
           </ReactButton>

           <ReactButton style = {style.button} onPress ={()=>{}}>
               <FontAwesome name ="mail" size={20} color = "#FFF" />
               <Text style = {styles.buttonText}>E-mail</Text>
           </ReactButton>

       </View>

       </SafeAreaVie>
    );
}

const styles = StyleSheet.create({
    
    Container: {
        flex:1,
        padding:32,
        paddingTop:60
    },

    pointImage: {
        width:'100%',
        height: 120,
        resizeMode:'cover',
        borderRadius:10,
        marginTop:32
    },

    pointName:{
        color:'#322153',
        fontSize:28,
        marginTop: 24
    },

    pointItems:{
        fontSize:16,
        marginTop:8,
        color:'#6C6C80'
    },

    address:{
        marginTop:32
    },

    addressContent:{
        marginTop:8,
        color:'#6C6C80'
    },

    addressTitle:{
        color:'#322153',
        fontSize: 16,
        fontWeight:'bold'
    },

    footer:{
        borderColor:'#999',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:32,
        paddingVertical:20,
        paddingBottom:15
    },

    button:{
        width:'48%',
        backgroundColor: '#34CB79',
        borderRadius:10,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },

    buttonText:{
        marginLeft:8,
        color:'#FFF',
        fontSize:16,
    }


});