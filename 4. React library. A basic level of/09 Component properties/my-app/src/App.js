import "./App.css";

// function WhoAmI(props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   );
// }

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

function WhoAmI2({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name.firstName}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

function WhoAmI3({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name()}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="google.com" />
      <WhoAmI2 name={{firstName: 'Tom'}} surname="Hanks" link="vk.com" />
      <WhoAmI3 name={()=> {return 'Jerry'}} surname="Li" link="google.com" />
    </div>
  );
}

export default App;
