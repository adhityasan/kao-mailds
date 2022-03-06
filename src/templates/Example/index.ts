import Example from "./Example";
import _ExampleStyle from "./_ExampleHeadCSS";
import _ExampleProps from "./_ExampleProps";

const exampleTemplate: ITemplate = {
  title: "Example",
  description: "This is an email template example",
  component: Example,
  headCSS: _ExampleStyle,
  props: _ExampleProps,
  path: "example",
};

export default exampleTemplate;
