// DESTRUCTURING
// const Hello = ({name, age}) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - age;
//   };
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="David" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// MANEJOR DE EVENTOS

// const Display = ({ counter }) => {
//   return <div>{counter}</div>;
// };

// const Button = ({ handleClick, text }) => {
//   return <button onClick={handleClick}>{text}</button>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   //   const handleClick = () => {
//   //     // console.log('clicked')
//   //     setCounter(counter + 1);
//   //   };

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={increaseByOne} text="plus" />
//       {/* <button handleClick={() => setCounter(counter + 1)}></button>
//         plus
//         <button /> */}
//       <Button handleClick={setToZero} text="zero" />
//       <Button handleClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });

//   const handleLeftClick = () => {
//     const newClicks = {
//       ...clicks,
//       left: clicks.left + 1,
//       // left: clicks.right,
//     };
//     setClicks(newClicks);
//   };

//   const handleRightClick = () => {
//     const newClicks = {
//       // left: clicks.left,
//       ...clicks,
//       right: clicks.right + 1,
//     };
//     setClicks(newClicks);
//   };

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   );
// };

// RENDERIZADO CONDICIONAL
// const History = ({ props }) => {
//     if (props.allClicks.length === 0) {
//       return <div>the app is used by pressing the buttons</div>;
//     }

//     return <div>button press history: {props.allClicks.join(" ")}</div>;
//   };

//   const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

//   const App = () => {
//     const [left, setLeft] = useState(0);
//     const [right, setRight] = useState(0);
//     const [allClicks, setAll] = useState([]);

//     const handleLeftClick = () => {
//       setAll(allClicks.concat("L"));
//       setLeft(left + 1);
//     };

//     const handleRightClick = () => {
//       setAll(allClicks.concat("R"));
//       setRight(right + 1);
//     };

//     return (
//       <div>
//         {left}
//         <Button onClick={handleLeftClick} text="left" />
//         <Button onClick={handleRightClick} text="right" />
//         {right}
//         <History allClicks={allClicks} />
//       </div>
//     );
//   };

// FUNCIÓN QUE DEVUELVE UNA FUNCIÓN

// const App = () => {
//     const [value, setValue] = useState(10)

// const hello = (who) => {
//     const handler = () => {
//       console.log('hello', who)
//     }

//     return handler
//   }

//     return (
//       <div>
//         {value}
//         <button onClick={hello('world')}>button</button>
//         <button onClick={hello('react')}>button</button>
//         <button onClick={hello('function')}>button</button>
//       </div>
//     )
//   }

// const Button = (props) => (
//     <button onClick={props.handleClick}>{props.text}</button>
//   );

//   const App = () => {
//     const [value, setValue] = useState(10);

//     const setToValue = (newValue) => {
//       setValue(newValue);
//     };

//     return (
//       <div>
//         {value}
//         <Button handleClick={() => setToValue(1000)} text="thousand" />
//         <Button handleClick={() => setToValue(0)} text="reset" />
//         <Button handleClick={() => setToValue(value + 1)} text="increment" />
//       </div>
//     );
//   };

ReactDOM.render(<App />, document.getElementById("root"));
