# WeBuyApp

# Developped by Luc Lonjon & Gregoire Reboul

# Install dependencies

cd ./webuy-app
npm -i --save-dev

# How to run

#1 Run the back end

cd ./webuy-app/server
node server.js

#2 Run the front end
cd ./webuy-app
npm start

# How to run cypress (run only if you run back and front already)

# Tous les tests sont présents dans le folder /integration

./node_modules/.bin/cypress open

# Pour effectuer un run global

./node_modules/.bin/cypress run --record --key 739d926a-93e3-490c-bccf-9686757ee3e3
