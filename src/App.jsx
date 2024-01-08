import { useState } from "react"
import Perfil from "./components/perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <form>
        <div className="container">
          <label htmlFor="nomeUsuario">Nome do usuário: </label>
          <input type="text" onBlur={(evento) => setNomeUsuario(evento.target.value)} placeholder="Digite o nome do usuário" />
        </div>
      </form>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>{formularioEstaVisivel ? 'Ocultar' : 'Mostrar'} formulário</button>
      {formularioEstaVisivel && <Formulario />} */}
    </>
  )
}

export default App
