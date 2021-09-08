import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./main/theme/MaterialUITheme";
import { I18nextProvider } from "react-i18next";
import i18n from "./main/i18n";
import CatScreen from "./cat/CatScreen";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <CatScreen />
        </I18nextProvider>
      </ThemeProvider>
    );
  }
}

export default App;
