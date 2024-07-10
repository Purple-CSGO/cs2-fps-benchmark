// initial generated code
const fs = require('fs');

const constants = {
  demoname: 'MyDemon',
  version: '1.0',
  tick: 60,
  playername: 'John Doe'
};

fs.readFile('bench.cfg', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  let result = data;
  Object.keys(constants).forEach(key => {
    const placeholder = `{{${key}}}`;
    const value = constants[key];
    result = result.replace(new RegExp(placeholder, 'g'), value);
  });

  fs.writeFile('target.cfg', result, 'utf8', err => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Target file generated successfully!');
  });
});