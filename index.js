var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var { get, set } = require("sdk/preferences/service");
var { when: unload } = require("sdk/system/unload");

var oldtype = get("network.proxy.type");
var oldautoconfig_url = get("network.proxy.autoconfig_url");

unload(function() {	
	set("network.proxy.type", oldtype);
	set("network.proxy.autoconfig_url", oldautoconfig_url);  
});



var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
    id: "tooglebutton",
    label: "tooglebutton",
	icon: "./logo38.png",
	  
    onChange: function(state) {
		
      console.log(state.label + " checked state: " + state.checked);
      
	  if (state.checked) {
		  
			set("network.proxy.type", 2);
			set("network.proxy.autoconfig_url", "https://e-biblioteka.liepu.lv/default.pac");
	  }
	  else {
			set("network.proxy.type", 0);
			set("network.proxy.autoconfig_url", "");
	  }	 
      
    }
  });
