# cryme.me

## Develop

```sh
cd gatsby-proj && npm i
```

## Deploy

1. Make sure you are on the right branch

```sh
git branch -D master && git checkout -b master
```

2. Build the project

```sh
cd gatsby-proj && npm i && gatsby build && cp -r copy_to_public/* public && cp -r public/* .. && cd .. && rm -r gatsby-proj
```

3. Test it out

```sh
python -m SimpleHTTPServer
```

4. Push to GitHub

```sh
git add -A && git commit -m 'update site' && git push -f origin master
```

5. Submit a PR into [cry.me](https://github.com/cry-me/cry-me.github.io).

6. Clean up project

```sh
git checkout develop && git reset HEAD --hard && rm -r design illustration static
```
