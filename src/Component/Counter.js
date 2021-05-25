import React,{useState} from 'react';
import './styleAcc.css';

// class Counter extends Component{
function Counter(props){
    const [isCounter , setCounter] = useState(0);
    function increase(e){
        setCounter(isCounter +1);
    }
    function decrease(e){
        setCounter(isCounter - 1);
    }

        console.log('Counter Render')
        return(
            <div className="Counter">
                <button onClick={increase}>+</button>
                <div>{isCounter}</div>
                <button onClick={decrease}>-</button>
            </div>
        )
    // componentDidMount(){
    //     console.log('Counter did mount')
    // }
    // componentDidUpdate(){
    //     console.log('Counter Update')
    // }
    // shouldComponentUpdate(prevProps,prevState){
    //     if(this.state.isCounter === prevState.isCounter){
    //         return false;
    //     }
    //     return true
    // }

    
}
export default Counter