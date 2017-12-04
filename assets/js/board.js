import React from 'react';


function Cell(props) {
  return (
    <button style={{width: 50, height: 50}} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Board extends React.Component {

  renderSquare(i) {

    var status = "O";
    var myBoard = this.props.myBoard;

    if (this.props.bads.includes(i) && !myBoard) {
      status = "X";
    }

    if (this.props.goods.includes(i) && !myBoard) {
      status = "H";
    }

    if (myBoard) {
      for (var j = 0; j < this.props.ships.length; j++) {
        if (this.props.ships[j].includes(i)) {
          status = "S"
        }
      }
    }



    return (
      <Cell
        value={status}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

 render() {

   return (
     <div>
       <div className="board-row">
       {this.renderSquare(1)}
       {this.renderSquare(2)}
       {this.renderSquare(3)}
       {this.renderSquare(4)}
       {this.renderSquare(5)}
       {this.renderSquare(6)}
       {this.renderSquare(7)}
       {this.renderSquare(8)}
       {this.renderSquare(9)}
       {this.renderSquare(10)}
       </div>
       <div className="board-row">
       {this.renderSquare(11)}
       {this.renderSquare(12)}
       {this.renderSquare(13)}
       {this.renderSquare(14)}
       {this.renderSquare(15)}
       {this.renderSquare(16)}
       {this.renderSquare(17)}
       {this.renderSquare(18)}
       {this.renderSquare(19)}
       {this.renderSquare(20)}
       </div>
       <div className="board-row">
       {this.renderSquare(21)}
       {this.renderSquare(22)}
       {this.renderSquare(23)}
       {this.renderSquare(24)}
       {this.renderSquare(25)}
       {this.renderSquare(26)}
       {this.renderSquare(27)}
       {this.renderSquare(28)}
       {this.renderSquare(29)}
       {this.renderSquare(30)}
       </div>
       <div className="board-row">
       {this.renderSquare(31)}
       {this.renderSquare(32)}
       {this.renderSquare(33)}
       {this.renderSquare(34)}
       {this.renderSquare(35)}
       {this.renderSquare(36)}
       {this.renderSquare(37)}
       {this.renderSquare(38)}
       {this.renderSquare(39)}
       {this.renderSquare(40)}
       </div>
       <div className="board-row">
       {this.renderSquare(51)}
       {this.renderSquare(52)}
       {this.renderSquare(53)}
       {this.renderSquare(54)}
       {this.renderSquare(55)}
       {this.renderSquare(56)}
       {this.renderSquare(57)}
       {this.renderSquare(58)}
       {this.renderSquare(59)}
       {this.renderSquare(60)}
       </div>
       <div className="board-row">
       {this.renderSquare(61)}
       {this.renderSquare(62)}
       {this.renderSquare(63)}
       {this.renderSquare(64)}
       {this.renderSquare(65)}
       {this.renderSquare(66)}
       {this.renderSquare(67)}
       {this.renderSquare(68)}
       {this.renderSquare(69)}
       {this.renderSquare(70)}
       </div>
       <div className="board-row">
       {this.renderSquare(71)}
       {this.renderSquare(72)}
       {this.renderSquare(73)}
       {this.renderSquare(74)}
       {this.renderSquare(75)}
       {this.renderSquare(76)}
       {this.renderSquare(77)}
       {this.renderSquare(78)}
       {this.renderSquare(79)}
       {this.renderSquare(80)}
       </div>
       <div className="board-row">
       {this.renderSquare(81)}
       {this.renderSquare(82)}
       {this.renderSquare(83)}
       {this.renderSquare(84)}
       {this.renderSquare(85)}
       {this.renderSquare(86)}
       {this.renderSquare(87)}
       {this.renderSquare(88)}
       {this.renderSquare(89)}
       {this.renderSquare(90)}
       </div>
       <div className="board-row">
       {this.renderSquare(91)}
       {this.renderSquare(92)}
       {this.renderSquare(93)}
       {this.renderSquare(94)}
       {this.renderSquare(95)}
       {this.renderSquare(96)}
       {this.renderSquare(97)}
       {this.renderSquare(98)}
       {this.renderSquare(99)}
       {this.renderSquare(100)}
       </div>
     </div>
   );
 }
}
