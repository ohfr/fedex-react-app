import React, {useEffect, useState} from 'react';
import api from '../utils/api';
import { Container, Button } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const Search = ({url}) => {
    const [data, setData] = useState();
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState();
    const [submit, setSubmit] = useState(false);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        if (url && search) {
            api().get(`/${url}/${search}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        } else if (url === "") {
            api().get()
                .then(res => {
                    setCities(res.data);
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
                    <input type="text" value={search} onChange={handleInput} placeholder={url} />
                    <Button> Search</Button>
                </form>

                <div>
                    {cities && cities.map((cur, index) => {
                        return (
                            <div key={index}>
                                <h1>{cur.city}</h1>
                                <p>{cur.zip}</p>
                                <p>{cur.delivery}</p>
                            </div>
                        )
                    })}
                    {data && (
                        <div>
                            <h1>{data.city}</h1>
                            <p>{data.zip}</p>
                            <p>{data.delivery}</p>
                        </div>
                    )}
                </div>
                <div>
                    <Link to="/">Back</Link>
                </div>
            </Container>

        </div>
    )
};

export default Search;