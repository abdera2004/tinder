import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Chat from './pages/Chat';

const Stack = createNativeStackNavigator();

const Routes = () =>{
    return(
        
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            /> 
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
            />
        </Stack.Navigator>

    );
};

export default Routes;