import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { CookiesProvider } from "react-cookie";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<AnimatePresence exitBeforeEnter>
			<CookiesProvider>
				<Component {...pageProps} key={router.route} />
			</CookiesProvider>
		</AnimatePresence>
	);
}

export default MyApp;
