import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <div>
    <h2>Hello</h2>
  </div>
)

// react, react dom -> 

// react -> create elements
// react dom -> render elements -> changes sync actual dom -> reconcilation