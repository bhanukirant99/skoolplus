# airclass

🚀 `A free WebRTC browser-based video call, chat and screen sharing` 🚀

<br>

[//]: https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

[![Author](https://img.shields.io/badge/Author-bhanukiran-brightgreen.svg)](https://www.linkedin.com/in/bhanukiran--976a07101/)
![License: AGPLv3](https://img.shields.io/badge/License-AGPLv3-blue.svg)
[![Donate](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg)](https://paypal.me/bhanukiran?locale.x=it_IT)
[![Repo Link](https://img.shields.io/badge/Repo-Link-black.svg)](https://github.com/bhanukirant99/airclass)
[![Code style: prettier](https://img.shields.io/badge/Code_style-Prettier-ff69b4.svg?)](https://github.com/prettier/prettier)
[![Gitter](https://badges.gitter.im/airclass/community.svg)](https://gitter.im/airclass/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Discord](https://img.shields.io/badge/Chat-Discord-green)](https://discord.gg/TAeWXJCvBr)

Powered by `WebRTC` using google Stun and [numb](http://numb.viagenie.ca/) Turn. `airclass` provides video quality and latency not available with traditional technology.

Open the app with the following **supported browsers** & many more...

[//]: #![webrtc](www/images/webrtc.png)

[![Foo](www/images/browsers.png)](https://skoolplus.herokuapp.com/)

## https://skoolplus.herokuapp.com/

<br>

[![airclass](www/images/preview.png)](https://skoolplus.herokuapp.com/)

## Features

-   Is `100% Free` and `Open Source`
-   No download, plug-in or login required, entirely browser based
-   Unlimited number of conference rooms without call time limitation
-   Possibility to Lock/Unlock the Room for the meeting
-   Desktop and Mobile compatible
-   Optimized Room URL Sharing (share it to your participants, wait them to join)
-   Webcam Streaming (Front - Rear for mobile)
-   Audio Streaming crystal clear
-   Screen Sharing to present documents, slides, and more...
-   File Sharing, share any files to your participants in the room
-   Select Audio Input - Output && Video source
-   Ability to set video quality up to 4K and adapt the FPS
-   Recording your Screen, Audio and Video
-   Chat with Emoji Picker & Private messages & Save the conversations
-   Simple collaborative whiteboard for the teachers
-   Share any YouTube video in real time
-   Full Screen Mode on mouse click on the Video element
-   Possibility to Change UI Themes
-   Right-click on the Video elements for more options
-   Direct `peer-to-peer` connection ensures the lowest latency thanks to `WebRTC`
-   Supports [REST API](api/README.md) (Application Programming Interface)

## Demo

-   `Open` https://skoolplus.herokuapp.com/newcall `or` https://skoolplus.herokuapp.com/newcall
-   `Pick` your personal Room name and `Join To Room`
-   `Allow` to use the camera and microphone
-   `Share` the Room URL and `Wait` someone to join for video conference

## Quick start

-   You will need to have `Node.js` installed, this project has been tested with Node version [12.X](https://nodejs.org/en/blog/release/v12.22.1/) and [14.X](https://nodejs.org/en/blog/release/v14.17.5/)

```bash
# clone this repo
$ git clone https://github.com/bhanukirant99/airclass.git
# go to airclass dir
$ cd airclass
# copy .env.template to .env
$ cp .env.template .env
# install dependencies
$ npm install
# start the server
$ npm start
```

-   Open http://localhost:3000 in browser

---

## Docker

-   Install https://docs.docker.com/compose/install/

```bash
# copy .env.template to .env
$ cp .env.template .env
# build or rebuild services
$ docker-compose build
# create and start containers
$ docker-compose up # -d
# stop and remove resources
$ docker-compose down
```

-   Open http://localhost:3000 in browser

---

## API

```bash
# The response will give you a entrypoint / Room URL for your meeting, where authorization: API_KEY_SECRET.
$ curl -X POST "http://localhost:3000/api/v1/meeting" -H "authorization: airclass_default_secret" -H "Content-Type: application/json"
$ curl -X POST "https://skoolplus.herokuapp.com/api/v1/meeting" -H "authorization: airclass_default_secret" -H "Content-Type: application/json"
$ curl -X POST "https://skoolplus.herokuapp.com/api/v1/meeting" -H "authorization: airclass_default_secret" -H "Content-Type: application/json"
```

## Credits

Many Thanks to:

-   ianramzy (html [template](https://cruip.com/demos/neon/))
-   vasanthv (webrtc)
-   Sajad (chat)
-   i-aryan (whiteboard)
-   fmeringdal (rest api)

From where I took inspiration for this project. ❤️