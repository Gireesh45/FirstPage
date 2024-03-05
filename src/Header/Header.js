import './Header.css';
import { LuBell } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
export const Header = () => (
    <div>
       <div className="header-container">
       <div className='bell-container menu'>
<IoMdMenu/>
            </div>
        <div>
        <p className="title">S K I N C L U B</p>
        <p className="sub-title">COSMOTIC DOCTORS</p>
        </div>
       
        <div className='time-date-container'>
            <p className='date'>Sunday, 20 August</p>
            <p className='time'>1:50 pm</p>
            <div className='bell-container'>
                <LuBell/>
            </div>
        </div>
        </div> 
    </div>
)