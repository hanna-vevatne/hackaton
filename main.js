const { app, BrowserWindow } = require("electron"); //

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	win.loadFile("index.html"); //
}

// Initialize when Electron is fully prepared
app.whenReady().then(() => {
	//
	createWindow();

	// For macOS: recreate a window if the dock icon is clicked with no windows open
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Close the app when all windows are shut (except on macOS)
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit(); //
});
