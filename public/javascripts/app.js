var players = {};

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    var incommingMsg = JSON.parse(message);
    players[incommingMsg.uuid] = {x: incommingMsg.x, y: incommingMsg.y};
    for(var i in wss.clients) {
      wss.clients[i].send(JSON.stringify(players));
    }

  });
  ws.send(JSON.stringify(players));
});