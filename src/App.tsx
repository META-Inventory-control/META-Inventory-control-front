import { useNavigate } from "react-router-dom"
import "./global/index.css"

function App() {
  const navigate = useNavigate()

  return (
    <main className="App">
      <div className="AppInfo">
        <img src="./image.png" alt="" className="logoLanding"/>
        <h1 className="landingTitle">Bem vindo a Meta IC</h1>
        <span className="landingDescription">Controle de inventário.</span>
        <button className="nextBtn" onClick={() => navigate("/login")}>Avançar</button>
      </div>
    </main>
  )
}

export default App
