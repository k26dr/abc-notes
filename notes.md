## Nottingham

1. Link to ABC files: ![http://abc.sourceforge.net/NMD/](http://abc.sourceforge.net/NMD/)

2. Execute in Javascript console

```js
[...document.querySelectorAll('li a')].slice(9)
    .map(a => a.href)
```

3. Copy output to nottingham_files.txt

4. In terminal

```bash
wget -i nottingham_files.txt -P nottingham_files
cat nottingham_files/* > nottingham.abc
```

## Bach

1. Link to [Bach ABC files](http://trillian.mit.edu/~jc/cgi/abc/tunefind?P=Johann&find=FIND&m=title&W=wide&scale=0.70&limit=1000&thresh=5&fmt=single&V=1&Tsel=tune&Nsel=0)

2. Execute in Javascript console

```js
links = [...document.querySelectorAll('a')]
    .filter(a => a.textContent == 'abc')
    .map(a => a.href)
    .join('\n')
```

3. Copy output to bach_files.txt. The `bach_files.txt` file in the repo contains a couple additional URLs that have been manually aggregated from the internet. 

4. In terminal. There are about 400 files that require to be downloaded with this. You might be better off using a Node script to download all of them asyncronously, but I didn't bother for now. 

```bash
wget -i bach_files.txt -P bach_files
cat bach_files/* > bach.abc
```