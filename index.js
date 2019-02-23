class MusicPlayer extends React.Component {
   static playSound(letter){
      switch (letter){
      case 'Q':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Heater-1";
       break;
      case 'W':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Heater2";
       break;
      case 'E':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Heater-3";
       break;
      case 'A':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Heater-4_1";
       break;
      case 'S':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Heater-6";
       break;
      case 'D':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Dsc_Oh";
       break;
      case 'Z':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Kick_n_Hat";
       break;
       case 'X':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "RP4_KICK_1";
       break;
      case 'C':
       document.getElementById(letter).play();
       document.getElementById('display').innerHTML = "Cev_H2";
       break;
          
      }
  }
    
  handleKeydown(event){
     if(event.keyCode === 81) {
     MusicPlayer.playSound('Q');
    }
    
    if(event.keyCode === 87) {
     MusicPlayer.playSound('W');
    }
    
     if(event.keyCode === 69) {
     MusicPlayer.playSound('E');
    }
    
     if(event.keyCode === 65) {
     MusicPlayer.playSound('A');
    }
    
     if(event.keyCode === 83) {
     MusicPlayer.playSound('S');
    }
    
     if(event.keyCode === 68) {
     MusicPlayer.playSound('D');
    }
    
     if(event.keyCode === 90) {
     MusicPlayer.playSound('Z');
    }
    
     if(event.keyCode === 88) {
     MusicPlayer.playSound('X');
    }
    
     if(event.keyCode === 67) {
     MusicPlayer.playSound('C');
    }
    }
    componentDidMount(){
      document.addEventListener("keydown", this.handleKeydown, false);
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this.handleKeydown, false);
    }
  
  constructor(props){
    super(props);
    this.state = {}
        
  }
  
  buttonPressed(event){
  MusicPlayer.playSound(event.currentTarget.value);
  
  }
  

  
  render(){
    return (<div><div>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='Q'><audio className="clip" id="Q" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>Q</button>     
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='W'><audio className="clip" id = "W" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>W</button>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='E'><audio className="clip" id = "E" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>E</button>
     </div><div>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='A'><audio className="clip" id = "A" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>A</button>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='S'><audio className="clip" id = "S" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>S</button>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='D'><audio className="clip" id = "D" src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>D</button>
     </div><div>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='Z'><audio className="clip" id = "Z" src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>Z</button>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='X'><audio className="clip" id = "X" src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>X</button>
    <button className="drum-pad" id="drum-pad" onClick={this.buttonPressed} value='C'><audio className="clip" id ="C" src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>C</button>  
    </div>
    </div>
    );
  } 
}

 ReactDOM.render(<MusicPlayer />,
    document.getElementById('buttons')

);
