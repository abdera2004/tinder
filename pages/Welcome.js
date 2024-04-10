import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const Welcome = () =>{
    const navigation = useNavigation();

    return(

        <View style={styles.container}>
            <View style={styles.containerlogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/logo.png')}
                    style={{width: 200, height: 200,}}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                    
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <AntDesign name='google' size={30} style={styles.icone}/>
                    <Text style={styles.buttonText}>ENTRAR COM O GOOGLE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <AntDesign name='facebook-square' size={30} style={styles.icone}/>
                    <Text style={styles.buttonText}>ENTRAR COM O FACEBOOK</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <MaterialCommunityIcons name='cellphone' size={30} style={styles.icone}/>
                    <Text style={styles.buttonText}>ENTRAR COM O NÚMERO DE TEL</Text>
                </TouchableOpacity>

                <Text style={styles.titulo3}>Não possui uma conta? Cadastre-se</Text>
            </Animatable.View>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
         flex: 1,
         backgroundColor: '#FF66C4',
    },
    titulo:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 50,
        paddingBottom: 50,
    },
    titulo3:{
        color: '#a1a1a1',
        textAlign: 'center',
        top: 30,
    },
    containerlogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 3,
        backgroundColor: '#000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        left: 10
        
    },
    button:{
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 7,
        bottom: '15%',
        top: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#a1a1a1',
        marginTop: 30,
    },
    icone:{
        left: 5, 
        position: 'absolute',
        color: '#FF66C4'
    },
    }
);

export default Welcome;