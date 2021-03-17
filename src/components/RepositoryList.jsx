const respositoryName = "unform2"

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de Repositórios</h1>
            <ul>
                <li>
                    <strong>{respositoryName}</strong>
                    <p>Uma Descrição do Repo</p>
                    <a href="#">Acessar o Repositório</a>
                </li>

                <li>
                    <strong>{respositoryName}</strong>
                    <p>Uma Descrição do Repo</p>
                    <a href="#">Acessar o Repositório</a>
                </li>

                <li>
                    <strong>{respositoryName}</strong>
                    <p>Uma Descrição do Repo</p>
                    <a href="#">Acessar o Repositório</a>
                </li>
            </ul>
        </section>
    );
}