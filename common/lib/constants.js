(function (){

  var root = this;

  var constants = {
    twitchApi: {
      api          : "https://id.twitch.tv/oauth2/authorize",
      response_type: 'code',
      client_id    : 'zgbusmpgy8tmve8in2ydognq9nz1ji',
      client_secret: 'iak9cshu7esyv1d02jogbe6w436egt',
      scope        : 'user_follows_edit user_read',
      redirect_uri : 'https://launch.am/twitchLogin.php'
    }
  };

  if ( typeof exports !== 'undefined' ) {
    if ( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = constants;
    }
    exports.constants = constants;
  } else {
    root.constants = constants;
  }
}).call(this);
