import dbConnect from './dbConnect'
const csv = require('csv-parser')
const fs = require('fs')
const Uni = require('../data/models/Uni')

// To avoid the new line when printing
console.log = function (d) {
    process.stdout.write(d)
}

dbConnect()

const csvParser = async () => {
    var count = 0;
    fs.createReadStream('../costs.csv')
        .pipe(csv())
        .on('data', (data) => {
            var newUni = new Uni({
                id: data['ID'],
                name: data['Name'],
                roomCharge: data['RoomCharge'],
                boardCharge: data['BoardCharge'],
                tuition: data['Tuition'],
                fees: data['Fees'],
                bookSupplies: data['BookSupplies'],
                onCampusCost: data['OnCampus'],
                offCampusCost: data['OffCampus'],
                acceptRate: data['AcceptRate'],
                totalStudents: data['TotalStudents'],
                website: data['Website'],
            })

            newUni.save(function (err, item) {
                if (item) {
                    count++
                    console.log(", " + count);
                }
                if (err) {
                    console.log("Error")
                }
            });
        })
        .on('end', () => {
            console.log("Done");
        });
}

export default csvParser


