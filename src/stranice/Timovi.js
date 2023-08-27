import React from 'react';
import {Container, Table} from "react-bootstrap";
import podaci from "../podaci/podaciOTimovima.js";

const Timovi = () => {
    return (
        <div className='kontejner'>
            <Container>
                <h1>Svi timovi 2020/21 sezone</h1>
                <Table hover className="content-table">
                    <thead>
                    <tr>
                        <th>Rb</th>
                        <th>Naziv tima</th>
                        <th>Skracenica</th>
                        <th>Zemlja</th>
                    </tr>
                    </thead>

                    <tbody>

                    {
                        podaci.map((tim, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{tim.name}</td>
                                    <td>{tim.code}</td>
                                    <td>{tim.country}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Timovi;