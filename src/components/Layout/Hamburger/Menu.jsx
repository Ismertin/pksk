import {Link, useNavigate} from "react-router-dom";
import cn from "clsx";
import styles from "./Hamburger.module.scss"
import {menu} from "./Menu.data.js";
import Social from "../../UI/Social/Social.jsx";
const Menu = ({isShow,setIsShow}) => {
    setIsShow = false
    const nav = useNavigate()
    return (
        <nav className={cn(styles.menu, {
            [styles.show]: isShow
        })}>
            <ul>
                {menu.map((item, index) =>(
                    <li key={`_menu_${index}`}>
                        <Link to={item.link}>{item.title}</Link>

                    </li>
                ))}
                <Social className={styles.social} />
            </ul>

        </nav>
    );
};

export default Menu;