import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function user() {
 return (
    <View style={{backgroundColor: '#E5EEFF', flex: 1}}>
       <View style={styles.header}>
         <Image
         style={styles.imgUser}
         source={require('../../assets/robert.png')}
         />
         <View style={styles.userInfo}>
            <Text style={styles.userName}>Robert</Text>
            <Text style={styles.userApelido}>bertinho</Text>
            <Text style={styles.userDesc}>Leitor Fanático</Text>
         </View>
       </View>

       <View style={styles.body}>
         <TouchableOpacity style={styles.btnAction}>
            <Text style={styles.descBtn}>Editar Informações</Text>
            <Image
            source={require('../../assets/editar.png')}
            style={styles.imgBtn}
            />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnAction}>
            <Text style={styles.descBtn}>Configurações</Text>
            <Image
            source={require('../../assets/engrenagem.png')}
            style={styles.imgBtn}
            />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnAction}>
            <Text style={styles.descBtn}>Mande seu Livro</Text>
            <Image
            source={require('../../assets/file.png')}
            style={styles.imgBtn}
            />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnAction}>
            <Text style={styles.descBtn}>Seus Livros</Text>
            <Image
            source={require('../../assets/files.png')}
            style={styles.imgBtn}
            />
         </TouchableOpacity>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
   header:{
      alignSelf: 'center',
      width: '90%',
      flexDirection: 'row',
      marginTop: '8%'
   },
   imgUser:{
      width: '35%',
      borderRadius: 10
   },
   userInfo:{
      marginLeft: '5%'
   },
   userName:{
      fontFamily: 'Montserrat_700Bold',
      fontSize: 30
   },
   userApelido:{
      fontFamily: 'Montserrat_600SemiBold',
      fontSize: 18
   },
   userDesc:{
      fontSize: 18,
      fontFamily: 'Montserrat_500Medium',
      marginTop: '10%'
   },
   body:{
      width: '90%',
      alignSelf: 'center',
      marginTop: '10%'
   },
   btnAction:{
      width: '100%',
      height: 60,
      backgroundColor: '#8CA5FF',
      borderRadius: 10,
      marginBottom: '5%',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 4,
   },
   descBtn:{
      fontFamily: 'Montserrat_600SemiBold',
      fontSize: 18,
      color: '#FFF'
   },
   imgBtn:{
      width: 30,
      height: 30
   }
})