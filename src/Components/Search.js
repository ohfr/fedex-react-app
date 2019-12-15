import React, {useEffect, useState} from 'react';
import api from '../utils/api';
import { Container, Button } from 'react-bulma-components';

const Search = ({url}) => {
    const [data, setData] = useState();
    const [search, setSearch] = useState();
    const [submit, setSubmit] = useState(false);
    useEffect(() => {
        if (search) {
            api().get(`/${url}/${search}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        };
    }, [submit]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit)
    }

    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={handleInput} placeholder="Zip" />
                    <Button> Search</Button>
                </form>
            </Container>

        </div>
    )
};

export default Search;