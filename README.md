# Installation

```
$ npm install -g mjml-server
```

# Usage

```
$ mjml-server -h

  Usage: mjml-server [options]

  Options:

    -V, --version       output the version number
    -p, --port <n>      port of server (default: 1410)
    --hostname [value]  port of server (default: 127.0.0.1)
    -h, --help          output usage information
```

# Example request

```
$ curl http://127.0.0.1:1410 -d mjml="<mjml></mjml>"

    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>
...
```
