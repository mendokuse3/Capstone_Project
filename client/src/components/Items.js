import React, {Component} from 'react';
import itemData from '../assets/itemData';
import dungeons from '../assets/dungeons';
import etc from '../assets/etc';
import '../css/Item.css';


export default class Items extends Component {


    render(){
        return (
            <div>
                <div className='row'>
                    <div className={`item ${itemData.bow[0]}`} onClick={() => this.props.toggleItem(itemData.bow, 'bow')}></div>
                    <div className={`item ${itemData.boomerang[0]}`}></div>
                    <div className={`item ${itemData.hookshot[0]}`}></div>
                    <div className={`item ${itemData.bomb[0]}`}></div>
                    <div className={`item ${itemData.powder[0]}`}></div>
                    <div className={`item ${itemData.mushroom[0]}`}></div>
                    <div className={`item ${dungeons.EP[0]} ${etc.crystal[0]}`} onClick={() => this.props.toggleDungeon(etc.crystal, dungeons.EP)}></div>
                </div>

                <div className='row'>
                    <div className='item'>{itemData.firerod}</div>
                    <div className='item'>{itemData.icerod}</div>
                    <div className='item'>{itemData.bombos}</div>
                    <div className='item'>{itemData.ether}</div>
                    <div className='item'>{itemData.quake}</div>
                    <div className='item'>{itemData.shovel}</div>
                    <div className='item'>{dungeons.DP}{etc.crystal}</div>
                </div>
                    
                <div className='row'>
                    <div className='item'>{itemData.lantern}</div>
                    <div className='item'>{itemData.hammer}</div>
                    <div className='item'>{itemData.flute}</div>
                    <div className='item'>{itemData.net}</div>
                    <div className='item'>{itemData.book}</div>
                    <div className='item'>{itemData.moonPearl}</div>
                    <div className='item'>{dungeons.TH}{etc.crystal}</div>
                </div>

                <div className='row'>
                    <div className='item'>{itemData.bottle}</div>
                    <div className='item'>{itemData.somaria}</div>
                    <div className='item'>{itemData.byrna}</div>
                    <div className='item'>{itemData.cape}</div>
                    <div className='item'>{itemData.mirror}</div>
                    <div className='item'>{etc.gomode}</div>
                    <div className='item'>{etc.agahnim}</div>
                </div>

                <div className='row'>
                    <div className='item'>{itemData.gloves}</div>
                    <div className='item'>{itemData.boots}</div>
                    <div className='item'>{itemData.flippers}</div>
                    <div className='item'>{itemData.magic}</div>
                    <div className='item'>{itemData.sword}</div>
                    <div className='item'>{itemData.shield}</div>
                    <div className='item'>{itemData.tunic}</div>
                </div>

                <div className='row'>
                    <div className='item'>{dungeons.PD}{etc.crystal}</div>
                    <div className='item'>{dungeons.SP}{etc.crystal}</div>
                    <div className='item'>{dungeons.SW}{etc.crystal}</div>
                    <div className='item'>{dungeons.TT}{etc.crystal}</div>
                    <div className='item'>{dungeons.IP}{etc.crystal}</div>
                    <div className='item'>{dungeons.MM}{etc.crystal}</div>
                    <div className='item'>{dungeons.TR}{etc.crystal}</div>
                </div>

            </div>
        )
    }
}

