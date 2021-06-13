const WebSocketInitiator = {
	init(url) {
		const webSocket = new WebSocket(url);
		webSocket.onmessage = this._onMssageHandler;
	},
	
	_onMssageHandler(message) {
		console.log(message.data);
	},
};

export default WebSocketInitiator;