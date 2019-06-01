import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
//import Login from '../screens/Login';
//import Browse from '../screens/Browse';
//import Explore from '../screens/Explore';
//import Product from '../screens/Product';
//import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator({
    Welcome,
    //Login,
    //Browse,
    //Explore,
    //Product,
    //Settings,
},
    {
        defaultNavigationOptions: {
            headerStyle: {},
            headerBackImage: <Image />,
            headerBackTitle: null,
            headerLeftContainerStyle: {},
            headerRightContainerStyle: {},
        }
    });

export default createAppContainer(screens);