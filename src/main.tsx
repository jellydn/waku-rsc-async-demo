import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Root, Slot } from "waku/client";

const rootElement = (
	<StrictMode>
		<Root>
			<Slot id="App" />
		</Root>
	</StrictMode>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
if ((globalThis as any).__WAKU_SSR_ENABLED__) {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	hydrateRoot(document.getElementById("root")!, rootElement);
} else {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	createRoot(document.getElementById("root")!).render(rootElement);
}
