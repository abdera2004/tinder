import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, StatusBar, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Rodape from '../Components/Rodape';

const ITEMS = [
    {
        "nome": 'Interesses',
        "desc": 'Digite um interesse...',
        "id": '1'
    },
    {
        "icon": <AntDesign name='eye' size={20} style={{position: 'absolute'}}/>,
        "nome": 'Intenção',
        "desc": 'Responda para dar matches mais compatíveis.',
        "id": '2'
    },
    {
        "icon": <Ionicons name='person' size={20} style={{position: 'absolute'}}/>,
        "nome": 'Pronomes',
        "desc": 'Selecione os pronomes para incluir no seu perfil.',
        "id": '3'
    },
    {
        "icon": <Entypo name='ruler' size={20} style={{position: 'absolute'}}/>,
        "nome": 'Altura',
        "desc": 'Adicione a sua altura.',
        "id": '4'
    },
    {
        "icon": <AntDesign name='eye' size={20} style={{position: 'absolute'}}/>,
        "nome": 'Tipo de relacionamento',
        "desc": 'Você se interessa por qual tipo de relacionamento?',
        "id": '5'
    },
    {
        "icon": <Ionicons name='language' size={20} style={{position: 'absolute'}}/>,
        "nome": 'Idiomas que eu falo',
        "desc": 'Adicionar idiomas',
        "id": '6'
    },
];

const Item = ({nome, desc, icon}) => (

    <SafeAreaView style={styles.conteudoTexto}>
        <Text style={styles.fundoTexto}>{nome}</Text>
            <View style={{backgroundColor: 'white', height: 40, flexDirection: 'column-reverse',}}>
                {icon}
                <TextInput
                    placeholder={desc}
                    style={styles.input} 
                />
            </View>
    </SafeAreaView>
);

const Perfil = () => {

    const navigation = useNavigation();

    return (
 
        <SafeAreaView style={styles.container}>
        
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name='arrowleft' size={40}/>
                </TouchableOpacity>

                    <Image
                    source={require('../assets/logo.png')}
                    style={styles.imagem}
                    />

                    <Text style={styles.texto}>SALVAR</Text>
            </View>

            <View style={styles.perfil}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Editar Perfil</Text>
                <Image
                source={require('../assets/homem.jpg')}
                style={styles.imagem2}
                />
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Ruan, 19</Text>
            </View>

            <FlatList
            data={ITEMS}
            renderItem={({item}) => <Item nome={item.nome} desc={item.desc} icon={item.icon}/>}
            keyExtractor={item => item.id}
            />

            <Rodape/>
        </SafeAreaView>
    );
  };

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        height: 'auto',
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
    texto:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    perfil:{
        alignItems: 'center',
        marginTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#a1a1a1',
    },
    imagem2: {
        borderRadius: 100,
        height: 90,
        width: 90,
        borderWidth: 2,
        borderColor: '#FF66C3'
    },
    conteudoTexto:{
        backgroundColor: '#c2c2c2',
        marginBottom: 18
    },
    fundoTexto:{
        fontWeight: 'bold',
        fontSize: 20
    },
    input:{
        marginBottom: 15
    }
});

export default Perfil;