#RenReader

I'm a huge fan of reading old books and thankfully Project Gutenberg makes these books available for all of us. RenReader is an React driven app that makes reading the HTML generated files more pleasant to read.

RenReader is a static React & ES6 web app. Books can be easily converted to RenReader format from their generated HTML versions, then added as React Components which can be added to the reader for easy reading.

##Screenshot
![Screenshot](http://h4z.it/Image/52e8a5_erScreenshot.PNG)

##Set up

Clone the repo and install the node dependencies.

```
git clone https://github.com/Technopathic/RenReader.git
cd RenReader
npm i
```

###Development

Run the npm script `dev` to develop.

```
npm run dev
```

A webpack server will now be running on `4000`, serving the contents of the `public` directory. The `entry` files are in `src` - `index.js` and `style.css`.

NOTE: this is using webpack-dev-server, not actually overwriting the files in `public`. For that, you will need to run the build script.

###Production

Run the npm script 'build' to update `style.css` and `index.js` in the `public` directory. Upload this directory to your web server.

```
npm run build
```
