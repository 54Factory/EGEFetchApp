import React from "react";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/store";
import PublicRoutes from "./router";
import { ThemeProvider } from "styled-components";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";
import themes from "./settings/themes";
import AppLocale from "./languageProvider";
import config, { getCurrentLanguage } from "./containers/LanguageSwitcher/config";
import { themeConfig } from "./settings";
import DashAppHolder from "./dashAppStyle";

const initialState = window.__INITIAL_STATE__ || { auth: { currentUser: {} } }
const store = configureStore(initialState)

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];

const DashApp = () => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <DashAppHolder>
          <Provider store={store}>
            <PublicRoutes history={history} />
          </Provider>
        </DashAppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);


export default DashApp;
export { AppLocale, store };
