# ThreatWare Viewer

ThreatWare is a platform that is intended to perform network scanning to uncover security vulnerabilities. The platform consists of 3 major components: ThreatWare Backend Server, Scanners and Viewer. This software is the viewer which allow the users to view and adjust the scanning parameters. 

The future roadmap of the viewer will add features to start, control and stop scanning, as well as to view the scanning result.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


### Launch ThreatWare Backend Server
Make sure a ThreatWare Backend Server is running and get the information of the url.
Update the configuration in env.js

```
window.appConfig = {

    //url of the backend server
    backend_url: "http://localhost:5000/1.0",

    //user token used to authenticate the user
    user_token: '505b011e-f824-479f-bf83-ae8b6896ed74'
};
```


## Start up Application
Under the application directory, run
```
  npm start
```
