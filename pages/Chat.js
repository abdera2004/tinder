import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rodape from '../Components/Rodape';

const Chat = () => {

    const navigation = useNavigation();

    return (
 
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name='arrowleft' size={40}/>
                </TouchableOpacity>

                <Image
                source={require('../assets/logo.png')}
                style={styles.imagem}
                />

                <TouchableOpacity>
                    <Ionicons name='shield' size={40} color={'#a1a1a1'}/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.pesquisa}>
                <Ionicons name='search' size={40}/>
                <TextInput style={styles.input}/>
            </View>
            
            <View style={styles.match}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 5}}>Novos Matches</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                    <View style={styles.slide}></View>
                    <View style={styles.slide}></View>
                    <View style={styles.slide}></View>
                    <View style={styles.slide}></View>
                </View>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 5, marginBottom: 40}}>Curtidas</Text>
            </View>

            <View style={{flex: 1, marginBottom: StatusBar.currentHeight || 0,}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 5, marginLeft: 5}}>Mensagens</Text>
                <View style={styles.foto}></View>
                <View style={styles.foto}></View>
            </View>

            <Rodape/>
            
        </View>

    );
  };

  const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        
    },
    header:{
        height: 'auto',
        width: 'auto',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#a1a1a1',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
        
    },
    imagem:{
        resizeMode: 'cover',
        height: 100,
        width: 200
    },
    pesquisa:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 'auto',
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        fontSize: 16,
        width: '80%',
        borderBottomColor: '#a1a1a1',
    },
    match:{
        marginHorizontal: 25,
        marginTop: 50,
        height: 'auto'
    },
    slide:{
        width: 85,
        height: 150,
        backgroundColor: '#d9d9d9',
        borderRadius: 15,
    },
    foto:{
        height: 90,
        width: 90,
        backgroundColor: '#d9d9d9',
        borderRadius: 100,
        marginLeft: 10,
        marginVertical: 14,
    },
  });

export default Chat;