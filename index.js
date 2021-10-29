/*
 * MIT License
 * 
 * Copyright (c) 2021 Andrew Longhorn
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;

var key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

app = express()

//
// just a welcome message
//
app.get('/', (req, res) => {
  res.send('Example MVision API Webhook Endpoint implementation!');
})


//
// this is the actual webhook processing function
//
app.post('/events', (req, res) => {
  console.log(req);
  res.status(200).end();
})

var server = https.createServer(options, app);

//
// Start the server
//
server.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
})
