import { useState, memo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//wrappers
import SideRail from "./components/side-rail";
import MainBody from "./components/main-body";

//pages
import GeneralInfo from "./components/general-info";
import Extra from "./components/extra";
import Tracks from "./components/tracks";

const neededFields = {
  general: ["name", "version"],
  extra: ["extra"],
  tracks: ["tracks", "name"],
  sideRail: ["name", "tracks"],
};

function App() {
  const [createReleaseData, setCreateReleaseData] = useState({
    name: "Amazing Release of Awesomeness",
  });

  const [saved, setSaved] = useState(false);

  function saveData(data) {
    setCreateReleaseData({ ...createReleaseData, ...data });
    setSaved(false);
  }

  function saveToDatabase() {
    console.log("Gonna Patch to the DB");
    console.log(createReleaseData);

    setSaved(true);
  }

  function getFields(key) {
    const fields = neededFields[key];
    return Object.entries(createReleaseData).reduce((data, [key, value]) => {
      if (!fields.includes(key)) return data;
      return { ...data, [key]: value };
    }, {});
  }

  return (
    <div>
      <h1>Create Release</h1>
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <div style={{ width: "300px" }}>
            <SideRail {...getFields("sideRail")} />
            <SaveStatusAndButton
              saveToDatabase={saveToDatabase}
              saved={saved}
            />
          </div>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <MainBody title="General">
                    <GeneralInfo
                      {...getFields("general")}
                      saveData={saveData}
                    />
                  </MainBody>
                }
              />
              <Route
                path="/extra"
                element={
                  <MainBody title="Extra">
                    <Extra {...getFields("extra")} saveData={saveData} />
                  </MainBody>
                }
              />
              <Route
                path="/tracks"
                element={
                  <MainBody title="Tracks">
                    <Tracks {...getFields("tracks")} saveData={saveData} />
                  </MainBody>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

function SaveStatusAndButton({ saved, saveToDatabase }) {
  return (
    <div style={{marginTop:'50px', paddingTop:'10px', borderTop:"1px solid"}}>
      <div style={{textAlign:'center',border:`1px solid ${saved ? 'green' :'red'}`, margin:'10px 20px 10px 0',padding:"10px"}}>
       {saved ? 'All Saved UP!' : 'You have unsaved data. You will loose it all if you do not save'}
      </div>
      <button onClick={saveToDatabase}>Save To database</button>
    </div>
  );
}
