/* globals chrome */

// https://developer.chrome.com/extensions/runtime#event-onInstalled
chrome.runtime.onInstalled.addListener(function (object) {
  try {
    // On install, open a welcome tab.
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      const postInstallURL = 'http://launch.am/?startpage=1'
      chrome.tabs.create({ url: postInstallURL })
    }
  } catch (e) {
    console.error(e)
  }
})

// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function (tab) {
  try {
    var iconURL = 'http://launch.am/?startpage=1'
    //alert(11);
    chrome.tabs.create({ url: iconURL })
   // window.open(iconURL,'_blank')
  } catch (e) {
    console.error(e)
  }
})


/*chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://stackoverflow.com/";
  chrome.tabs.create({ url: newURL });
});*/


var twitchOauth = OAuth2.addAdapter({
  id      : 'twitch',
  codeflow: {
    method: "POST",
    url   : "https://api.twitch.tv/kraken/oauth2/token"
  },
  opts    : constants.twitchApi
});
