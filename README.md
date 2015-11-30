# hexo-helper-obfuscate
Hexo helper plugin for obfuscating strings such as email addresses. Handy against web-crawlers.

## Install
> npm install hexo-helper-obfuscate --save

## Usage
```ejs
<a href="mailto:<%- obfuscate('jdoe@example.com')" %>>Email</a>
```

The helper will encode the characters of the string in html entities, randomly choosing between ascii and utf-8 representation. The result will look like this:

```html
<a href="mailto:&#x006A;&#x0064;&#111;&#101;&#64;&#x0065;&#x0078;&#x0061;&#x006D;&#112;&#x006C;&#101;&#46;&#x0063;&#111;&#x006D;">Email</a>
```

Make sure to use `<%- obfuscate() %>` and not `<%= obfuscate() %>` to prevent EJS from escaping the generated string.
