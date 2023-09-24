
import {useState} from 'react';
import ShimmerMenu from './ShimmerMenu';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    const [showIndex,setShowIndex]= useState(null)

    if(resInfo===null)
    {
        return <ShimmerMenu/>
    }
        const {name}=resInfo[0]?.card?.card?.info
        const {itemCards}=resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        const categories =resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        console.log(categories)
    return(
        <div className="text-center">
            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <h2 className='font-bold text-lg'>Menu</h2>
            <ul>
            {/* {itemCards.map((res)=><li>{res?.card?.info?.name+" "+" Rs."+ (res?.card?.info?.price)/100}</li>)} */}
            {categories.map((category,index)=> <RestaurantCategory setShowIndex={() => setShowIndex(index)} showItem={index===showIndex?true:false} data={category?.card?.card}/>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu
