import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import { BrowserRouter } from "react-router";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>

    <ThemeProvider>
      <App />
    </ThemeProvider>
    </BrowserRouter>

);
