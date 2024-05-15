import type {RootState} from '../store'
import { useDispatch , useSelector} from 'react-redux'
import { increment , decrement} from '../counterSlice'
import { incrementByAmount } from '../counterSlice'


const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const handleClickAmount = (a:number) => {
        dispatch(incrementByAmount(a))
    }

    return (
    <div>
          <div style={{marginLeft: "20px"}}>
            {count}
            {
                count === 35 ? <span> - Default count</span> : ""
            }
        </div>
        <div className="flex gap-x-1">
        <button
        style={{backgroundColor: "blue", color: "white", marginTop: "15px"}}
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
            >
                increment
            </button>
            <button
             style={{backgroundColor: "blue", color: "white", margin:"0px 10px"}}
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
            >
                decrement
            </button>
            <button
             style={{backgroundColor: "blue", color: "white", margin:"0px 10px"}}
            aria-label='Decrement value'
            onClick={() => handleClickAmount(5)}
            >
                increment by 5
            </button>
            <button
             style={{backgroundColor: "blue", color: "white" , margin: "0px 10px"}}
            onClick={() => handleClickAmount(200)}
            >
                increment 200
            </button>
            <button
             style={{backgroundColor: "blue", color: "white", margin: "10px 0px"}}
            onClick={() => handleClickAmount(-100)}
            >
                decrement 100
            </button>
        </div>
    </div>
  )
}

export default Counter