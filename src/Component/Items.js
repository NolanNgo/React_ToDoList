import React , {} from 'react';
import './Items.css';
import check from '../icon/check.svg';
import notCheck from '../icon/remove.svg';
import remove from '../icon/trash.svg';
import edit from '../icon/edit.svg';
// import edit_light from '../icon/edit_light.svg';
// import remove_light from '../icon/trash_light.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {ThemContext} from '../Context/ContextApp';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
const classNames = require('classnames');
// let linkEdit = edit;
// let linkRemove = remove

const Items = (props) =>{
    // const {Theme} = useContext(ThemContext);
    // const {isLight , Light , Dark} = Theme;
    // const style = isLight ? Light : Dark;
    const items = props.items;
    let url = notCheck;
    // let linkEdit = edit;
    // let linkRemove = remove
    // if(isLight=== false){
    //     linkEdit = edit_light;
    //     linkRemove = remove_light;
    // }


    if(items.isComplete){
        url = check;
    }
    return  (<div  className={classNames('items', {
        'complete': items.isComplete
    })}>
        <img onClick={() => props.onclick(items)} className='stick' src={url} alt={'stick'}/>
        <div className='content'>{props.items.name}</div>
        <div className='Update'>
            {/* <Button className='btn' onClick={() => props.onedit(items)} color="success">Sua</Button> */}
            <img onClick={() => props.onedit(items)} className='edit' src={edit} alt={'edit'}/>
            <img onClick={() => props.onDelete(items)} className='remove' src={remove} alt={'remove'}/>
            {/* <Button className='btn' onClick={() => props.onDelete(items)} color="primary">Xoa</Button> */}
        </div>
    </div>)
}
export default Items