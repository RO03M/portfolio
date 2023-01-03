import { createTheme, ThemeProvider } from "@mui/material"
import { useOSStore } from "./stores";
import OS from "./components/OS";

import "./index.css";
import { useHotkeys } from "react-hotkeys-hook";

const App = () => {

	const theme = createTheme(useOSStore((store) => store.theme));

	const toggleDebug = useOSStore((store) => store.toggleDebug);

	useHotkeys("shift+d", toggleDebug);

	return (
		<ThemeProvider
			theme={theme}
		>
			<OS/>
		</ThemeProvider>
	);
}

export default App;
