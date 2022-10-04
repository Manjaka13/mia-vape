import "styles/global.scss";
// import "helpers/icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

/**
 * Entry point
 */

// Manually add fontawesome styles
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
 return <Component {...pageProps} />;
}

export default MyApp;
