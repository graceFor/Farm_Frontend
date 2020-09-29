import { AppLoading } from "expo";
import React, { useState } from "react";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  return isReady ? null : <AppLoading />;
}
