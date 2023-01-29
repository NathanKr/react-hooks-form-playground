import IHtmlInput from "./i-html-input";
import IHtmlTextarea from "./i-html-textarea";

export default interface IRhfControllerBasedMuiTextField {
  name: string;
  label: string;
  rules: object;
  inputType: IHtmlInput | IHtmlTextarea;
}
