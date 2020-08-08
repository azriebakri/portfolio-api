
const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`portfolio-func-contact-form @ port:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello world');
})

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     if (req.query.name || (req.body && req.body.name)) {
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: "Hello : user" + (req.query.name || req.body.name)
//         };
//     }
//     else {
//         context.res = {
//             status: 400,
//             body: "Please pass a name on the query string or in the request body"
//         };
//     }
// };