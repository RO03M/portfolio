import { createTheme, ThemeProvider } from "@mui/material"
import { useOSStore } from "./stores";
import OS from "./components/OS";

import "./index.css";
import ReactHotkeys from "react-hot-keys";

const App = () => {

	const theme = createTheme(useOSStore((store) => store.theme));

	const toggleDebug = useOSStore((store) => store.toggleDebug);

	return (
		<ReactHotkeys
			keyName={"alt+f3"}
			onKeyDown={toggleDebug}

		>
			<ThemeProvider
				theme={theme}
			>
				<OS/>
			</ThemeProvider>
		</ReactHotkeys>
	);
}

export default App;
