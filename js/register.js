// Registering the service worker
if (navigator.serviceWorker) {
	navigator.serviceWorker.register("service-worker.js").then(reg => {
		console.log("Service worker registration success  " + reg.scope)
	})
	.catch(error => {
		console.log("Service worker registration failed  " + error);
	})
}
