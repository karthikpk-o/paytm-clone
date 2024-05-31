import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/sigin" element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*

<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/send" element={<SendMoney/>}/>
*/