import { StatusBar } from 'expo-status-bar';
import {
    ImageComponent,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    ScrollView,
    FlatList, ListRenderItem
} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import Search from "../assets/SvgIcon";
import Ionicons from '@expo/vector-icons/Ionicons'
import {SvgIcons} from "../assets/SvgIcons";
import SvgIcon from "../assets/SvgIcon";

type items = {
    id: number
    name: string
    photo: string
    price: number
    favoriteCount: number
    dietaryChoice: string
    desc: string
    cuisineType: string
}


interface MenuProps {
    data: items[];
}

export default function Menu({data}:MenuProps) {

    const renderItem: ListRenderItem<items> = ({item}) =>{
        return <View key={item.id}>
            <MenuView>
                <ImageBackground style={{height:150,width:'100%'}} imageStyle={{ borderRadius: 12}} source={{ uri: item.photo }} >
                    <FavouriteCount>{item.favoriteCount}</FavouriteCount>
                    <FavouriteView><SvgIcon icon={SvgIcons.heartActive}></SvgIcon></FavouriteView>
                    <AddView><Ionicons name="md-add-sharp" size={32} color="white" /></AddView>
                </ImageBackground>
                <View style={{margin:16}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View><Text style={{fontSize:16,fontWeight:"700"}}>{item.name}</Text></View>
                        <PaleoView><SvgIcon icon={SvgIcons.paleo}></SvgIcon></PaleoView>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <SvgIcon icon={SvgIcons.calories}></SvgIcon>
                        <Text style={{color:'#222B32',fontSize:12,opacity:0.5}}> 176 Kcal</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{color:'#222B32',fontSize:12,fontWeight:"500"}}>
                            {item.desc}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{color:'#222B32',fontSize:16,fontWeight:"700"}}>
                            $ {item.price}
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <SvgIcon icon={SvgIcons.pepperActive}></SvgIcon>
                            <SvgIcon icon={SvgIcons.pepperActive}></SvgIcon>
                            <SvgIcon icon={SvgIcons.pepperInactive}></SvgIcon>
                        </View>
                    </View>
                </View>


            </MenuView>



        </View>
    }
    return (
        <FlatList
        data={data}
        contentContainerStyle={{marginTop:20}}
        initialNumToRender={10}
        keyExtractor={(item) => item.id}
        removeClippedSubviews={true}
        renderItem={renderItem}/>
    );
};


const MenuView = styled.View`
  flexDirection: column;
  height: 290px;
  borderColor: white;
  width: 90%;
  backgroundColor: white;
  border-radius: 12px;
  marginHorizontal: 20px;
  marginVertical:10px;
  shadowColor: #222b32;
  shadowOffset: 0px 0px;
  shadowOpacity: 0.2;
  shadowRadius: 3px;
  elevation: 5;
`;

const FavouriteView = styled.TouchableOpacity`
  position:absolute;
  top:10px;
  right:10px;
  backgroundColor:#FFFFFF;
  border-radius:50px;
  padding:10px;
`;

const FavouriteCount = styled.Text`
  position:absolute;
  top:20px;
  right:60px;
  color: #FFFFFF
`;

const AddView = styled.TouchableOpacity`
  position:absolute;
  bottom:0px;
  right:0px;
  backgroundColor:#F16B59;
  borderTopLeftRadius:12px;
  borderBottomRightRadius:12px;
  padding:5px;
`;

const PaleoView = styled.View`
  borderWidth:1px;
  borderColor:#FFFFFF;
  border-radius:50px;
  `;
