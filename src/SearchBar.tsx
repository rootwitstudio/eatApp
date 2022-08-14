import {TextInput, View} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import SvgIcon from "../assets/SvgIcon";
import {SvgIcons} from "../assets/SvgIcons"
import {useState} from "react";


export default function SearchBar({searchValue,setSearchValue}) {
    return (
        <View>
            <Title>What would you like to eat today?</Title>
            <SearchView>
               <SearchIcon><SvgIcon icon={SvgIcons.search}></SvgIcon></SearchIcon>
                <SearchPlaceHolder><TextInput  onChangeText={(text:String)=> setSearchValue(text)} placeholder={"Search something..."}></TextInput></SearchPlaceHolder>
            </SearchView>
            {searchValue && <View><SearchText>Search results for {searchValue} </SearchText></View>}

        </View>
    );
}


const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #222B32;
  opacity: 0.5;
  margin-left:20px;
`;

const SearchText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #222B32;
  opacity: 0.5;
  margin-left:20px;
`;


const SearchView = styled.View`
  flex-direction: row;
  height: 60px;
  border-color: white;
  width: 90%;
  background-color: white;
  border-radius: 12px;
  padding: 0 10px;
  margin: 10px 20px;
  shadowColor: #222b32;
  shadowOffset: 0px 0px;
  shadowOpacity: 0.2;
  shadowRadius: 3px;
  align-items: center;
  `;

const SearchIcon = styled.View`
    margin-right: 10px;
`;

const SearchPlaceHolder = styled.View`
    font-Size:20px
`;
