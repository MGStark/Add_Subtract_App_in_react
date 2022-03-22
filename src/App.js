import './index.css';

let number = 0
function Addition() {
  var base = number;
  var num = document.getElementById("Number").value;
  var answer = +base + +num;
  var base = answer;
  document.getElementById("answer").innerHTML = answer;
  number = answer;
}

function Subtraction() {
  var base = number;
  var num = document.getElementById("Number").value;
  var answer = +base - +num;
  var base = answer;
  document.getElementById("answer").innerHTML = answer;
  number = answer;
}

function App() {
  return (
    <div className="bod">
      <div className='header'>
        ADD SUBTRACT
      </div>
      <div >
        Enter a value to add / subtract
      </div>
      <div id="input" className='input'>
        <input id="Number" type="text" placeholder="Enter the number" />
      </div>
      <div className='button'>
        <button type="button" id="Add" className='button' onClick={Addition}>Add</button>
      </div>
      <div className='button'>
        <button type="button" id="Subtract" className='button' onClick={Subtraction} >Subtract</button>
      </div>
      <div className="result">
        <div>Result:</div>
        <span id="answer"></span>
      </div>
    </div>

  );
}

export default App;
