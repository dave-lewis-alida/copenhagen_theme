import { render } from "react-dom";
import { SearchAiAssistant } from "./SearchAiAssistant";
import { STYLES } from "./styles";

interface Props {
  query: string;
  backendUrl: string;
}

function injectStyles() {
  if (document.getElementById("saia-styles")) return;
  const style = document.createElement("style");
  style.id = "saia-styles";
  style.textContent = STYLES;
  document.head.appendChild(style);
}

export function renderSearchAiAssistant(
  props: Props,
  container: HTMLElement
): void {
  injectStyles();
  render(<SearchAiAssistant {...props} />, container);
}
