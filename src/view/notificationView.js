import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, RefreshControl } from 'react-native';

export default function notification() {

   const [ refresh, setRefresh ] = useState(false)

   function teste(){
      setRefresh(true)
      try{
          setRefresh(false)
      }catch(err){
          setRefresh(false)
      }
  }


 return (
    <View style={{backgroundColor: '#E5EEFF', flex: 1}}>
      <ScrollView refreshControl={<RefreshControl
         refreshing={refresh}
         onRefresh={teste}
         />}
         showsVerticalScrollIndicator={false}
         style={styles.scroll}>

       <Text style={styles.txvNotificacoes}>Notificações</Text>
      
       <View style={styles.viewNotify}>
          <TouchableOpacity>
            <Image
            source={require('../../assets/error.png')}
            style={styles.imgError}
            />
          </TouchableOpacity>
          <Text style={styles.descNotify}>Cordsx baixou seu livro</Text>
          <Image
          source={require('../../assets/cortico.jpg')}
          style={styles.imgLivro}
          />
       </View>


      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
   scroll:{
      marginBottom: '15%',
      backgroundColor: '#E5EEFF',
      flex: 1,
      alignSelf: 'center',
      width: '90%',
  },
  txvNotificacoes:{
      fontFamily: 'Montserrat_700Bold',
      fontSize: 30,
      marginBottom: 10,
      marginTop: '10%',
      marginBottom: '7%'
  },
  viewNotify:{
     width: '100%',
     height: 90,
     alignSelf: 'center',
     flexDirection: 'row',
     backgroundColor: '#8CA5FF',
     borderRadius: 10,
     alignItems: 'center',
     padding: 19,
     justifyContent: 'space-between',
     shadowColor: '#000',
     shadowOffset: {
         width: 0,
         height: 4,
     },
     shadowOpacity: 1,
     shadowRadius: 10,
     elevation: 4,
     marginBottom: '5%'
  },
  imgError:{
     width: 35,
     height: 35
  },
  descNotify:{
     fontFamily: 'Montserrat_600SemiBold',
     marginLeft: '3%'
  },
  imgLivro:{
     borderRadius: 10,
     width: 40,
     height: 60,
  }
})