import { useEffect, useState } from "react";

import style from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000)
            })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <div className={style.loading}>
                    <h1>Carregando...</h1>
                </div>
            ) : (
                <ul className={style.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={style.listItem} key={id}>
                            <div className={style.listItemName}>
                                <b>Nome do repositório: </b> {name}
                            </div>
                            <div className={style.listItemLanguage}>
                                <b>Linguagem: </b> {language}
                            </div>
                            <a className={style.listItemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;