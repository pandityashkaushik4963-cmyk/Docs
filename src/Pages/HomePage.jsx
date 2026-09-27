import React from 'react'
import LiquidButton from '../components/LiquidButton'
import LiquidButtonRight from '../components/LiquidButtonRight'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='back w-full h-full bg-linear-to-b from-cyan-950 via-cyan-900 to-orange-950 text-white flex justify-center items-center flex-col'>
        <h1 className='main '>Notes App</h1>
        <div className='mb-3'>
          <Link to="/AddTodoPage">
            <LiquidButton text="Add Todo" />
          </Link>
        </div>

        <div>
          <Link to="/YourTaskPage">
            <LiquidButtonRight text="Your Todos" />
          </Link>
        </div>
    </div>
  )
}

export default HomePage