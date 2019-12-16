import React, {useState} from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';
import { Container, Columns } from 'react-bulma-components';

const Add = () => {
    const [data, setData] = useState({
        city: "",
        zip: "",
        delivery: "",
    });
    const [spinner, setSpinner] = useState(false);

    const handleChange = (e) => {
        setData({
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api().post("", data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Container>
                <Columns>
                <form onSubmit={handleSubmit} className="add-form">
                    <input type="text" placeholder="City Name" value={data.city} onChange={handleChange} />
                    <input type="text" placeholder="Zip Code" value={data.zip} onChange={handleChange} />
                    <input type="text" placeholder="Deliveries" value={data.delivery} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <Link to="/">Back</Link>
                </div>
                </Columns>
            </Container>
        </div>
    )
};

export default Add;