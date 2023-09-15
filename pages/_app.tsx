import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../components/Layout";
import { appPersistor, appStoreImplementation } from "../src/data/store-implementation/app-store-implementation";
import "../styles/globals.css";


const MyApp = ({ Component, pageProps }) => {
  const tempComponent = (
    <Component {...pageProps} />
  );

  let templateLayout = <>{tempComponent}</>;
  if (!pageProps.noLayout) {
    templateLayout = (
      <Layout>
        {tempComponent}
      </Layout>
    );
  }

  return (
    <Provider store={appStoreImplementation}>
      <PersistGate persistor={appPersistor}>
      {templateLayout}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
