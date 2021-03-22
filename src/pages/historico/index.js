
import React from 'react';
import api from '../../service/api';


export default class Historico extends React.Component {

  state = {
    HistoricoPlates: [],
  }

  componentDidMount() {
    api.get(`/parking/AaA-4444`)
      .then(res => {
        console.log(res)       
        this.setState({ HistoricoPlates: res.data});
      })
  }

  render() {
    return (
      <div>
        { this.state.HistoricoPlates.map(datePlate =>
          <ul key={datePlate.id}>
            <li>plate: {datePlate.plate}</li>
            <li>reservation: {datePlate.reservation}</li>
            <li>time: {datePlate.time}</li>
          </ul>
        )}
      </div>
    )
  }

}

