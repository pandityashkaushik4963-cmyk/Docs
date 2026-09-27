import LiquidButton from '../components/LiquidButton'
import LiquidButtonRight from '../components/LiquidButtonRight'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='back w-full h-full bg-linear-to-b  text-white flex justify-center items-center flex-col  from-[#060b13] via-[#0B0F19] to-[#111827]'>
        <h1 className='main text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 '>Notes App</h1>
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