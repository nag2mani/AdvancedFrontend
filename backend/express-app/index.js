const express = require('express')
const app = express()
const fs = require("fs");
const port = 3000

// app.get('/', (req, res) => {
//     console.log(req.headers);
//     console.log(req.body);
//   res.send('Hello World!')
// })

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/api/", (req, res) => {
    fs.readFile("Data.json", "utf8", (err, data) => {
        res.send(JSON.parse(data));
    });
})

app.get("/", (req, res) => {
    fs.readFile("Data.json", "utf8", (err, data) => {
        var userdata = JSON.parse(data);
        var html = `
        <html>
        <body>
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
        `;

        // Loop through the user data and add each user to the table
        for (let i = 0; i < userdata.length; i++) {
            html += `
                <tr>
                    <td>${userdata[i].id}</td>
                    <td>${userdata[i].first_name}</td>
                    <td>${userdata[i].last_name}</td>
                    <td>${userdata[i].email}</td>
                    <td>${userdata[i].gender}</td>
                </tr>
            `;
        }

        // Close the HTML tags
        html += `
            </table>
        </body>
        </html>
        `;
        res.send(html);
    });
});

app.post("/add", (req, res) => {
    const {a, b} = req.body;
    res.send({result : parseInt(a) + parseInt(b)});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

