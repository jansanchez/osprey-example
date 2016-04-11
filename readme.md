# RAML Example



## Install project
```
sudo npm install -d 
```

## Install raml2html 
```
sudo npm i -g raml2html
```

## Usage

### Start Express Server with Services
```
npm start
```

### Export .raml to html
```
raml2html assets/raml/api.raml > ./html/index.html
```


### Serving .html file with Python in http://localhost:8000/
```
cd ./html/ && python -m SimpleHTTPServer
```

Then, open in browser: http://localhost:8000/ (WEB)

### Serving .html file like a simple html from google chrome
```
google-chrome ./html/index.html
```



After, open in browser: http://localhost:3000/ (REST) from 'routes/raml.js'


```
http://localhost:3000/attendees
http://localhost:3000/events/7
```



