import React from "react";
import { SvgXml } from "react-native-svg";
interface SvgIconProps {
       icon: string;
       color?: string;
    }
export default function SvgIcon({icon,color}:SvgIconProps){
    const Svg = () => <SvgXml xml={icon} fill={color}/>;
    return <Svg/>
}
