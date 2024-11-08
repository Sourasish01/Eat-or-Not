import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useState } from "react";
import NavCss from "./navbar.module.css";

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleColorMode = () => {
		setIsDarkMode(!isDarkMode);
		document.body.classList.toggle(NavCss.darkMode, !isDarkMode);
	};

	return (
		<div className={NavCss.navbarContainer}>
			<div className={NavCss.navbar}>
				<h1 className={NavCss.navbarTitle}>
					<Link to="/">Eat or Not</Link>
				</h1>

				<div className={NavCss.navbarActions}>
					<Link to="/create">
						<button className={NavCss.iconButton}>
							<span className={NavCss.plusIcon}>+</span>
						</button>
					</Link>
					<button className={NavCss.iconButton} onClick={toggleColorMode}>
						{isDarkMode ? <LuSun size={20} /> : <IoMoon size={20} />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
