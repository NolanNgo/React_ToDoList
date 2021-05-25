import React, { useContext } from 'react';
import {AppContext} from '../Context/ContextApp';
const InputItems = () => {
    const {newItems, inputElement , onChange , Enter} = useContext(AppContext);
    return (<div>
        <input id="input" type="text" value={newItems}  name="items" placeholder="Enter Your Work" required
            ref={inputElement}
            onChange={onChange}
            onKeyDown={Enter}
        ></input>
    </div>)
}

export default InputItems;