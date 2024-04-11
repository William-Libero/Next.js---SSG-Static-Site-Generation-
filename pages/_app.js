import "../styles/globals.css";
import { Providers } from "../provider/provider";

export default function app({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
