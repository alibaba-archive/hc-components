import hoistNonReactStatics from 'hoist-non-react-statics';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';

export const DnDContext = () => BaseComponent => {
  const Component = DragDropContext(HTML5Backend)(BaseComponent);
  return hoistNonReactStatics(Component, BaseComponent);
};
