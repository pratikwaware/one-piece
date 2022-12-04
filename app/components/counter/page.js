"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setValue7, setValue5, resetCounter } from '../../../reduxReducers/counterSlice'

const Counter = () => {
  // with the hep pf useDispatch we can update the redux functions defined in reducer file
  const dispatch = useDispatch();

  // values from redux can fetched with useSelector by following three mwthods
  // 1
  const count = useSelector((state) => state.counter.value);
  const specifiedValue = useSelector((state) => state.counter.specifiedValue);
  // 2
  const counterData = useSelector((state) => state.counter);
  //3
  // const {count, specifiedValue} = useSelector((state) => state.counter)
  
  console.log("🚀 values of counterData.value and count are same", counterData?.value, count);
  console.log("🚀 values of counterData.specifiedValue and count are same", counterData?.specifiedValue, specifiedValue);
  console.log("🚀 ~ file: Counter.js:12 ~ Counter ~ counterData", counterData);

  useEffect(() => {
    dispatch(resetCounter())
  }, [])
  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          className="inline-flex w-auto justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="px-4 py-2" >{count}</span>
        <button
          aria-label="Decrement value"
          className="inline-flex w-auto justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className='mt-2'>
        <button
          aria-label="Increment value"
          className="inline-flex w-auto justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => dispatch(setValue5(5))}
        >
          Set Value 5
        </button>
        <span className="px-4 py-2" >{specifiedValue}</span>
        <button
          aria-label="Decrement value"
          className="inline-flex w-auto justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => dispatch(setValue7(7))}
        >
          Set Value 7
        </button>
      </div>
      <div className='mt-2'>
        <button
          aria-label="Increment value"
          className="inline-flex w-auto justify-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => dispatch(resetCounter())}
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default Counter