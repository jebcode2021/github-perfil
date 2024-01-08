import { useState, useEffect } from 'react';
import './formulario.css'

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('nome', nome);
    }, [props.nome]);

    const alteraNome = (evento) => {
        setNome(estaAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC);
        const media = soma / 3;

        if (media >= 7) {
            return <p className='resultado'>Olá {nome}, sua média é {media.toFixed(2)} e você está <strong className='aprovado'>aprovado</strong></p>
        } else {
            return <p className='resultado'>Olá {nome}, sua média é {media.toFixed(2)} e você está <strong className='reprovado'>reprovado</strong></p>
        }
    }


    return (
        <form>
            <div className="form-control">

                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Nome do aluno" onChange={alteraNome} />

                <label htmlFor="number1">Número</label>
                <input type="number" id="number1" placeholder="Nota matéria A" onChange={evento => setMateriaA(evento.target.value)} />

                <label htmlFor="number2">Número</label>
                <input type="number" id="number2" placeholder="Nota matéria B" onChange={evento => setMateriaB(evento.target.value)} />

                <label htmlFor="number3">Número</label>
                <input type="number" id="number3" placeholder="Nota matéria C" onChange={evento => setMateriaC(evento.target.value)} />

                {renderizaResultado()}
            </div>
        </form>
    )
}

export default Formulario