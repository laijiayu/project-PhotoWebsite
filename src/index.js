import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
//1.https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
//2.https://molly1024.medium.com/%E6%96%B0%E7%89%88-react-router-%E6%80%8E%E9%BA%BC%E7%94%A8-react-router-dom-v6-8c0624642fce

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
