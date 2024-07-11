/* The util to generate desired config file */
const fs = require("fs");
const archiver = require("archiver");

// Setup config
const configPath = process.argv[2] || "./config/anc-v1.json";
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const context = {
  ...config,
  cfgname: `${config.map.substring(0, 3)}-${config.version}`,
  demoname: `benchmark-${config.map}-${config.version}`,
};

console.log("[Context]", JSON.stringify(config, null, "  "));

// Check if config properties are missing
Object.keys(context).forEach((key) => {
  if (typeof context[key] === "undefined") {
    throw new Error(`Missing value for property: ${key}`);
  }
});

// Generate .cfg file
const data  = fs.readFileSync("template.cfg", "utf8");

let result = data;
Object.keys(context).forEach((key) => {
  const placeholder = `[[${key}]]`;
  const value = context[key];
  result = result.replaceAll(placeholder, value);
});

if (!fs.existsSync("out")) fs.mkdirSync("out");
fs.writeFile(`out/${context.cfgname}.cfg`, result, "utf8", (err) => {
  if (err) {
    throw new Error("Writing file:", err);
  }
  console.log("[Success] Cfg file generated!");
});

// Setup output file stream for zip
const output = fs.createWriteStream(`out/${context.demoname}-rev${context.rev}.zip`);
const archive = archiver("zip", {
  zlib: { level: 9 }, // Set the compression level to maximum
});

// Listen for all archive data to be written
output.on("close", function () {
  console.log(
    "[Success] Zip file has been finalized and the output file descriptor has closed."
  );
});

// Good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on("warning", function (err) {
  if (err.code === "ENOENT") {
    // log warning
  } else {
    // throw error
    throw err;
  }
});

// Good practice to catch this error explicitly
archive.on("error", function (err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append files
archive.file(`out/${context.cfgname}.cfg`, { name: `${context.cfgname}.cfg` });

// Check if demo file exists
const demoPath = process.argv[3];
if (!demoPath || !fs.existsSync(demoPath)) {
  console.error(
    "[Error] Demo file not found:",
    demoPath,
    ", demo will not be included in the zip file"
  );
} else {
  archive.file(demoPath, { name: `${context.demoname}.dem` });
}

// Finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();
