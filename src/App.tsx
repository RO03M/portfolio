import { createTheme, ThemeProvider } from "@mui/material"
import { useOSStore } from "./stores";
import { useHotkeys } from "react-hotkeys-hook";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import React, { Suspense, useEffect, useState } from "react";
import BootScreen from "./components/Boot/BootScreen";
import { isMobileOrTablet } from "./helpers/isMobileOrTablet";
import Mobile from "./components/Mobile";

const OSLoadingScreen = React.lazy(() => import("./components/Boot/OSLoadingScreen"));
const HomeScreen = React.lazy(() => import("./components/Boot/HomeScreen"));
const OS = React.lazy(() => import("./components/OS"));

const App = () => {

	const [timer, setTimer] = useState<number>(0);
	const [loaded, setLoaded] = useState<boolean>(false);
	const [homeScreen, setHomeScreen] = useState<boolean>(true);

	const theme = createTheme(useOSStore((store) => store.theme));

	const toggleDebug = useOSStore((store) => store.toggleDebug);

	useHotkeys("shift+d", toggleDebug);

	useEffect(() => {
		if (sessionStorage.getItem("visitedInThisSession")) setLoaded(true);
		const interval = setInterval(() => setTimer((prev) => prev < 60 ? prev + 1 : prev), 1000);

		return () => clearInterval(interval);
	}, []);

	if (isMobileOrTablet()) return <Mobile/>
	
	return (
		<ThemeProvider
			theme={theme}
		>
			{timer < 6 && !sessionStorage.getItem("visitedInThisSession") && (<BootScreen/>)}
			<Suspense>
				<AnimatePresence>
					{(timer >= 6 && !loaded && !sessionStorage.getItem("visitedInThisSession")) && (<OSLoadingScreen setLoaded={setLoaded}/>)}
					{loaded && homeScreen && (
						<HomeScreen
							onSignIn={() => setHomeScreen(false)}
						/>
					)}
				</AnimatePresence>
				<OS/>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
