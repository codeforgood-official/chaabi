## Simplest and trustworthy way to encrypt anything. All locally.

[![Generic badge](https://img.shields.io/npm/dt/chaabi)](https://shields.io/)


> How to encrypt: `chaabi "<text>"`

> How to decrypt: `chaabi open`

![Demo](https://media.giphy.com/media/3og0IzGrdOeLLMbtoQ/giphy.gif)

### Getting Started

- `npm install -g chaabi`

- Start terminal and type `chaabi` to get started


The encrypted data is stored in a .chaabi file, in the same directory where the command is run from. To Decrypt you must run the command from the same directory. This way you can store information in multiple folders.

### How to share project secrets with team in usual development workflow

* Go to project directory and create a chaabi file by adding any secret text e.g. development server credentials 
```
chaabi "developemnt server ip:129.39.23.145, keyLocation:./keyFileToCloud, systemuser: dev, pass:itsasecret"`
chaabi "project management asana, admin email: ateam@gmail.com"
chaabi "git username: mygitname, pass:secrret"
```
* Add .chaabi file to git and push. 
```
git add .chaabi
```
* Share decryption password with whoever you want to give access to. 
That's it. As a convention keep .chaabi file at project root folder.

**Encryption algorithm used: `aes-256-ctr`**

### Roadmap:
1. Save any text in encrypted format. Decrypt through password. > Done
2. Save website credentials in encrypted format intuitively. [Resources](https://github.com/sindresorhus/opn) > Pending
3. Encrypt(password protect) any file on computer system. > Pending
4. Auto generate passwords and save automatically. > Pending
5. Support for more encryption algorithms > Pending
6. Feedback from the community



How to contribute: https://goo.gl/forms/fcFhNe2bF0kjX5vh1
