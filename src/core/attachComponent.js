import bind from '../util/bind';
import render from './render';

export default function attachComponent(mountElem, Component, fragmentDom, replaceComponent) {
	let newElement;
	let props = Component.props;
	const parentElem = mountElem.parentNode;
	const children = mountElem.childNodes;

	if(children.length > 0) {
		props.children = [].slice.call(children);
	}
	const component = new Component.component(props);

	component.context = null;
	component.forceUpdate = render.bind(null, bind(component, component.render), mountElem, component);
	component.componentWillMount();
	component.forceUpdate();

	if(replaceComponent) {
		newElement = mountElem.firstChild;

		if (parentElem != null) {
			parentElem.replaceChild(newElement, mountElem);
		}
	}

	const mountCallback = component.componentDidMount;
	return {component, mountElem, newElement, mountCallback};
}