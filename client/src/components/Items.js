import React, { useContext} from 'react';
// import itemData from '../assets/itemData';
// import objectives from '../assets/objectives';
// import rewards from '../assets/rewards';
import '../css/Item.css';
import TrackerContext from '../context/Context'


// export default class Items extends Component {
export default function Items(props) {
    const data = useContext(TrackerContext)
    // render(){
        console.log(data)
        return (
            <div>
                {data && Object.keys(data).map((item, i) => {
                    // console.log(data[item].cur)
                    if(data[item].rewards !== undefined){
                        return (
                            <div key={i}>
                                <div className={`item ${data[item].current[0]}`}> </div>
                                <div className={`item ${data[item].rewards[0]}`}> </div>
                            </div>
                        )
                    } else {
                        return(
                            <div className={`item ${data[item].current[0]}`} key={i}> </div>
                        )
                    }
                })}
            </div>
            // <div>
            //     <div className='row'>
            //         {/* <button onClick={() => props.handleTrackerContent('bow', 'counter', 100 )}>click</button> */}
            //         {/* <button onClick={() => this.props.toggleDungeon(this.prop.seedData.bow, 'bow')}>click</button> */}
            //         <div className={`item ${itemData.bow[0]}`} onClick={() => props.handleTrackerContent('bow')} ></div>
            //         <div className={`item ${itemData.boomerang[0]}`}></div>
            //         <div className={`item ${itemData.hookshot[0]}`} onClick={() => props.handleTrackerContent('hookshot')}></div>
            //         <div className={`item ${itemData.bomb[0]}`}></div>
            //         <div className={`item ${itemData.powder[0]}`}></div>
            //         <div className={`item ${itemData.mushroom[0]}`}></div>
            //         <div className={`item ${objectives.EP[0]}`} ></div>
            //     </div> 


            //     <div className='row'>
            //         <div className='item'>{itemData.firerod}</div>
            //         <div className='item'>{itemData.icerod}</div>
            //         <div className='item'>{itemData.bombos}</div>
            //         <div className='item'>{itemData.ether}</div>
            //         <div className='item'>{itemData.quake}</div>
            //         <div className='item'>{itemData.shovel}</div>
            //         <div className='item'>{objectives.DP}</div>
            //     </div>
                    
            //     <div className='row'>
            //         <div className='item'>{itemData.lantern}</div>
            //         <div className='item'>{itemData.hammer}</div>
            //         <div className='item'>{itemData.flute}</div>
            //         <div className='item'>{itemData.net}</div>
            //         <div className='item'>{itemData.book}</div>
            //         <div className='item'>{itemData.moonPearl}</div>
            //         <div className='item'>{objectives.TH}</div>
            //     </div>

            //     <div className='row'>
            //         <div className='item'>{itemData.bottle}</div>
            //         <div className='item'>{itemData.somaria}</div>
            //         <div className='item'>{itemData.byrna}</div>
            //         <div className='item'>{itemData.cape}</div>
            //         <div className='item'>{itemData.mirror}</div>
            //         <div className='item'>{objectives.gomode}</div>
            //         <div className='item'>{objectives.agahnim}</div>
            //     </div>

            //     <div className='row'>
            //         <div className='item'>{itemData.gloves}</div>
            //         <div className='item'>{itemData.boots}</div>
            //         <div className='item'>{itemData.flippers}</div>
            //         <div className='item'>{itemData.magic}</div>
            //         <div className='item'>{itemData.sword}</div>
            //         <div className='item'>{itemData.shield}</div>
            //         <div className='item'>{itemData.tunic}</div>
            //     </div>

            //     <div className='row'>
            //         <div className='item'>{objectives.PD}</div>
            //         <div className='item'>{objectives.SP}</div>
            //         <div className='item'>{objectives.SW}</div>
            //         <div className='item'>{objectives.TT}</div>
            //         <div className='item'>{objectives.IP}</div>
            //         <div className='item'>{objectives.MM}</div>
            //         <div className='item'>{objectives.TR}</div>
            //     </div>

            // </div>
        )
    // }
}


