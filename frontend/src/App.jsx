import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Signup } from "./pages/Signup"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
<Route path="/sigin" element={<Signin/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/send" element={<SendMoney/>}/>
*/