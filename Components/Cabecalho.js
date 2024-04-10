import {SafeAreaView, StatusBar, StyleSheet, Image} from 'react-native';

const Cabecalho = (props) => {
    return(
        <SafeAreaView style={styles.cabecalho}>
            <Image
                source={require('../assets/logo.png')}
                style={{width: 200, height: 100}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cabecalho:{
        marginTop: StatusBar.currentHeight || 0,
        height: 'auto',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#a1a1a1',
        width: 'auto',
        alignItems: 'center',
      },
});

export default Cabecalho;