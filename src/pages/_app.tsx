// src/pages/_app.tsx
import { AppProps } from "next/app";
import "../styles/globals.css"; // Tailwind directives + overrides

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
