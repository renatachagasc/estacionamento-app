import React, { useEffect, useState } from 'react';
import '../../App.css';
import Entrada from './form/entrada';
import Saida from './form/saida';
import axios from 'axios';

import { Container, Row, Col, Tab, Tabs, ListGroup, Card } from 'react-bootstrap';

import fireDb from '../../database/firebase';



const EntradaSaida = () => {
    
    let [dadosPlacas, setDadosPlacas] = useState({})

    useEffect(() => {
        fireDb.child('placas').on('value', dbDate => {
            if (dbDate.val() != null) {
                setDadosPlacas({
                    ...dbDate.val()
                })
            }
        })
    }, [])


    const addEdit = obj => {
        fireDb.child('placas').push(
            obj,
            error => {
                if (error) {
                    console.log(error)
                }
            }
        )
    }

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg="4">
                        <Tabs defaultActiveKey="entrada" id="uncontrolled-tab-example" className="justify-content-around">
                            <Tab eventKey="entrada" title="Entrada">
                                <Entrada addEdit={addEdit} />
                            </Tab>
                            <Tab eventKey="saida" title="Saída">
                                <Saida />
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col lg="4">
                        <Card>
                            <h2>Placas</h2>

                            {
                                Object.keys(dadosPlacas).map(id => {
                                    return <tr key={id}>
                                        <td> {dadosPlacas[id].placa} </td>
                                    </tr>

                                })
                            }

                        </Card>
                      
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EntradaSaida;