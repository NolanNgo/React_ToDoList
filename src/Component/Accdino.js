import React,{useState} from 'react';
import './styleAcc.css';

// class Accordination extends Component{
function Accordination(props){
    const [isCollap , setCollap] = useState(true);

    function clickFuntion(e){
        setCollap(!isCollap);

    }
        const {heading , children} = props;
        return(
            <div className='accordination'>
                <h1 className='Heading' onClick={clickFuntion} >{heading}</h1>
                {!isCollap && <div className='content'>{children}</div>}
            </div>
        );
}
export default Accordination;