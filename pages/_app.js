import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/global.scss";
import { config } from "@fortawesome/fontawesome-svg-core";

// Manually add fontawesome styles
config.autoAddCss = false;

/**
 * Entry point
 */

function MyApp({ Component, pageProps }) {
 return <Component {...pageProps} />;
}

export default MyApp;
