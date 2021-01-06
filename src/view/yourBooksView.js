import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, RefreshControl  } from 'react-native';


export default function YourBooks() {

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
      <ScrollView
      refreshControl={<RefreshControl
         refreshing={refresh}
         onRefresh={teste}
         />}
         showsVerticalScrollIndicator={false}
         style={styles.scroll}>
         <View style={styles.favorites}>
            <Text style={styles.txvTitle}>Livros Favoritos</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
               <View style={{paddingLeft: 5}}>
                  <TouchableOpacity style={styles.livro}>
                     <Image
                     source={require('../../assets/livro.jpg')}
                     style={styles.imgLivro}
                     />
                  </TouchableOpacity>
                  <View style={{width: 120, height: 70}}>
                            <View style={{width: 120}}>
                                <Text style={{width: 120, fontFamily: 'Montserrat_600SemiBold'}}>
                                    Dom Casmurro
                                </Text>
                            </View>
                  </View>
               </View>

               <View>
                  <TouchableOpacity style={styles.livro}>
                     <Image
                     source={require('../../assets/crise.jpg')}
                     style={styles.imgLivro}
                     />
                  </TouchableOpacity>
                  <View style={{width: 120, height: 70}}>
                            <View style={{width: 120}}>
                                <Text style={{width: 120, fontFamily: 'Montserrat_600SemiBold'}}>
                                    Dom Casmurro
                                </Text>
                            </View>
                  </View>
               </View>

               <View>
                  <TouchableOpacity style={styles.livro}>
                     <Image
                     source={require('../../assets/cortico.jpg')}
                     style={styles.imgLivro}
                     />
                  </TouchableOpacity>
                  <View style={{width: 120, height: 70}}>
                            <View style={{width: 120}}>
                                <Text style={{width: 120, fontFamily: 'Montserrat_600SemiBold'}}>
                                    Dom Casmurro
                                </Text>
                            </View>
                  </View>
               </View>

            </ScrollView>
         </View>
      
      <View style={styles.jaLidos}>
         <Text style={styles.txvTitle}>Já Lidos</Text>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
               <View style={{paddingLeft: 5}}>
                  <TouchableOpacity style={styles.livro}>
                     <Image
                     source={require('../../assets/livro.jpg')}
                     style={styles.imgLivro}
                     />
                  </TouchableOpacity>
                  <View style={{width: 120, height: 70}}>
                            <View style={{width: 120}}>
                                <Text style={{width: 120, fontFamily: 'Montserrat_600SemiBold'}}>
                                    Dom Casmurro
                                </Text>
                            </View>
                  </View>
               </View>

               <View>
                  <TouchableOpacity style={styles.livro}>
                     <Image
                     source={require('../../assets/cortico.jpg')}
                     style={styles.imgLivro}
                     />
                  </TouchableOpacity>
                  <View style={{width: 120, height: 70}}>
                            <View style={{width: 120}}>
                                <Text style={{width: 120, fontFamily: 'Montserrat_600SemiBold'}}>
                                    Dom Casmurro
                                </Text>
                            </View>
                  </View>
               </View>




            </ScrollView>
      </View>
      

      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
   favorites:{
      alignSelf: 'center',
      marginTop: '8%',
      width: '100%',
      marginLeft: '10%',
      paddingRight: '5%',
   },
   txvTitle:{
      fontFamily: 'Montserrat_700Bold',
      fontSize: 30,
      marginBottom: '2%'
   },
   livro:{
      backgroundColor: '#7DB1FF',
      width: 120,
      height: 230,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginRight: 15,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 4,
      marginBottom: 10,
  },
  imgLivro:{
      width: '100%',
      height: '100%',
      borderRadius: 10, 
  },
  scroll:{
   marginBottom: '15%'
   },
   jaLidos:{
      alignSelf: 'center',
        marginTop: '2%',
        width: '100%',
        marginLeft: '10%',
        paddingRight: '5%',
   }
})