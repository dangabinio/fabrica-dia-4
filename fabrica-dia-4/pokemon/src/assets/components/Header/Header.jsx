import styles from './Header.module.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <header className={styles.header}>
            <h1> HEADER</h1>

            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Pokemon">Pokemon</Link></li>
                
            </ul>
        </header>
        
    )
}

export default Header