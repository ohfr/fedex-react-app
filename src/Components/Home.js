import React from "react";
import { Link } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Columns, Button } from "react-bulma-components";


const Home = () => {

    return (
        <div className="home">
            <Container>
                <Columns>
                    <Columns.Column>
                        <Button color="primary"><Link to="zips" className="link">Search By Zip</Link></Button>
                    </Columns.Column>
                    <Columns.Column>
                        <Button color="primary"><Link to="city" className="link">Search By City</Link></Button>
                    </Columns.Column>
                    <Columns.Column>
                        <Button color="primary"> <Link to="/all" className="link">Search All</Link></Button>
                    </Columns.Column>
                    <Columns.Column>
                        <Button color="primary"><Link to="/add" className="link">Add New</Link></Button>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>
    )
};

export default Home;