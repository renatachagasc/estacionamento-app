import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Detalhes from '../pages/detalhes';
import EntradaSaida from '../pages/entrada-saida';
import Historico from '../pages/historico';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>                
                <Route path="/" exact  component={EntradaSaida} />
                <Route path="/detalhes"  component={Detalhes} />
                <Route path="/historico" component={Historico} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;