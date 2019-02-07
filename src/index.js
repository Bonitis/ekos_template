import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                {/* Replace with your main entry container */}
                <div>hello world</div>
            </MuiThemeProvider>
        </div>
    );
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#008eff",
            light: "#84c9ff",
            dark: "#005ea8",
            contrastText: "#fff",
        },
        secondary: {
            main: "#939399",
            light: "#f0f0f0",
            dark: "#484848",
        },
        error: {
            main: "#e31c3d",
        },
    },
    typography: {
        useNextVariants: true,
    },
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
