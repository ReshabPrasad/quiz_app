import { useEffect, useState } from "react";
import GeoLocation from "./Geolocation";

export default function GeoLocationContainer(){

    const [latitude,setlatitude] = useState(null);
    const [longitude,setlongitude] = useState(null);


    function handlelocation(coordinates){
        setlatitude(coordinates.coords.latitude);
        setlongitude(coordinates.coords.longitude);
    }

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(handlelocation);
        }
    },[navigator])

    return (
        <GeoLocation latitude={latitude} longitude={longitude} />

    )
}