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
[...document.querySelectorAll('a')]
.map(a => a.href)
.map(a => a.match("bach.+mid"))
.filter(a => a)
.map(a => a.input)
.join('\n')
```

3. Copy output to bach_files.txt. The `bach_files.txt` file in the repo contains a couple additional URLs that have been manually aggregated from the internet. 

4. In terminal. There are about 250 files that require to be downloaded with this.

```bash
mkdir -p bach_files/midi bach_files/abc
wget -i url_files/bach_files.txt -P bach_files/midi

cat bach_files/abc/* > abc/bach.abc
```

5. Replace all the useless crap in the file with these regex
	* HTML tags `<.+>`
	* CSS `{.+}`
	* Comments `^%.*`
	* Filenames `^F:.*`
	* Hidden inputs `<input .+`, `">`
	* `P=tuneget V=1 B=1 200x200`
	* `W:.*`
	* `fromCache.*`
	* `body`          
	* `div.inline`    
	* `div.exit`      
	* `object.inline`
	* `These files should be available for 24 hours.`
	* `If you'd like to donate to the upkeep of the Tune Finder, we have a Paypal button:`
	* `^\.$`
	* `Found X:.*`
	* `Mismatch: X.*`
	* `&amp;A BArFly optimized version.`

6. Replace multiple empty lines with single empty lines. You may require more than just the cat command to do this, get creative with your find and replaces

```
cat -s bach.abc > bach.abc
```