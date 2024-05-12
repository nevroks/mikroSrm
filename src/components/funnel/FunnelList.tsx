import {useAppSelector} from "../../hooks/ReduxHooks.ts";
import FunnelItem from "./FunnelItem.tsx";


const FunnelList = () => {
    const funnels=useAppSelector(state => state.funnel.funnels)
    return (
        <div>
            {funnels.map(funnel=>{
                return <FunnelItem funnel={funnel} key={funnel.name}/>
            })}
        </div>
    );
};

export default FunnelList;