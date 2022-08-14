import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';

export default function Header() {
    return (
        <View>
            <Title>Hi, User!</Title>
        </View>
    );
}


const Title = styled.Text`
	font-size: 32px;
	font-weight: 400;
	color: #222B32;
    margin-left:25px;
    margin-top: 25px;
    height: 40px;
    line-height: 40px;
`;
