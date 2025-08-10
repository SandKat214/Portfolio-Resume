import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")

	return defineConfig({
		plugins: [react()],
		esbuild: {
			loader: "jsx",
		},
		server: {
			// custom port
			port: parseInt(env.VITE_PORT, 10) || 5173,
		},
	})
}
