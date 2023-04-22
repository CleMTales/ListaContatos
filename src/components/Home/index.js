import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../Header';
import AdicionarContato from '../AdicionarContato';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#C1BCCC",
          tabBarActiveBackgroundColor: "#275B3C",
          tabBarInactiveBackgroundColor: "#47A86E",
          tabBarStyle: {
            borderTopColor: '000000',
            borderTopWidth: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            position: 'absolute',
            height: '7%',
          },
          tabBarLabelStyle: {
            fontSize: 15,
            flex: 1,
            flexDirection: 'row',
          },

          tabBarIconStyle: { display: "flex" },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#8DE5F0',
          }
        }}
      >
        <Screen
          name="Lista de Contatos"
          component={Header}
          initialParams={{ shouldUpdate: true }}
          options={{
            tabBarLabel: "Lista de Contatos",
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome name="list-alt" size={24} color={"#000000"} />
            )
          }}
        />
        <Screen
          name="Adicionar Contato"
          component={AdicionarContato}
          initialParams={{ contato: { id: -1, info: [] } }}
          options={{
            tabBarLabel: "Adicionar Contato",
            cardStyle: { backgroundColor: 'transparent' },
            headerBackgroundContainerStyle: {
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            },
            headerShown: false,
            tabBarIcon: () => (
              <AntDesign name="adduser" size={24} color={'#000000'} />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

