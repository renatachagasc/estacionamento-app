
import React from 'react';
import axios from 'axios';


export default class Historico extends React.Component {
  state = {
    HistoricoPlacas: []
  }

  consultarHistorico() {
    axios.get(`https://parking-lot-to-pfz.herokuapp.com/parking/AaA-4444`)
      .then(res => {
        const HistoricoPlacas = res.data;
        this.setState({ HistoricoPlacas });
      })
  }

  render() {
    return (
      <ul>
        { this.state.HistoricoPlacas.map(datePlate => <li>{datePlate.plate}</li>)}
      </ul>
    )
  }
}