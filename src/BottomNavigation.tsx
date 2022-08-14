import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Empty from "./Empty";

import {SvgIcons} from "../assets/SvgIcons";
import SvgIcon from "../assets/SvgIcon";
import {ImageComponent, StyleSheet, Text, TextInput, View, Image, ImageBackground} from 'react-native';
// @ts-ignore
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

const TabLabel = ({label,focused}) => {
    return <Text style={{color:focused ? '#F16B59': '#D1D1D1'}}>{label}</Text>
}

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: ({ color,focused }) => (
                    <TabLabel label={`Home`} focused={focused}></TabLabel>
                ),
                tabBarIcon: ({ color,focused }) => (
                    <View><SvgIcon icon={SvgIcons.home} color={focused ? '#F16B59': '#D1D1D1'}/></View>
                )
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: ({ color,focused }) => (
                    <TabLabel label={`Favourite`} focused={focused}></TabLabel>
                ),
                tabBarIcon: ({ color,focused }) => (
                    <View><SvgIcon icon={SvgIcons.heartInactive} color={focused ? '#F16B59': '#D1D1D1'}/></View>
                )
            }} name="Favourite" component={Empty} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ color,focused }) => (
                    <CartView><SvgIcon icon={SvgIcons.cart} color={'#FFFFFF'}/></CartView>
                )
            }} name="Cart" component={Empty} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: ({ color,focused }) => (
                    <TabLabel label={`Orders`} focused={focused}></TabLabel>
                ),
                tabBarIcon: ({ color,focused }) => (
                    <View><SvgIcon icon={SvgIcons.orders} color={focused ? '#F16B59': '#D1D1D1'}/></View>
                )
            }} name="Orders" component={Empty} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color,focused }) => (
                    <ProfileView source={require('../assets/profile.png')}/>
                )
            }} name="Profile" component={Empty} />
        </Tab.Navigator>
    );

}

const CartView = styled.View`
  backgroundColor:#F16B59;
  position:absolute;
  bottom:5px;
  margin:5px;
  padding:20px;
  borderWidth:10px;
  border-radius:50px;
  borderColor:#FBFBFB
`;


const ProfileView = styled.Image`
  width:24px;
  height:24px;
  borderWidth:1px;
  border-radius:50px;
`;
