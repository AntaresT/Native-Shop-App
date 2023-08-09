import { registerRootComponent } from "expo"
import { ExpoRoot } from "expo-router"
import "expo-router/entry"
import { InfoProductsProvider } from "./src/Providers/Products"

export function App() {
  const ctx = require.context("./app")

  return (
    <InfoProductsProvider>
      <ExpoRoot context={ctx} />
    </InfoProductsProvider> 
  )
}

registerRootComponent(App)