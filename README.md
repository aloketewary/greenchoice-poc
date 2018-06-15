# greenchoice-poc
This is a green choice poc

## What's in here
We created three separated folders one for Header (/gcheader) another for body and footer(/gcbody) and the main one as Composite UI ((/gcCompositUI))

## How to Run
Goto individual folders and run individual folder in different instance of any command line which you preferred (i.e. gitbash, bash, cmd). and run the commands
*note: you need to install for further processes
`npm i` // if you use npm
or 
`yarn` // if you use yarn

then
`npm i -g http-server` // for instant run without compile
or 
`yarn global add http-server`

then run the app after install
`http-server ./dist -p 8082` // port is after -p you can use any four digit port number
`http-server ./dist -p 8083` 
`http-server ./dist -p 8180` 