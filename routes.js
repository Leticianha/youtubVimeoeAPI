import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PageYouTube } from './pageYoutube';
import { PageVimeo } from './pageVimeo';
import { Entrar } from './index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function Routes() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={Entrar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 1,
            borderTopColor: '#000',
            paddingBottom: 3,
            width: 322,
            flexDirection: "row",
            alignSelf: "center",
            borderRadius: 100,
            paddingHorizontal: 5,
            marginBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="pageYoutube"
          component={PageYouTube}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="youtube-play" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="pageVimeo"
          component={PageVimeo}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="vimeo" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  