import { AppLoading } from "expo";
import React, { useState } from "react";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {};
  return isReady ? null : <AppLoading startAsync={loadAssets} />;
}
