interface ITemplate {
  title: string;
  description?: string;
  component: React.ComponentType<any>;
  headCSS?: string;
  props?: any;
  path: string;
}
