import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from "react-bootstrap";

const Rezultati = props => {
    return (
        <>
            <ListGroup>
                {
                    props.rezultati.map((rezultat, index) => {
                        return (
                            <ListGroup.Item key={index}>
                                {rezultat.domacin} {rezultat.domGolova} : {rezultat.gostGolova} {rezultat.gost}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </>
    );
};

Rezultati.propTypes = {
    rezultati: PropTypes.array.isRequired
};

export default Rezultati;