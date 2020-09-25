const fs = require('fs').promises;
const { promisify } = require('util');
const { join } = require('path');

const parse = promisify(require('csv-parse'));

function formatTown(input) {
  const lowercase = input.toLowerCase();
  return `${input[0]}${lowercase.slice(1)}`;
}

function formatZip(input) {
  if (!input) {
    return input;
  }

  const numericOnly = `${input}`.replace(/\D/g,'');

  if (numericOnly.length === 4) {
    return `0${numericOnly}`;
  }

  return numericOnly;
}

(async function() {
  try {
    const csvString = await fs.readFile(join(__dirname, 'locations.csv'));
    const results = await parse(csvString);

    results.shift();

    // Original: formatTown(row[0]), row[1], row[2], formatZip(row[8]),
    // 0 = City/Town
    // 1 = Address
    // 2 = Instructions
    // 3 = Zip
    const data = results.map((row) => [
      formatTown(row[0]), row[5], row[4], formatZip(row[3]),
    ]);

    await fs.writeFile(join(__dirname, '../src/data.json'), JSON.stringify(data));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
