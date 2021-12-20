import React, { useState } from "zarkit/react";
import Zarebin from "./Zarebin";

const Timer = React.lazy(() =>
  import("timerApp/RemoteApp").catch(() => import("./NotFound"))
);

const PairMatching = React.lazy(() =>
  import("pairMatchingApp/RemoteApp").catch(() => import("./NotFound"))
);

export const apps = {
  Timer,
  PairMatching,
};

const App = function () {
  const [activeApp, setActiveApp] = useState("Timer");
  const ActiveApp = apps[activeApp];
  return (
    <Zarebin activeApp={activeApp} setActiveApp={setActiveApp}>
      <React.Suspense fallback={<h3>Loading {activeApp}...</h3>}>
        <ActiveApp />
      </React.Suspense>
    </Zarebin>
  );
};

export default App;
