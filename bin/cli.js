
#!/usr/bin/env node
const argv = process.argv.slice(2);
if (argv[0] === 'lead') {
  if (argv[1] === 'add') {
    console.log('Pretend to add a lead (hook into API)');
  }
}
console.log('salespilot cli commands: lead add --name "Name" --email "e"');