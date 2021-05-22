import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProdList from './screens/ProdList';
import EmpList from './screens/EmpList';
import OrderList from './screens/OrderList';
import ProdDetails from './screens/ProdDetails';
import OrderDetails from './screens/OrderDetails';
import EmpDetails from './screens/EmpDetails';
function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
        }}>
        Click on the button to go to the screen
      </Text>
      <TouchableOpacity style={style.touch}>
        <Text
          style={style.text}
          onPress={() => navigation.navigate('Products')}>
          Products
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.touch}>
        <Text
          style={style.text}
          onPress={() => navigation.navigate('Employees')}>
          Employees
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.touch}>
        <Text style={style.text} onPress={() => navigation.navigate('Orders')}>
          Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#68bd48',
  },
  touch: {
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    paddingTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
            borderBottomWidth: 2,
            borderBottomColor: '#000000',
          },
          headerTintColor: '#000000',
        }}>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen
          options={{ title: 'Products' }}
          name="Products"
          component={ProdList}
        />
        <Stack.Screen
          options={{ title: 'Employees' }}
          name="Employees"
          component={EmpList}
        />
        <Stack.Screen
          options={{ title: 'Orders' }}
          name="Orders"
          component={OrderList}
        />
        <Stack.Screen
          options={{ title: 'Product Details' }}
          name="ProdDetails"
          component={ProdDetails}
        />
        <Stack.Screen
          options={{ title: 'Employee Details' }}
          name="EmpDetails"
          component={EmpDetails}
        />
        <Stack.Screen
          options={{ title: 'Order Details' }}
          name="OrderDetails"
          component={OrderDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
