import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './counterSlice';

const Counter=()=> {
    // const[counter,setCounter]=useState(0);
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();

    const addCount=()=>{
        // if(counter<100)
        // setCounter(counter+1);
      dispatch (increment());
    }

    const decCount=()=>{
      // if(counter>0)
      //     setCounter(counter-1);
      dispatch (decrement());
    }
       
  return (
    <div><center>
        
       <button className="incbutton" onClick={addCount} >Increment +</button>
       <h1 className='number'>{count}</h1>
       <button className="decbutton" onClick={decCount} >Decrement -</button>
       </center>
    </div>
  )
}


export default Counter