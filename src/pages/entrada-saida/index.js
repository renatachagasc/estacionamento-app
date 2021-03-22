import React from 'react';
import '../../App.css';
import Entrada from './form/entrada';
import Saida from './form/saida';

import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

const EntradaSaida = () => {
    
     return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg="4">
                        <Tabs defaultActiveKey="entrada" id="uncontrolled-tab-example" className="justify-content-around">
                            <Tab eventKey="entrada" title="Entrada">
                                <Entrada  />
                            </Tab>
                            <Tab eventKey="saida" title="Saída">
                                <Saida />
                            </Tab>
                        </Tabs>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default EntradaSaida;