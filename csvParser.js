const fs = require('fs');
const city = require('/city')
const parse = require("csv-parse");
const output = []
let csvFile = '/csv/worldcities';


fs.createReadStream(csvFile)
    .pipe(parse({
        columns: true,
        delimiter: ',',
        trim: true,
    })
        .on('readable', function(){
            let line;
            while (line = this.read()) {
                console.log(line);
                let cities = city.create(line);
                output.push(line);
            }
        })

        .on('end', function(){
            console.log(output);

        }));
