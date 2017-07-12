## Installation

```bash
npm install
bundle install
```

Then run `gulp` to start the local server with BrowserSync.

## How to work on
on the local machine, setup astir.ninja as the vhost. this settings can be changed in the file _config.yml file.
Gulp task to run on local machine is serve:dev

MIght need to run the following commands is assets, ie script.min.js or canvas assets are not loading
cp -af ./src/assets/canvas/ ./site/assets/canvas/
cp -af ./src/assets/canvas/ ./serve/assets/canvas/

In order to prepare website for live run gulp task
ensure that the final domain is set in _config.build.yml
gulp publish

NOTE: you could also run ftp-deploy to connect to hostdog via ftp and upload the contents of the sites directory



## Deploying to `gh-pages`
In order to publish your work run `gulp publish && gulp deploy` while on the master branch.
