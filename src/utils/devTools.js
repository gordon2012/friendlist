import React from 'react';



import { createStore as initialCreateStore, compose } from 'redux';
export let createStore = initialCreateStore;

import { createDevTools } from 'redux-devtools'

// import LogMonitor from 'redux-devtools-log-monitor';
// import DockMonitor from 'redux-devtools-dock-monitor'

// const DevTools = createDevTools(
// 	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
// 		<LogMonitor theme="tomorrow" />
// 	</DockMonitor>
// );
// export default DevTools;


if(__DEV__)
{
	// console.log("DEV YES");
	createStore = compose(
		require('redux-devtools').devTools(),
		require('redux-devtools').persistState(
			window.location.href.match(/[?&]debug_session=([^&]+)\b/)
		),
		createStore
	);
}

export function renderDevTools(store)
{
	if(__DEV__)
	{
		let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');
		return (
			<DebugPanel top right bottom>
				<DevTools store={store} monitor={LogMonitor} />
			</DebugPanel>
		);
	}
	return null;
}
