import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Start } from "./pages/Start";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/start" element={<Start/>}/>
      </Route>
    </Routes>
  )
}