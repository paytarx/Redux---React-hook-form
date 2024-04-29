import type {RootState} from './redux/store'
import { useDispatch , useSelector} from 'react-redux'
import { increment , decrement} from './redux/counterSlice'
import { incrementByAmount } from './redux/counterSlice'


const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const handleClickAmount = (a:number) => {
        dispatch(incrementByAmount(a))
    }

    return (
    <div>
          <div>
            {count}
        </div>
        <div className="flex gap-x-1">
        <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
            >
                increment
            </button>
            <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
            >
                decrement
            </button>
            <button
            aria-label='Decrement value'
            onClick={() => handleClickAmount(5)}
            >
                increment by 5
            </button>
            <button
            onClick={() => handleClickAmount(200)}
            >
                increment 200
            </button>
            <button
            onClick={() => handleClickAmount(-100)}
            >
                decrement 100
            </button>
        </div>
    </div>
  )
}

export default Counter