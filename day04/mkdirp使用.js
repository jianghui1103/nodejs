var mkdirp = require('mkdirp');

mkdirp('./upload').then(function(err){
    if(err) {
        console.log(err)
    }
})