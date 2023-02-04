import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//screens
import EditScreen from '../screens/EditScreen';
import InterestScreen from '../screens/InterestScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Edit page' component={EditScreen}/>
            <Tab.Screen name = 'Interest Screen' component={InterestScreen}/>
        </Tab.Navigator>
    );  
} 

export default Tabs;