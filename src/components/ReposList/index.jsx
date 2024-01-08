import { useEffect, useState } from "react";

import style from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Não foi possível obter os dados');
                }
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000)
            })
            .catch(e => {
                setErro(true);
                setEstaCarregando(false);
                setRepos([]);
            })
    }, [nomeUsuario]);

    if (erro) {
        return (
            <div className="container">
                <h1>Usuário não encontrado</h1>
            </div>
        )
    } else {
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
}

export default ReposList;