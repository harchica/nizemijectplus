
var apikey    = "6481af6e91c05d4d9ca11d732a0dafc3192f71f4157167f2b25a22c831b567f7";
var clientkey = "e2dee1f57b754c3e6ee70aa958e98b608c935a712b8562a0f361b30b6236d086";
var ncmb      = new NCMB(apikey, clientkey);


window.onload = function(){
      var Message = ncmb.DataStore("Message");

  Message.fetchAll()
         .then(function(result){
           //最新の一件を取得する
        for (var i = 0; i < result.length ; i++) {
           logs = result[i];
           var log = logs.get("result");
           var good = logs.get("good");
           var bad = logs.get("bad");
           var date = logs.get("createDate");
           // contents[Math.floor(Math.random() * contents.length)].get("contents")
           // window.alert("前回送ったのは「" + result + "」だよ！");
            //for (var i = 0; i < results.length; i++) {
            //result = result[result.length - 1].get("result");
              //var object = results[i];
              //console.log(object.score + " - " + object.get("playerName"));
          if(good>0){
           // $('<li class="resultlog">'+ result +'</li>').appendTo('ul');
       var list = $('<li class="resultlog">'+ log+'<p class="goodlog">good:'+ good+'<br>date:'+date+ '</p></li>');
        $("#afterlogs").after(list);
        $('.resultlog').attr('id', 'log'+i);
        $('#log'+i).css('background-color','rgba(255,'+(236-good)+','+(178-good)+',1)');
        }
        if(bad>0){
        var list = $('<li class="resultlog">'+log +'<br><p class="badlog">bad:'+bad+'<br>date:'+date+ '</span></li>');
        $("#afterlogs").after(list);
        $('.resultlog').attr('id', 'log'+i);
        $('#log'+i).css('background-color','rgba('+(226-bad)+','+(224-bad)+','+(255-bad)+',1)');

        }
            }
          })
         .catch(function(err){
            window.alert("取得できませんでした…");
          });
// ページ読み込み時に実行したい処理
};