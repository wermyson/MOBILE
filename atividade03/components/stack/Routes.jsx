import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import MyModal from "./MyModal";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Group>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name='MyModalScreen' component={MyModal} options={{headerShown: false}}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default Routes;