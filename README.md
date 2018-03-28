# cryme.me

## Develop

```sh
cd gatsby-proj && npm i
```

## Deploy

1. Make sure you are on the right branch

```sh
git branch -D build && git checkout -b build
```

2. Build the project

```sh
cd gatsby-proj && npm i && gatsby build && cp -r copy_to_public/* public && cp -r public/* .. && cd .. && rm -r gatsby-proj
```

3. Push to GitHub

```sh
git add -A && git commit -m 'update site' && git push -f origin build
```

4. Submit a PR into [cry.me](https://github.com/cry-me/cry-me.github.io).

5. Clean up project

```sh
git reset HEAD --hard && rm -r design illustration static && git checkout master
```
