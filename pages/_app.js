import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "styles/global.scss";

/**
 * Entry point
 */

// Manually add fontawesome styles
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
 return <Component {...pageProps} />;
}

export default MyApp;
