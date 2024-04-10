import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Rodape from '../Components/Rodape';
import Cabecalho from '../Components/Cabecalho';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {

  return (

    <View style={styles.container}>

      <Cabecalho/>

              <ImageBackground source={require('../assets/homem.jpg')} style={styles.imagem}>
                <View style={styles.botoes}>

                  <TouchableOpacity style={styles.button1}>
                    <AntDesign name="caretleft" size={50} style={styles.icone}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button2}>
                    <AntDesign name="caretright" size={50} style={styles.icone}/>
                  </TouchableOpacity>

                </View>
                <Text style={styles.textoImagem}>Ruan 19</Text>
                <Text style={styles.textoImagem2}>Monogamia</Text>
                <View style={styles.menu}>

                  <TouchableOpacity style={styles.botao}>
                    <SimpleLineIcons name='reload' size={40} color={'orange'}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botao}>
                    <Ionicons name='close' size={40} color={'red'}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botao}>
                    <Ionicons name='star' size={40} color={'blue'}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botao}>
                    <Ionicons name='heart' size={40} color={'green'}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botao}>
                    <Ionicons name='flash' size={40} color={'purple'}/>
                  </TouchableOpacity>

                </View>  
              </ImageBackground>  

      <Rodape/>
    </View>
)};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  imagem:{
    flex: 1,
    resizeMode: 'cover',
    padding: 10,
    margin: 10,
  },
  textoImagem:{
    fontSize: 50,
    top: 320,
    color: 'white',
    textShadowColor: '#323232',
    textShadowRadius: 7,
    textShadowOffset: { width: 0, height: 5 },
  },
  textoImagem2:{
    fontSize: 32,
    top: 320,
    color: 'white',
    paddingLeft: 10,
    backgroundColor: '#a1a1a1',
    borderRadius: 50,
    width: 200,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  button1:{
    bottom: '15%',
    top: 1,
  },
  button2:{
    bottom: '15%',
    top: 1,
  },
  icone:{
    color: 'white'
  },
  botoes:{
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu:{
    flexDirection: 'row',
    top: 350,
    justifyContent: 'space-between',
  },
  botao:{
    borderRadius: 100,
    backgroundColor: 'black',
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12
  },
});

export default Home;