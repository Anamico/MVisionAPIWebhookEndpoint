# Introduction

This is a "hello world" example of how to create a web hook processing endpoint for McAfee MVision API

# How To:

clone the repo:
```bash
git clone ...
cd ...
```

Install the dependencies:
```bash
npm i
```

create the keypair:
```bash
ssh-keygen 
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/alonghor/.ssh/id_rsa): ./id_rsa
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in ./id_rsa.
Your public key has been saved in ./id_rsa.pub.
The key fingerprint is:
SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx user@host
The key's randomart image is:
+---[RSA 3072]----+
|        .   ...  |
|         o . +o o|
|        o . .o*.+|
|         .   o Bo|
|        S   . o+B|
|           S o.BB|
|          . o.X+B|
|           o E+B=|
|       o    oo==B|
+----[SHA256]-----+
```

Run the example server:
```bash
node index.js
```

Set up the webhook in MVision Developer Portal https://developer.mvision.mcafee.com

(Instructions coming soon)



