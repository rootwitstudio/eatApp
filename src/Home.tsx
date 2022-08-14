import { StatusBar } from 'expo-status-bar';
// @ts-ignore
import styled from 'styled-components/native';
import Header from "./Header";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import {useGetItemsQuery} from "./generated/graphql";
import {useEffect, useState} from "react";


export default function Home() {
    const {  data } = useGetItemsQuery({endpoint:'https://mockend.com/lakhanmandloi/fake-api/graphql'}, {})
    const [searchValue,setSearchValue] = useState(null);
    const [filterValue,setFilterValue] = useState([]);
    useEffect(()=>{
        if(searchValue){
            let result = data?.items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
            setFilterValue(result);
        }else{
            setFilterValue(data?.items);
        }
    },[searchValue,data])
    return (
        <Container>
            <StatusBar style="auto" />
                <Header></Header>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}></SearchBar>
                <Menu data={filterValue}></Menu>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex: 1;
	background-color: #FBFBFB;
`;
