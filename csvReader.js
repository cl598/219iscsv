class csvReader{
    static getRecords(filename, Model) {
        const file = require('csvFile.js');
        const fs = require('fs');
        const parse = require('csv-parse/lib/sync')
        let absolutePath = file.getAbsolutePath(filename);

        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
        };

        let fileContents = fs.readFileSync(absolutePath);
        const lines = parse(fileContents, options)
        let list = Array();

        lines.forEach(function (file) {
            list.push(Model.create(file));
        })

        return list;

    }
}
module.exports = csvReader;