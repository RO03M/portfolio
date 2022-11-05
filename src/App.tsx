import { createTheme, ThemeProvider } from "@mui/material"
import { useOSStore } from "./stores";
import OS from "./components/OS";

import "./index.css";

const App = () => {

	const theme = createTheme(useOSStore((store) => store.theme));

	return (
		<ThemeProvider
			theme={theme}
		>
			<OS/>
		</ThemeProvider>
	);
}

export default App;
