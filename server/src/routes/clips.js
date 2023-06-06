import express from 'express';
import child_process from 'child_process';

// Create an Express router
const router = express.Router();

// Require the child_process module
const cp = require("child_process");

// Spawn a CLIPS process with stdio options
const clips = cp.spawn("clips", [], { stdio: ["pipe", "pipe", "inherit"] });

// Define a GET endpoint for /clips
router.get("/clips", (req, res) => {
  // Get the query parameter from the request
  const query = req.query.q;

  // Write the query to the CLIPS process stdin stream
  clips.stdin.write(`${query}\n`);

  // Listen for data events on the CLIPS process stdout stream
  clips.stdout.on("data", (data) => {
    // Send the data from the CLIPS process as the response
    res.json({ message: `CLIPS output: ${data}` });
  });
});

// Export the router
module.exports = router;