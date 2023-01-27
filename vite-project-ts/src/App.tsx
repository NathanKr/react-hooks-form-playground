import ContactUsVer1 from "./components/contact-us-ver1";
import ReactHookFormSample3 from "./components/ReactHookFormSample3";
import ReactHookFormSample4 from "./components/ReactHookFormSample4";

function App() {
  return (
    <div className="App">
      <h2>ContactUs</h2>
      <span>check the console on submit</span>
      <ContactUsVer1 />
      <h2>ReactHookFormSample4</h2>
      <span>check the console on submit</span>
      <ReactHookFormSample4 />
      <h2>ReactHookFormSample3</h2>
      <span>check the console on submit</span>
      <ReactHookFormSample3 />
      {/* <h2>ReactHookFormSample1</h2><span>check the console on submit</span>
      <ReactHookFormSample1/>
      <h2>ReactHookFormSample2</h2><span>check the console on submit</span>
      <ReactHookFormSample2/> */}
    </div>
  );
}

export default App;
