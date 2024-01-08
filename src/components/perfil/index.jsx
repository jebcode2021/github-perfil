import style from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {

    return (
        <header className={style.header}>
            <img className={style.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={style.name}>{nomeUsuario}</h1>
            <a target='_blank' className={style.link} href={`https://github.com/${nomeUsuario}`} target="_blank" rel="noreferrer"> visitar perfil </a>
        </header>
    )
}

export default Perfil;