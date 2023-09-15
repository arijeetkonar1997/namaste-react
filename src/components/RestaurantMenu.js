import {useState,useEffect} from 'react';
import ShimmerMenu from './ShimmerMenu';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';


const RestaurantMenu = () => {

    const [resInfo,setResInfo]=useState(null);
    const {resId} = useParams();

    useEffect(() =>{
        fetchMenu()
    },[])

    const fetchMenu = async() => {
        const data = await fetch(MENU_API+resId)
        const json = await data.json()
        setResInfo(json?.data?.cards)
    }
    if(resInfo===null)
    {
        return <ShimmerMenu/>
    }
        const {name}=resInfo[0]?.card?.card?.info
        const {itemCards}=resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return(
        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((res)=><li>{res?.card?.info?.name+" "+" Rs."+ (res?.card?.info?.price)/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu
