import style from  './Perfil.module.css';

const Perfil = ({ nomeUsuario, avatar }) => {

    avatar = `https://github.com/${nomeUsuario}.png`;

    return (
        <header className={style.header}>
            <img className={style.avatar} src={avatar} alt={nomeUsuario} />
            <h1 className={style.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;