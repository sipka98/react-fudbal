import React, {useRef, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import podaci from "../podaci/podaciOTimovima.js";
import {FaPlus} from "react-icons/fa";
import Rezultati from "../komponente/Rezultati";
import Tablica from "../komponente/Tablica";
import pocetniRezultati from "../podaci/pocetniRezultati.js";

const Pregled = () => {

    const domacinRef = useRef();
    const gostRef = useRef();
    const domGolovaRef = useRef();
    const gostGolovaRef = useRef();

    const [rezultati, setRezultati] = useState(pocetniRezultati);

    const unesi = () => {
        let domacin = domacinRef.current.value;
        let gost = gostRef.current.value;
        let domGolova = domGolovaRef.current.value;
        let gostGolova = gostGolovaRef.current.value;

        let rezultat = {
            domacin: domacin,
            gost: gost,
            domGolova: domGolova,
            gostGolova: gostGolova
        };

        setRezultati([...rezultati, rezultat]);
    }


    return (
        <div className='kontejner'>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <h1>Unesi rezultat</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='labela'>Domacin</Form.Label>
                                <Form.Select ref={domacinRef} aria-label="Domacin">
                                    {
                                        podaci.map((tim, index) => {
                                            return (
                                                <option key={index} value={tim.code}>{tim.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='labela'>Gost</Form.Label>
                                <Form.Select ref={gostRef} aria-label="Gost">
                                    {
                                        podaci.map((tim, index) => {
                                            return (
                                                <option key={index} value={tim.code}>{tim.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='labela'>Domacin golova</Form.Label>
                                <Form.Control ref={domGolovaRef} type="number" placeholder="Domacin golova" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label className='labela'>Gost golova</Form.Label>
                                <Form.Control ref={gostGolovaRef} type="number" placeholder="Gost golova" />
                            </Form.Group>
                        </Form>
                        <hr/>
                        <Button variant="success" onClick={unesi}>Dodaj rezultat <FaPlus/> </Button>
                    </Col>
                    <Col>
                        <h1>Rezultati</h1>
                        <Rezultati rezultati={rezultati} />
                    </Col>
                    <Col>
                        <h1>Tablica</h1>
                        <Tablica rezulati={rezultati} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pregled;