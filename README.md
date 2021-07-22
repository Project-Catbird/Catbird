# 1. Catbird - Retail Web Portal Re-design / Overhaul
## 1.1. Table of Contents
- [1. Catbird - Retail Web Portal Re-design / Overhaul](#1-catbird---retail-web-portal-re-design--overhaul)
  - [1.1. Table of Contents](#11-table-of-contents)
- [2. Introduction](#2-introduction)
- [3. Project Setup:](#3-project-setup)
  - [3.1. Environment Setup](#31-environment-setup)
  - [3.2. Clone and install the dependencies](#32-clone-and-install-the-dependencies)
- [4. Configuring and running the server.](#4-configuring-and-running-the-server)
  - [4.1. Server Configuration](#41-server-configuration)
    - [4.1.1. Obtaining an API Key](#411-obtaining-an-api-key)
    - [4.1.2. Creating and Setting Up a Config File](#412-creating-and-setting-up-a-config-file)
  - [4.2. Starting and terminating the server](#42-starting-and-terminating-the-server)

# 2. Introduction
Catbird is a complete re-design and overhal over its predecessor, Birdcat, using modern technologies and design elements with a refreshing and intuitive user intercace. By building Catbird using React Components, users can expect a responsive and snappy user interface that makes the retail experience quick, easy, and enjoyable.

# 3. Project Setup:

## 3.1. Environment Setup
**Download and install the following:**
- [ ] [Node.js](https://nodejs.org/en/)

## 3.2. Clone and install the dependencies
Clone the repository by executing the following commands into your terminal and navigate into the cloned directory:
```
git clone https://github.com/Project-Catbird/Catbird.git
cd Catbird
```
Install the the project dependencies buy executing:
```
npm install
```
# 4. Configuring and running the server.

## 4.1. Server Configuration

### 4.1.1. Obtaining an API Key
1. Log in to [GitHub](ttps://github.com/) and navigate to [Personal Access Token Settings](https://github.com/settings/tokens)
2. Click "Generate new token"
3. Given the Token a Description ("Hack Reactor Capstone API", or whatever is most descriptive to you)
4. Under Select Scopes, select the following: (You may select more for more features this API will offer in the future)
  * read:org
  * user
  * read:user
  * user:email
  * user:follow
5. Generate Token
  * Note that this token is only viewable once, at generation time. Make sure to copy it to a secure place and _**never check it into your git history**_.

**If you token is compromised** (e.g. it is accidentally checked into git or unwittingly becomes part of a Webpack build) make sure to revoke the token immediately. You may generate a replacement token if necessary.

### 4.1.2. Creating and Setting Up a Config File
From the Catbird folder, navigate to ./client/src/config/ and create a new file named config.js
Copy the contents from exampleConfig.js to config.js then replace PERSONAL_ACCESS_TOKEN with the token generated from the previous step.

## 4.2. Starting and terminating the server
To start the server, run the following terminal command from the root directory:
```
npm start
```
By default, the server will be serving Catbird to http://localhost:3000/

To terminate the server, press `Ctrl + C` in your server terminal.