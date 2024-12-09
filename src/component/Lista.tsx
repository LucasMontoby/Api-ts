import './lista.css';

import React, {useEffect, useState} from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Lista: React.FC = () => {
    const [lista, setLista] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setLista(data))
        .catch(error => console.error('Eror al obtener los datos', error))
    }, []);

    return(
        <div>

            <h1>Lista de Posts</h1>
            <ul>
                {lista.map(entrada => (
                    <li key={entrada.id}>
                        <h2>{entrada.title}</h2>
                        <p>{entrada.body}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Lista;