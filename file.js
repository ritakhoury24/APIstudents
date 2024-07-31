const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const xlsx=require('xlsx')

let wb= xlsx.readFile("students.xlsx");
let ws1 = wb.Sheets["Sheet1"]
let data = xlsx.utils.sheet_to_json(ws1)


app.get('/students', function (req, res) {
    res.send(data)
  })


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
