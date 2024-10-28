const { spawn } = require('child_process');
const path = require("path");

function start() {
  const scriptPath = path.join(__dirname, "main.js");
  const args = process.argv.slice(2);
  
  console.log([process.argv[0], scriptPath, ...args].join("\n"));

  const childProcess = spawn(process.argv[0], [scriptPath, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"]
  });

  childProcess.on('message', (message) => {
    if (message === "reset") {
      console.log("Restarting Bot...");
      childProcess.kill();
      start();
    }
  });

  childProcess.on('exit', (code) => {
    console.error("Exited with code:", code);
    if (code === 0 || code === 1) {
      start();
    }
  });
}

start();
