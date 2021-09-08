import AppContext  from "../context/app_context.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}

export default MyApp;
