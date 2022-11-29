import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator()

const RoutesTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen}/>
            <Tab.Screen name='DetailsScreen' component={DetailsScreen}/>
        </Tab.Navigator>
    );
}

export default RoutesTab;