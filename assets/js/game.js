import React from 'react';

import Board from './board';
import Chat from './chat';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  handleClick(cell) {
    var alreadyClicked = false;

    for (var i = 0; i < this.state.bads.length; i++) {
      if (cell == this.state.bads[i]) {
          alreadyClicked = true;
        }
    }

    if (!alreadyClicked) {
      this.props.channel.push("guess", {cell: cell}).
        receive("ok", state => this.setState(state));
    }

  }

  setShip(cell) {
    var alreadyClicked = false;

    for (var i = 0; i < this.state.myShips.length; i++) {

      for (var j = 0; j < this.state.myShips[i].length; j++) {

          if (cell == this.state.myShips[i][j]) {
            alreadyClicked = true;
          }

      }
    }


    if (!alreadyClicked) {
      var direction = 1;

      this.props.channel.push("setShip", {cell: cell, direction: direction}).
        receive("ok", state => this.setState(state));
    }

  }


  render() {
    return (
      <div>
        <div className="row">
        <div className="col-sm-11">
        Your guesses
          <Board  myBoard={false}
            bads={this.state.bads}
            goods={this.state.goods}
            onClick={i => this.handleClick(i)} />
            Opponents guesses
            <Board myBoard={true}
              bads={this.state.bads}
              goods={this.state.goods}
              ships={this.state.myShips}
              onClick={i => this.setShip(i)} />
              </div>
              <div className="col-sm-1">
              {this.state.messages}
              <Chat channel={this.props.channel} />
              </div>
        </div>
      </div>
    );
  }
}
