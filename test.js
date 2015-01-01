var http  = require('http');
var q = require('querystring');
var url = require('url');

//http://www.youtube.com/watch?v=njkOJyDSB6w
var pager;

function getVideo (vid){
        //var video_info_url = 'http://www.youtube.com/get_video_info?eurl=http://localhost/&sts=1586&video_id=' +vid;
        var video_info_url = 'http://www.youtube.com/get_video_info?video_id='+ vid +'&el=embedded&ps=default&eurl=&hl=en_US';
        var options = {
            host: url.parse(video_info_url).host,
            port: 80,
            path: url.parse(video_info_url).path
        };
        //console.log(options);
        var infos;

        http.get(options, function(res) {
            res.on('data', function(data) {
                infos += data.toString();
                //console.log(infos);
            }).on('end', function() {
                printTest(infos);
            });
        });
    }

function printTest (info) {
    var parsed = q.parse(info);
    var vidData = parsed.adaptive_fmts.split(',')
    //var test = q.parse(vidData[5]);
    //console.log(test.itag);
    for (var i in vidData){
        var test = q.parse(vidData[i])
        console.log(test.itag);
        // if ( test.itag == 135){
        //     console.log(test)
        // }
    }
}

getVideo('UE8yHySiJ4A');
