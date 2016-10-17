### Nottingham
1. Link to ABC files: ![http://abc.sourceforge.net/NMD/](http://abc.sourceforge.net/NMD/)
2. Execute in Javascript console
[...document.querySelectorAll('li a')].slice(9)
    .map(a => a.href)

// In terminal



// To get Bach links
// http://trillian.mit.edu/~jc/cgi/abc/tunefind?P=Johann&find=FIND&m=title&W=wide&scale=0.70&limit=1000&thresh=5&fmt=single&V=1&Tsel=tune&Nsel=0

links = [...document.querySelectorAll('a')]
    .filter(a => a.textContent == 'abc')
    .map(a => a.href)
    .join('\n')