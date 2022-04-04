/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, Image, StyleSheet, Text} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileMessagingScreen from '../screens/ProfileMessagingScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import EditProfile from "../screens/EditProfile";
import Header from './Header';
import LoginScreen from '../screens/LoginScreen';
import {RootState} from "../store/Store";
import {useSelector} from "react-redux";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const {value} = useSelector((state:RootState)=>state.user)
  // @ts-ignore
    return (
        value ?

    <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{
            header:(()=><Header/>)
            }}/>
            <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>

            :

            <Stack.Navigator>
                <Stack.Screen name="Root" component={LoginScreen} options={{
                    header:(()=><Header/>)
                }}/>
            </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const {value} = useSelector((state:RootState)=>state.user)
  return (
    <BottomTab.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarShowLabel: false
      }}
    >
        <BottomTab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                title:'',
                tabBarIcon: () => <Image style={styles.icon} source={require("../assets/images/logo.png")} />,
                headerShown:false
            }}
        />
        <BottomTab.Screen
            name="Messages"
            component={ProfileMessagingScreen}
            options={{
                title: '',
                tabBarIcon: () => <Image style={styles.messageIcon} source={require('../assets/images/img.png')} />,
                headerShown:false
            }}
        />
    </BottomTab.Navigator>
  );
}


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
    messageIcon: {
        width:30,
        height:30
    },
    icon:{
        width: 30,
        height: 30
    }
})