import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ElementsListScreen from './src/screens/ElementsListScreen/ElementsListScreen';
import ElementDetailsScreen from './src/screens/ElementDetailsScreen/ElementDetailsScreen';
import ErrorScreen from './src/screens/ErrorScreen/ErrorScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="ElementsListScreen" component={ElementsListScreen} />
        <Stack.Screen name="ElementDetailsScreen" component={ElementDetailsScreen} />
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;