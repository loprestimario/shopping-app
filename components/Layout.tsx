import React from 'react';
import NavBar from "./NavBar";

type Props = {}

const Layout: React.FC<Props> = ({children}) => {
	return (
		<>
			<NavBar/>
			<div>
				<main>
					{children}
				</main>
			</div>
		</>);
};

export default Layout;