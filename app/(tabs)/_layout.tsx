import { Tabs } from 'expo-router';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TopicScreen from '../topics'; 

export default function stackLayout() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="topics" >
      <Stack.Screen name="topics" options={{ headerShown: false }} component={TopicScreen} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} component={TabLayout}/>
      </Stack.Navigator>
  );
}

export function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#242423',
      },
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search-circle-sharp' : 'search-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add-circle-sharp' : 'add-circle-outline'} color={color} />),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} />),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle-sharp' : 'person-circle-outline'} color={color} />),}}
      />
    </Tabs> 
  );
}