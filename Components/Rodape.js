import {View, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Rodape = (props) => {

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Fontisto name='tinder' size={40} style={{color: '#FF66C4'}}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name='text-search' size={40} style={{color: '#a1a1a1'}}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name='star-four-points' size={40} style={{color: '#a1a1a1'}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <FontAwesome name='wechat' size={40} style={{color: '#a1a1a1'}}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <FontAwesome name='user' size={40} style={{color: '#a1a1a1'}}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
        height: 'auto',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#a1a1a1',
        width: 'auto',
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        marginTop: StatusBar.currentHeight || 0,
        paddingVertical: 10,
      },
});

export default Rodape;