import { ImSpinner2 } from 'react-icons/im';
import './spinner.css'
export function Spinner(){
    return (
        <div className='Spinner-div'>
            <ImSpinner2  className='Spinner Spinning' size={60}/>
        </div>
    )
}