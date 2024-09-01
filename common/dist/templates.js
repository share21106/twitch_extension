this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["channel"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"stream js-filterable\">\r\n    <div class=\"item-image-container channel-logo offline\">\r\n        <img class=\"lazy\" alt=\"\" data-original=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.logo : stack1), depth0))
    + "\"/>\r\n    </div>\r\n    <span class=\"stream-info stream-title\">\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\r\n    </span>\r\n    <span class=\"stream-info\">\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.game : stack1), depth0))
    + "\r\n    </span>\r\n</div>\r\n";
},"useData":true});
this["Handlebars"]["templates"]["channelnotification"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"stream js-filterable\">\r\n    <div class=\"item-image-container channel-logo\">\r\n        <img class=\"lazy\" alt=\"\" data-original=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.logo : stack1), depth0))
    + "\"/>\r\n    </div>\r\n    <span class=\"stream-info stream-title\">\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\r\n    </span>\r\n    <span class=\"stream-info channel-notifications-options\" data-channel-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"control-wrapper\">\r\n            <input type=\"checkbox\" data-notification-type=\"desktop\" id=\"dn-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\" "
    + alias2((helpers['h-checked-2'] || (depth0 && depth0['h-checked-2']) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.notificationOpts : depth0)) != null ? stack1.desktop : stack1),{"name":"h-checked-2","hash":{},"data":data}))
    + "/>\r\n            <label for=\"dn-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\">\r\n                <span></span>\r\n\r\n                <div class=\"control-desc\">Show desktop notification</div>\r\n            </label>\r\n        </div>\r\n        <div class=\"control-wrapper\">\r\n            <input type=\"checkbox\" data-notification-type=\"sound\" id=\"sn-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\" "
    + alias2((helpers['h-checked-2'] || (depth0 && depth0['h-checked-2']) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.notificationOpts : depth0)) != null ? stack1.sound : stack1),{"name":"h-checked-2","hash":{},"data":data}))
    + "/>\r\n            <label for=\"sn-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\">\r\n                <span></span>\r\n\r\n                <div class=\"control-desc\">Play sound</div>\r\n            </label>\r\n        </div>\r\n    </span>\r\n</div>\r\n";
},"useData":true});
this["Handlebars"]["templates"]["contextgamemenu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "<div class=\"context-row js-follow-game\">__MSG_m83__</div>\r\n<div class=\"context-row js-unfollow-game\">__MSG_m84__</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.authorized : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["Handlebars"]["templates"]["contextstreammenu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "<div class=\"context-row js-follow\">__MSG_m22__</div>\r\n<div class=\"context-row js-unfollow\">__MSG_m23__</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"context-row js-open-stream\" data-type=\"newlayout\">__MSG_m71__</div>\r\n<div class=\"context-row js-open-stream\" data-type=\"popout\">__MSG_m17__</div>\r\n<div class=\"context-row js-open-in-multitwitch\">__MSG_m87__</div>\r\n<div class=\"context-row js-open-chat\">__MSG_m20__</div>\r\n<div class=\"context-row\" data-route=\"videos/"
    + this.escapeExpression((helpers['h-enc'] || (depth0 && depth0['h-enc']) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1._id : stack1),{"name":"h-enc","hash":{},"data":data}))
    + "\">__MSG_m21__</div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.authorized : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["Handlebars"]["templates"]["contributor"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"contributor js-tab tip\" title=\""
    + alias3(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"login","hash":{},"data":data}) : helper)))
    + "\" data-href=\""
    + alias3(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">\r\n    <img class=\"user-avatar lazy\"\r\n         alt=\"\"\r\n         src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"\r\n         data-original=\""
    + alias3(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "s=140\"/>\r\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["control"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"control\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.range : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.radio : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.checkbox : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.mcheckbox : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"control-desc\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"control-wrapper\">\r\n        <input data-type="
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " type=\"range\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" min=\""
    + alias3(((helper = (helper = helpers.min || (depth0 != null ? depth0.min : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"min","hash":{},"data":data}) : helper)))
    + "\" max=\""
    + alias3(((helper = (helper = helpers.max || (depth0 != null ? depth0.max : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"max","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n        <div class=\"range-helper\">\r\n            <span class=\"range-helper-value\"> "
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + " </span> <span>"
    + alias3(((helper = (helper = helpers.tip || (depth0 != null ? depth0.tip : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tip","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "    <div class=\"control-desc\">"
    + this.escapeExpression(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"control-wrapper\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.opts : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "        <input data-type=\""
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-id="
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + " name=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" type=\"radio\"\r\n               value=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + alias2((helpers['h-checked'] || (depth0 && depth0['h-checked']) || alias3).call(depth0,depth0,depths[1],{"name":"h-checked","hash":{},"data":data}))
    + ">\r\n\r\n        <label for=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <span></span>\r\n            <div class=\"radio-tip\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </label>\r\n        <br/>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"control-wrapper\">\r\n        <input data-type="
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " type=\"button\" value=\""
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "\">\r\n    </div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"control-wrapper\">\r\n        <input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type="
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers['h-checked'] || (depth0 && depth0['h-checked']) || alias1).call(depth0,depth0,{"name":"h-checked","hash":{},"data":data}))
    + "/>\r\n        <label for=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <span></span>\r\n\r\n            <div class=\"control-desc\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </label>\r\n    </div>\r\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"control-desc\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"control-wrapper\">\r\n        <select data-type="
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.opts : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n\r\n    </div>\r\n";
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\r\n                    "
    + alias3((helpers['h-selected'] || (depth0 && depth0['h-selected']) || alias1).call(depth0,depth0,depths[1],{"name":"h-selected","hash":{},"data":data}))
    + " >"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"14":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "    <div class=\"control-desc\">"
    + this.escapeExpression(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"control-wrapper\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.opts : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"clearfix\"></div>\r\n";
},"15":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "        <div class=\"group-wrapper\">\r\n            <input type=\"checkbox\" data-parent-id=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-type=\""
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + alias2((helpers['h-checked'] || (depth0 && depth0['h-checked']) || alias3).call(depth0,depth0,depths[1],{"name":"h-checked","hash":{},"data":data}))
    + "/>\r\n            <label for=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <span></span>\r\n\r\n                <div class=\"control-desc\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n            </label>\r\n        </div>\r\n";
},"17":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"control-desc\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"control-wrapper\">\r\n        <input data-type="
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">\r\n    </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.show : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
this["Handlebars"]["templates"]["game"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"stream game-list-item js-filterable\" data-route=\"browse/"
    + alias2((helpers['h-enc'] || (depth0 && depth0['h-enc']) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.name : stack1),{"name":"h-enc","hash":{},"data":data}))
    + "/streams\">\r\n    <div class=\"item-image-container game-preview\">\r\n        <img alt=\"\" class=\"lazy\" src=\""
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.box : stack1)) != null ? stack1.medium : stack1), depth0))
    + "\"/>\r\n    </div>\r\n    <span title=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"stream-info stream-title\">\r\n            "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.name : stack1), depth0))
    + "\r\n    </span>\r\n    <span class=\"stream-info\">\r\n            "
    + alias2((helpers['h-num-format'] || (depth0 && depth0['h-num-format']) || alias1).call(depth0,(depth0 != null ? depth0.viewers : depth0),{"name":"h-num-format","hash":{},"data":data}))
    + " __MSG_m45__\r\n        </span>\r\n    <span class=\"stream-info\">\r\n            "
    + alias2((helpers['h-num-format'] || (depth0 && depth0['h-num-format']) || alias1).call(depth0,(depth0 != null ? depth0.channels : depth0),{"name":"h-num-format","hash":{},"data":data}))
    + " __MSG_m46__\r\n    </span>\r\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["gameextended"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"item-image-container game-preview\">\r\n    <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.box : stack1)) != null ? stack1.medium : stack1), depth0))
    + "\" alt=\"\"/>\r\n    <!--<span class=\"game-follow\">-->\r\n    <!--<img src=\"../img/heart.svg\" alt=\"\"/>-->\r\n    <!--<img class=\"twin\" src=\"../img/heart.svg\" alt=\"\"/>-->\r\n    <!--</span>-->\r\n</div>\r\n<span class=\"stream-info stream-title\">\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.name : stack1), depth0))
    + "\r\n    </span>\r\n<span class=\"stream-info\">\r\n            "
    + alias2((helpers['h-num-format'] || (depth0 && depth0['h-num-format']) || alias3).call(depth0,(depth0 != null ? depth0.viewers : depth0),{"name":"h-num-format","hash":{},"data":data}))
    + " __MSG_m45__\r\n        </span>\r\n<span class=\"stream-info\">\r\n            "
    + alias2((helpers['h-num-format'] || (depth0 && depth0['h-num-format']) || alias3).call(depth0,(depth0 != null ? depth0.channels : depth0),{"name":"h-num-format","hash":{},"data":data}))
    + " __MSG_m46__\r\n</span>\r\n<span class=\"buttons\">\r\n    <span class=\"button active\" data-route=\"browse/"
    + alias2((helpers['h-enc'] || (depth0 && depth0['h-enc']) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.name : stack1),{"name":"h-enc","hash":{},"data":data}))
    + "/streams\">\r\n        <i class=\"icon icon-camera\"></i>\r\n        <span>__MSG_m89__</span>\r\n        <div class=\"indicator\"></div>\r\n    </span>\r\n    <span class=\"button\" data-route=\"browse/"
    + alias2((helpers['h-enc'] || (depth0 && depth0['h-enc']) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.name : stack1),{"name":"h-enc","hash":{},"data":data}))
    + "/videos\">\r\n        <i class=\"icon icon-play\"></i>\r\n        <span>__MSG_m21__</span>\r\n        <div class=\"indicator\"></div>\r\n    </span>\r\n</span>";
},"useData":true});
this["Handlebars"]["templates"]["screenmessage"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <h2>"
    + this.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "    <a class=\"button screen-msg-btn \" href=\"#\">"
    + this.escapeExpression(((helper = (helper = helpers.button || (depth0 != null ? depth0.button : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"button","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"screen-msg\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.header : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <p>\r\n        "
    + this.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n    </p>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
this["Handlebars"]["templates"]["stream"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <div class=\"stream-uptime\">\r\n            "
    + this.escapeExpression((helpers['h-uptime'] || (depth0 && depth0['h-uptime']) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.created_at : depth0),{"name":"h-uptime","hash":{},"data":data}))
    + "\r\n        </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <span class=\"icon-vodcast\" title=\"vodcast\"></span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"stream js-filterable\">\r\n    <div class=\"item-image-container stream-preview\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.favorite : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <img class=\"lazy\" alt=\"\" data-original=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.preview : depth0)) != null ? stack1.medium : stack1), depth0))
    + "\"/>\r\n    </div>\r\n    <span class=\"stream-info stream-title\">\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\r\n    </span>\r\n    <span class=\"stream-info stream-info-viewers\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.vodcast : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            "
    + alias2(((helper = (helper = helpers.game || (depth0 != null ? depth0.game : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(depth0,{"name":"game","hash":{},"data":data}) : helper)))
    + " - "
    + alias2((helpers['h-num-format'] || (depth0 && depth0['h-num-format']) || alias3).call(depth0,(depth0 != null ? depth0.viewers : depth0),{"name":"h-num-format","hash":{},"data":data}))
    + " __MSG_m45__\r\n        </span>\r\n    <span class=\"stream-info stream-info-status\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.status : stack1), depth0))
    + " \">\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.status : stack1), depth0))
    + "\r\n        </span>\r\n</div>\r\n";
},"useData":true});
this["Handlebars"]["templates"]["user"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"user-panel\">\r\n\r\n    <div class=\"dropdown\">\r\n        <div class=\"username dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n            <img class=\"lazy\" alt=\"\" src=\""
    + alias3(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\"/>\r\n            "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n            <i class=\"icon-menu\"></i>\r\n        </div>\r\n\r\n        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"dropdownMenu2\">\r\n            <li role=\"presentation\">\r\n                <a role=\"menuitem\"\r\n                   tabindex=\"-1\" href=\"#user/notifications\">__MSG_m85__</a>\r\n            </li>\r\n            <li class=\"divider\"></li>\r\n            <li role=\"presentation\">\r\n                <a role=\"menuitem\" id=\"logout-btn\" tabindex=\"-1\"\r\n                   href=\"#\">__MSG_m53__</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "<a class=\"btn\" title=\"__MSG_m52__\" id=\"login-btn\">__MSG_m52__</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.authenticated : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["Handlebars"]["templates"]["video"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"stream js-tab js-filterable\" data-href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"item-image-container stream-preview\">\r\n        <img alt=\"\" class=\"lazy\" data-original=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.preview : depth0)) != null ? stack1.medium : stack1), depth0))
    + "\"/>\r\n        <div class=\"stream-uptime\">\r\n            "
    + alias3((helpers['h-date-format'] || (depth0 && depth0['h-date-format']) || alias1).call(depth0,(depth0 != null ? depth0.length : depth0),{"name":"h-date-format","hash":{},"data":data}))
    + "\r\n        </div>\r\n    </div>\r\n    <span class=\"stream-info stream-title\" title=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n            "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n    </span>\r\n\r\n    <span class=\"stream-info\">\r\n            "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.channel : depth0)) != null ? stack1.display_name : stack1), depth0))
    + " - "
    + alias3(((helper = (helper = helpers.game || (depth0 != null ? depth0.game : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"game","hash":{},"data":data}) : helper)))
    + "\r\n    </span>\r\n\r\n    <span class=\"stream-info\">\r\n        "
    + alias3((helpers['h-prettydate'] || (depth0 && depth0['h-prettydate']) || alias1).call(depth0,(depth0 != null ? depth0.recorded_at : depth0),{"name":"h-prettydate","hash":{},"data":data}))
    + "\r\n    </span>\r\n</div>";
},"useData":true});