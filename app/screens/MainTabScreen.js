import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
//import CoCard from './Card'
import InfoScreen from './info';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import WebviewScreen from './WebviewScreen';
import ServiScreen  from './ServiScreen';
import { TabRouter } from '@react-navigation/routers';
import { DrawerContent } from './DrawerContent';
import Info1Screen from'./Info1';
import Info2Screen from './Info2'

const HomeStack = createStackNavigator();
const WebStack= createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfilesStack = createStackNavigator();
const ExploresStack = createStackNavigator();
const ServiStack=createStackNavigator();
const InfoStack=createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const info1Stack=createStackNavigator();
const info2Stack=createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Emergencia"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Emergencia',
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-call" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'SOS',
        
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-map" color={color} size={26} />
          ),
        }}
     />
      <Tab.Screen
        name="Info"
        component={InfoStackScreen}
        options={{
          tabBarLabel: 'Información',
        
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-Info" color={color} size={26} />
          ),
        }}
      />
       {/* <Tab.Screen
        name="Settings"
        component={DrawerContent}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
    
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#AB2F74',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'HATI-HATI',
        /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
        }} />
<WebStack.Screen name="Denuncia" component={WebviewScreen} options={{
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />
<ProfilesStack.Screen name="Lugares Seguro" component={ProfileScreen} options={{
         /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />
<DetailsStack.Screen name="Numero de Emergencia" component={DetailsScreen} options={{
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#AB2F74',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        title:'Numeros de Emergencia',
       /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
        }} />
</DetailsStack.Navigator>
);


const ServiStackScreen = ({navigation}) => (
  <ServiStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#AB2F74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ServiStack.Screen name="Servio social" component={ServiScreen} options={{
          title:'Servicios Sociales',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </ServiStack.Navigator>
  );

const ProfileStackScreen = ({navigation}) => (
  <ProfilesStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#AB2F74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ProfilesStack.Screen name="Lugares Seguros" component={ProfileScreen} options={{
          title:'Lugares Seguros',
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />
  
  </ProfilesStack.Navigator>
  );
  const ExploreStackScreen = ({navigation}) => (
    <ExploresStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#AB2F74',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
          <ExploresStack.Screen name="Setting" component={ExploreScreen} options={{
            title:'Informacion',
           /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
         }} />
    
  </ExploresStack.Navigator>
  );

  const InfoStackScreen = ({navigation}) => (
    <InfoStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#AB2F74',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <InfoStack.Screen name="informacion" component={InfoScreen} options={{
            title:'Informacion',
           /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
            }} />
            <info1Stack.Screen name="Infor" component={Info1Screen} options={{
              title:'Qué hacer en caso de violencia'
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />
            <info2Stack.Screen name="Informa" component={Info2Screen} options={{
              title:'Violencia de Genero'
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />

  
    </InfoStack.Navigator>
  );
  