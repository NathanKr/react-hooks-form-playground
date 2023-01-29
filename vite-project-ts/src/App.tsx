import ContactUsMyUi from "./components/contact-us-my-ui";
import { FormWithControllerForMui1 } from "./components/FormWithControllerForMui1";
import FormWithControllerForMui2 from "./components/FormWithControllerForMui2";
import FormWithControllerForMui2Dry from "./components/FormWithControllerForMui2Dry";
import ReactHookFormSimple2 from "./components/ReactHookFormSimple2";
import ReactHookFormSimple1 from "./components/ReactHookFormSimple1";

function App() {
  return (
    <div className="App">
      <h2>FormWithControllerForMui2Dry</h2>
      <span>check the console on submit</span>
      <FormWithControllerForMui2Dry />
      <h2>FormWithControllerForMui2</h2>
      <span>check the console on submit</span>
      <FormWithControllerForMui2 />
      <h2>FormWithControllerForMui</h2>
      <span>check the console on submit</span>
      <FormWithControllerForMui1 />
      <h2>ContactUsMyUi</h2>
      <span>check the console on submit</span>
      <ContactUsMyUi />
      <h2>ReactHookFormSimple1</h2>
      <span>check the console on submit</span>
      <ReactHookFormSimple1 />
      <h2>ReactHookFormSimple2</h2>
      <span>check the console on submit</span>
      <ReactHookFormSimple2 />
      
      {/* <h2>ReactHookFormSample1</h2><span>check the console on submit</span>
      <ReactHookFormSample1/>
      <h2>ReactHookFormSample2</h2><span>check the console on submit</span>
      <ReactHookFormSample2/> */}
    </div>
  );
}

export default App;
