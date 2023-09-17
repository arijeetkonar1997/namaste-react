
import ShimmerMenu from './ShimmerMenu';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)

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
