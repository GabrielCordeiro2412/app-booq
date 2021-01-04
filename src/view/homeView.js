import React, {useState, useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, RefreshControl, Alert } from 'react-native';
import {Feather} from '@expo/vector-icons'
import {Modalize} from 'react-native-modalize'

export default function Home() {

const [ refresh, setRefresh ] = useState(false)
const [ pesquisa, setPesquisa ] = useState(null)
const modalizeRef = useRef(null)

/*function openModal(){
    modalizeRef.current?.open();

     <Modalize
        ref={modalizeRef}
        snapPoint={500}
        modalHeight={500}
    >
        <TouchableOpacity style={{alignSelf: 'center', backgroundColor: '#7DB1FF', width: 100, height: 50}}>
            <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 25}}>Teste</Text>
        </TouchableOpacity>

    </Modalize>
}*/

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
      
       <View style={styles.header}>
        <View style={styles.pesquisaView}>
        <TextInput
            style={styles.pesquisa}
            placeholder="Pesquise por Livros, Categorias..."
            value={pesquisa}
            onChangeText={(texto) => setPesquisa(texto)}
        />
        <TouchableOpacity style={styles.lupa}>
            <Feather name="search" color="#000" size={35}/>
        </TouchableOpacity>
    </View>
       </View>
    <View style={styles.principal}>
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl
    refreshing={refresh}
    onRefresh={teste}
    />}
    style={styles.scroll}>

        {
            pesquisa ? (
                <View style={styles.categoriaView}>
                    <Text style={styles.txvPalavra}>Você pesquisou por: {pesquisa}</Text>
                </View>
                
            ): (
                <View>
        <View style={styles.categoriaView}>
                <Text style={styles.txvCategoria}>Categorias</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <TouchableOpacity style={styles.btnCategoria}>
                            <Image
                                source={require('../../assets/gostar.png')}
                                style={styles.imgCategoria}
                            />
                            <Text style={{fontFamily: 'Montserrat_700Bold', marginTop: 5}}>Amor</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <TouchableOpacity style={styles.btnCategoria}>
                            <Image
                                source={require('../../assets/swords.png')}
                                style={styles.imgCategoria}
                            />
                            <Text style={{fontFamily: 'Montserrat_700Bold', marginTop: 5}}>Guerra</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnCategoria}>
                            <Image
                                source={require('../../assets/location.png')}
                                style={styles.imgCategoria}
                            />
                            <Text style={{fontFamily: 'Montserrat_700Bold', marginTop: 5}}>Aventura</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnCategoria}>
                            <Image
                                source={require('../../assets/alien.png')}
                                style={styles.imgCategoria}
                            />
                            <Text style={{fontFamily: 'Montserrat_700Bold', marginTop: 5}}>Ficção</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        <View style={styles.maisLidos}>
        <Text style={styles.txvLidos}>Novidades</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/livro.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/cortico.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/crise.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/livro.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
    <View style={styles.maisLidos}>
        <Text style={styles.txvLidos}>Os Mais Lidos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/crise.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/cortico.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/livro.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/crise.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>

    <View style={styles.maisLidos}>
        <Text style={styles.txvLidos}>Os Mais Lidos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/crise.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/cortico.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/livro.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.livro}>
                    <Image
                    source={require('../../assets/crise.jpg')}
                    style={styles.imgLivro}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
    

        </View>
            )
        }


    
    
    </ScrollView>

    </View>

    
    
       
   </View>
   
  );
}

const styles = StyleSheet.create({
    pesquisa: {
        width: '80%',
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingLeft: 20,
        fontFamily: 'Montserrat_400Regular'
    
    },
    pesquisaView:{
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 8,
        marginBottom: 20,
    },
    lupa:{
        justifyContent: 'center',
        marginRight: '5%'
    },
    categoriaView:{
        alignSelf: 'center',
        width: '100%',
        marginLeft: '10%',
        paddingRight: '5%'
        
    },
    txvCategoria:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 30,
        marginBottom: 10
    },
    imgCategoria:{
        width: 45,
        height: 45
    },
    btnCategoria:{
        backgroundColor: '#7DB1FF',
        width: 130,
        height:100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 7,
    },
    txvTitulo:{
        fontSize: 14,
        fontFamily: 'Montserrat_700Bold',
    },
    maisLidos:{
        alignSelf: 'center',
        marginTop: '5%',
        width: '100%',
        marginLeft: '10%',
        paddingRight: '5%',
        paddingBottom: '5%'
    },
    txvLidos:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 30,
        marginBottom: 10
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
        marginBottom: 7,
        marginLeft: 5
    },
    imgLivro:{
        width: 120,
        height: 230,
        borderRadius: 10,
       
    },
    txvPalavra:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        marginBottom: 10
    },
    scroll:{
        marginBottom: '15%'
    },
    principal:{
        paddingBottom: '20%'
    },
    logoApp:{
        width: 150,
        height: 50,
        marginTop: '8%'
    },
    header:{
        width: '100%',
        alignItems: 'center',
    }
})