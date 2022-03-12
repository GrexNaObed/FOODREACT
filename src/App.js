import SideMenu from "components/sideMenu/SideMenu";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { paths } from "routes";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="container">
        <Routes>
          {
            paths.map(path =>
              <Route
                key={ path.id }
                path={ path.route }
                element={
                  <Suspense fallback={ 'Loading..........' }>
                    { path.component }
                  </Suspense>
                }
              />
            )
          }
          <Route path="*" element={ 'ERROR' } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
