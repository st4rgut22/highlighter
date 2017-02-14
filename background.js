chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id,{"message":"browserAction"})
	  });
})

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if (request.message=="linkClicked"){
		var d = request.description
		if (d.indexOf('.')>=0){ //this will always evaluate to true and execute, leaving empty string ||||
			var d = d.slice(0,d.indexOf('.')) //get a snippet of text
		}
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    var activeTab = tabs[0];
	setTimeout(function(){chrome.tabs.sendMessage(activeTab.id,{"newmessage":"newKeyName","msg":d}); console.log(d); console.log(activeTab.id)},3000)
	  });
	}
})
