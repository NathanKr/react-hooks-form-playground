import ContactUsMyUi from "./components/contact-us-my-ui";
import { FormWithControllerForMui1 } from "./components/FormWithControllerForMui1";
import FormWithControllerForMui2 from "./components/FormWithControllerForMui2";
import FormWithControllerForMui2Dry from "./components/FormWithControllerForMui2Dry";
import ReactHookFormSample3 from "./components/ReactHookFormSample3";
import ReactHookFormSample4 from "./components/ReactHookFormSample4";

function App() {
  return (
    <div className="App">
      <h2>FormWithControllerForMui2Dry</h2>
      <span>check the console on submit</span>
      <FormWithControllerForMui2Dry/>
      <h2>FormWithControllerForMui2</h2>
      <span>check the console on submit</span>
      <FormWithControllerForMui2/>
      <h2>FormWithControllerForMui</h2>
      <span>check the console on submit</span>
      <FormWithControllerForMui1 />
      <h2>ContactUsMyUi</h2>
      <span>check the console on submit</span>
      <ContactUsMyUi />
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
