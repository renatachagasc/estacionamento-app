import React from 'react';

import '../../App.css';
import { Container, Row, Col, Button, Tab, Tabs, Form } from 'react-bootstrap';
function Detalhes(){
    return(
        <div>
        <Container fluid>
             <Row className="justify-content-center">
                 <Col lg="4">
                     <Tabs defaultActiveKey="entrada" id="uncontrolled-tab-example" className="justify-content-around">
                         <Tab eventKey="entrada" title="Entrada">
                             <Form id="entrada">
                                 <Form.Group controlId="formValue">
                                     <Form.Label>Número da placa:</Form.Label>
                                     <Form.Control type="text" placeholder="AAA-0000" />
                                 </Form.Group>
                                 <Button type="submit">
                                     CONFIRMAR ENTRADA
                                 </Button>
                             </Form>
                         </Tab>
                         <Tab eventKey="saida" title="Saída">
                             <Form id="saida">
                                 <Form.Group controlId="formBasicEmail">
                                 <Form.Label>Número da placa:</Form.Label>
                                     <Form.Control type="text" placeholder="AAA-0000" />
                                 </Form.Group>
                                 <Button type="submit">
                                     PAGAMENTO
                                 </Button>
                             </Form>
                         </Tab>
                     </Tabs>
                 </Col>
             </Row>
         </Container>
     </div>
    );
};

export default Detalhes;