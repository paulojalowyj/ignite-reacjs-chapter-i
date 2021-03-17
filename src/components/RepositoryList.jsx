import { RepositoryItem } from "./RepositoryItem"

/**Objeto com as informações do Item */
const repository = {
    name: 'Unform',
    description: 'Performance-focused API for React forms ',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}