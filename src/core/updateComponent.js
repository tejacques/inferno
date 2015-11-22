export default function updateComponent(component, nextProps) {
	let prevProps = component.props;
	if(!nextProps.children) {
		nextProps.children = prevProps.children;
	}
	const prevState = component.state;

	if(prevProps !== nextProps) {
		// TODO disable setState causing forceUpdates
		component.componentWillReceiveProps(nextProps);
		// TODO enable setState causing forceUpdates
		const nextState = component.state;
		const shouldUpdate = component.shouldComponentUpdate(nextProps, nextState);

		if(shouldUpdate) {
			// TODO disable setState
			component.componentWillUpdate(nextProps, nextState);
			// TODO enable setState
			component.props = nextProps;
			component.state = nextState;
			component.forceUpdate();
			component.componentDidUpdate(prevProps, prevState);
		}
	}
}