import { useNavigate } from "react-router-dom"
import "./global/index.css"

function App() {
  const navigate = useNavigate()

  return (
    <main className="App">
      <div className="AppInfo">
        <img src="./koi-fish.png" alt="" className="logoLanding"/>
        <h1 className="landingTitle">Bem vindo a Koi Fish</h1>
        <span className="landingDescription">O melhor ambiente para você organizar seus contatos.</span>
        <button className="nextBtn" onClick={() => navigate("/login")}>Avançar</button>
      </div>
    </main>
  )
}

export default App
