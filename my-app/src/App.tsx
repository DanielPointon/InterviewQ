import React, { useState } from "react";
import { InputScreen } from "./InputScreen";
import { ResultsDisplay } from "./ResultsDisplay";
import { OrgName } from "./types";
import "./index.css";

function App() {
  const [orgName, setOrgName] = useState<OrgName>(false);
  const clearResults = () => setOrgName(false);
  return (
    <div className="App">
      {/* has the user entered an org name*/}
      {orgName ? (
        // show the results if so
        <ResultsDisplay
          orgName={orgName}
          clearResults={clearResults}
        ></ResultsDisplay>
      ) : (
        // ask them to enter an org name
        <InputScreen onSubmit={setOrgName}></InputScreen>
      )}
    </div>
  );
}

export default App;
