import React, { Component } from 'react';

import Bar from './eachBar';

export default class StatusBar extends Component {
  render() {
    const { percentINSS, percentIRPF, percentNetSalary } = this.props;

    return (
      <div>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Bar value={percentINSS} color="#e67e22" />
            <Bar value={percentIRPF} color="#c0392b" />
            <Bar value={percentNetSalary} color="#16a085" />
        </div>    
      </div>
    )
  }
}
