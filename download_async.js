// This script doesn't really work for the bach files
// because they're all mostly from the same server
// and the server only accepts one request at a time for some
// reason, but I'm keeping it here because it may be useful for
// later files

var fs = require('fs')
var rp = require('request-promise')

var urls = fs.readFileSync(process.argv[2], 'utf8')
urls = urls.split('\n')

var promises = []
var returned = 1
urls.forEach(function (url) {
	var promise = rp.get(url)
	promise.then(function () {
		console.log(`Request ${returned} returned`)
		returned++
	})
	promises.push(promise)
})

var bigPromise = Promise.all(promises)

bigPromise.then(function (files) {
	var text = files.join('\n')
	fs.writeFileSync(`${process.argv[2]}.abc`, text)
})