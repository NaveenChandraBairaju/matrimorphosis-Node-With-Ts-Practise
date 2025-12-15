import * as fs from "fs";

// Log file name
const logFile = "user-activity.log";

// Function to log user activity using callbacks
export function logActivity(username: string, action: string) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${username}: ${action}\n`;

  fs.appendFile(logFile, logEntry, (err:any) => {
    if (err) {
      console.error("Error writing to log file:", err);
      return;
    }

    console.log("Log saved:", logEntry.trim());
  });
}
