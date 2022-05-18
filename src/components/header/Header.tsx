import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
      <header className='header'>
        <nav>
            <ul>
                <li>
                 <Link to="/">INÍCIO</Link> 
                </li>
                <li>
                  <a href='mailto:gabrielbaldez7@gmail.com'>CONTATO</a>
                </li>
            </ul>    
        </nav>
    </header>
  );
}
export default Header;