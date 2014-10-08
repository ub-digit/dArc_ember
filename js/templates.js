Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "menu", options) : helperMissing.call(depth0, "partial", "menu", options))));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["archives"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["archives/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n						<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "archives.show", "item.id", options) : helperMissing.call(depth0, "link-to", "archives.show", "item.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n						");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "item.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "item.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(") ");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-12\">\n				<h1>\n					");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.ARCHIVES.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.ARCHIVES.TITLE", options))));
  data.buffer.push("\n				</h1>\n			</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> 				\n\n\n	<div class=\"row\">\n		<div id=\"result-list\" class=\"col-xs-10\">\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<ul>\n						");
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</ul>\n				</div>\n			</div> <!-- end row -->\n		</div> \n\n		<div class=\"col-xs-2\">\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArchive", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-primary :btn-block")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.CREATE", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.CREATE", options))));
  data.buffer.push("</button>\n\n		</div>\n	</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["archives/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<i class=\"fa fa-chevron-left\"></i> <span class=\"back-title\">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.AUTHORITIES.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.AUTHORITIES.TITLE", options))));
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">	\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-3\">\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authorities", options) : helperMissing.call(depth0, "link-to", "authorities", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n			<div class=\"col-xs-9\">\n				<h1>");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.ARCHIVE.HEADER", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.ARCHIVE.HEADER", options))));
  data.buffer.push("</h1>\n			</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> \n	<div class=\"row\">\n		<div class=\"col-xs-10\">\n			<table class=\"table table-striped\">\n				<tr>\n					<th>Title:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.title")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Unittitle:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.unittitle")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Unitdate:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.unitdate")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Unitid:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.unitid")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Abstract:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.abstract")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n\n			</table>\n		</div>\n		<div class=\"col-xs-2\">\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-success")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveArchive", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Spara</button>\n		</div>\n	</div><!-- end row --> \n</div>");
  return buffer;
  
});

Ember.TEMPLATES["archives/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<i class=\"fa fa-chevron-left\"></i> <span class=\"back-title\">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.ARCHIVES.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.ARCHIVES.TITLE", options))));
  data.buffer.push("</span>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-3\">\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "archives", options) : helperMissing.call(depth0, "link-to", "archives", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n			<div class=\"col-xs-9\">\n				<h1>");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.ARCHIVE.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.ARCHIVE.TITLE", options))));
  data.buffer.push(" </h1>\n			</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> \n	<div class=\"row\">\n		<div class=\"col-xs-12\">\n			<table class=\"table table-striped\">\n				<tr>\n					<th>id:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>pid:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.pid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>Title:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>Unittitle:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.unittitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>Unitdate:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.unitdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>Unitid:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.unitid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>Abstract:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.abstract", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>Authorities:</th>\n					<td>\n						");
  stack1 = helpers.each.call(depth0, "model.authorities", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>							\n			</table>\n		</div>\n	</div><!-- end row --> \n</div> <!-- end container --> ");
  return buffer;
  
});

Ember.TEMPLATES["authorities/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n						<small>(");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.STATUSSTRINGS.EDITING", options) : helperMissing.call(depth0, "translateString", "STRINGS.STATUSSTRINGS.EDITING", options))));
  data.buffer.push(")</small>\n					");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n							<li>\n							");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "authorities.show", "item.id", options) : helperMissing.call(depth0, "link-to", "authorities.show", "item.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n							</li>\n						");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n								");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("markedForRemoval"),
    'checked': (false)
  },hashTypes:{'type': "STRING",'name': "STRING",'checked': "BOOLEAN"},hashContexts:{'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n							");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "item.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "item.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(") ");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-12\">\n				<h1>\n					");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.AUTHORITIES.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.AUTHORITIES.TITLE", options))));
  data.buffer.push("\n					");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</h1>\n			</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> \n\n	<div id=\"search\" class=\"row\">\n		<div class=\"col-xs-6\">			\n			<div class=\"input-group\">\n		      	<input type=\"text\" class=\"form-control\">\n				<span class=\"input-group-btn\">\n			        <button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n			    </span>\n		    </div><!-- /input-group -->\n		</div>\n		<div class=\"col-xs-6\">\n			\n		</div>\n	</div>\n	<div class=\"row\">\n\n		<div id=\"result-list\" class=\"col-xs-10\">\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<ul>\n						");
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</ul>\n				</div>\n			</div> <!-- end row -->\n		</div> \n		<div class=\"col-xs-2\">\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAuthority", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-primary :btn-block")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.CREATE", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.CREATE", options))));
  data.buffer.push("</button>\n			<!--\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.CLOSE", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.CLOSE", options))));
  data.buffer.push("</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.EDIT", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.EDIT", options))));
  data.buffer.push("</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-danger :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.REMOVE", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.REMOVE", options))));
  data.buffer.push("</button>\n			-->\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["authorities/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<i class=\"fa fa-chevron-left\"></i> <span class=\"back-title\">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.AUTHORITIES.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.AUTHORITIES.TITLE", options))));
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">	\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-3\">\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authorities", options) : helperMissing.call(depth0, "link-to", "authorities", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n			<div class=\"col-xs-9\">\n				<h1>");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.AUTHORITY.HEADER", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.AUTHORITY.HEADER", options))));
  data.buffer.push("</h1>\n			</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> \n	<div class=\"row\">\n		<div class=\"col-xs-10\">\n			<table class=\"table table-striped\">\n				<tr>\n					<th>Titel:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.title")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Typ:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.type")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Existerande påbörjat:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.startdate")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Existerande avslutat:</th>\n					<td>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.enddate")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"col-xs-2\">\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-success")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveAuthority", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Spara</button>\n		</div>\n	</div><!-- end row --> \n</div>");
  return buffer;
  
});

Ember.TEMPLATES["authorities/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<i class=\"fa fa-chevron-left\"></i><span class=\"back-title\">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.AUTHORITIES.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.AUTHORITIES.TITLE", options))));
  data.buffer.push("</span>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n						<small>(");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.STATUSSTRINGS.EDITING", options) : helperMissing.call(depth0, "translateString", "STRINGS.STATUSSTRINGS.EDITING", options))));
  data.buffer.push(")</small>\n					");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.title")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.type")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.startdate")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.startdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.enddate")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.enddate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-2\">\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n			</div>\n			<div class=\"col-xs-9\">\n				<h1>\n					");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.AUTHORITY.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.AUTHORITY.TITLE", options))));
  data.buffer.push(" \n					");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</h1>\n				</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> \n	<div class=\"row\">\n		<div class=\"col-xs-10\">\n			<table class=\"table table-striped\">\n				<tr>\n					<th>id:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>pid:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.pid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>				<tr>\n					<th>Titel:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Typ:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Existerande påbörjat:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Existerande avslutat:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"col-xs-2\">\n			<!--\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-success :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Spara</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Stäng</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Editera</button>\n			<button class=\"btn btn-sm btn-danger btn-block\">Ta bort</button>\n			-->\n		</div>\n	</div><!-- end row --> \n</div> <!-- end container --> ");
  return buffer;
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<footer>\n	<div class=\"container-fluid\">\n		<div id=\"footer\" class=\"row\">\n			<div class=\"col-sm-12\">\n				");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.FOOTER.TAGLINE", options) : helperMissing.call(depth0, "translateString", "STRINGS.FOOTER.TAGLINE", options))));
  data.buffer.push("\n			</div>\n			<div class=\"col-sm-12\">\n				<address><i class=\"fa fa-envelope\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers.mailToHelper || (depth0 && depth0.mailToHelper),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "STRINGS.FOOTER.EMAIL.ADRESS", "STRINGS.FOOTER.EMAIL.TITLE", options) : helperMissing.call(depth0, "mailToHelper", "STRINGS.FOOTER.EMAIL.ADRESS", "STRINGS.FOOTER.EMAIL.TITLE", options))));
  data.buffer.push("</address>\n			</div>\n			<div class=\"col-sm-12\">\n				");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.FOOTER.PRODUCTOWNER.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.FOOTER.PRODUCTOWNER.TITLE", options))));
  data.buffer.push(": ");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.FOOTER.PRODUCTOWNER.NAME", options) : helperMissing.call(depth0, "translateString", "STRINGS.FOOTER.PRODUCTOWNER.NAME", options))));
  data.buffer.push("\n			</div>\n			<div class=\"col-sm-12\">\n				<small><span>&copy;  ");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.FOOTER.COPYRIGHT", options) : helperMissing.call(depth0, "translateString", "STRINGS.FOOTER.COPYRIGHT", options))));
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "getCurrentYearHelper", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></small>\n			</div>\n\n		</div>\n	</div>\n</footer>\n");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<header>\n	<div class=\"container-fluid\">\n		<div class=\"row\">\n			<div class=\"col-xs-12\">\n				<div id=\"brand\">\n					<div id=\"heading\">\n						<h2>");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.HEADER.HEADING", options) : helperMissing.call(depth0, "translateString", "STRINGS.HEADER.HEADING", options))));
  data.buffer.push("</h2>\n					</div>\n					<div id=\"subheading\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.HEADER.SUBHEADING", options) : helperMissing.call(depth0, "translateString", "STRINGS.HEADER.SUBHEADING", options))));
  data.buffer.push("\n					</div>\n				</div>\n			</div>\n		</div> <!-- end row --> \n	</div> <!-- end container -->\n</header>\n");
  return buffer;
  
});

Ember.TEMPLATES["menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push(" <i class=\"fa fa-home\"></i>");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.MAINMENU.MENU_1_TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.MAINMENU.MENU_1_TITLE", options))));
  data.buffer.push("          \n            <div class=\"active-indicator\">\n              <div class=\"arrow\">\n                <div class=\"top\"></div>\n                <div class=\"bottom\"></div>\n              </div>\n            </div>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.MAINMENU.MENU_2_TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.MAINMENU.MENU_2_TITLE", options))));
  data.buffer.push("\n            <div class=\"active-indicator\">\n              <div class=\"arrow\">\n                <div class=\"top\"></div>\n                <div class=\"bottom\"></div>\n              </div>\n            </div>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.MAINMENU.MENU_3_TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.MAINMENU.MENU_3_TITLE", options))));
  data.buffer.push("\n            <div class=\"active-indicator\">\n              <div class=\"arrow\">\n                <div class=\"top\"></div>\n                <div class=\"bottom\"></div>\n              </div>\n            </div>\n          ");
  return buffer;
  }

  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authorities", options) : helperMissing.call(depth0, "link-to", "authorities", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "archives", options) : helperMissing.call(depth0, "link-to", "archives", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "persons", options) : helperMissing.call(depth0, "link-to", "persons", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>");
  return buffer;
  
});

Ember.TEMPLATES["persons/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n						<small>(");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.STATUSSTRINGS.EDITING", options) : helperMissing.call(depth0, "translateString", "STRINGS.STATUSSTRINGS.EDITING", options))));
  data.buffer.push(")</small>\n					");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n							<li>\n							");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "persons.show", "item.id", options) : helperMissing.call(depth0, "link-to", "persons.show", "item.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n							</li>\n						");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n								");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("markedForRemoval"),
    'checked': (false)
  },hashTypes:{'type': "STRING",'name': "STRING",'checked': "BOOLEAN"},hashContexts:{'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n							");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "item.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "item.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(") ");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-12\">\n				<h1>\n					");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.PERSONS.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.PERSONS.TITLE", options))));
  data.buffer.push("\n					");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</h1>\n			</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> \n\n	<div id=\"search\" class=\"row\">\n		<div class=\"col-xs-6\">			\n			<div class=\"input-group\">\n		      	<input type=\"text\" class=\"form-control\">\n				<span class=\"input-group-btn\">\n			        <button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n			    </span>\n		    </div><!-- /input-group -->\n		</div>\n		<div class=\"col-xs-6\">\n			\n		</div>\n	</div>\n	<div class=\"row\">\n\n		<div id=\"result-list\" class=\"col-xs-10\">\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<ul>\n						");
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</ul>\n				</div>\n			</div> <!-- end row -->\n		</div> \n		<div class=\"col-xs-2\">\n			<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAuthority", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-primary :btn-block")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.CREATE", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.CREATE", options))));
  data.buffer.push("</button>-->\n			<!--\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.CLOSE", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.CLOSE", options))));
  data.buffer.push("</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.EDIT", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.EDIT", options))));
  data.buffer.push("</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-danger :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.BUTTON.REMOVE", options) : helperMissing.call(depth0, "translateString", "STRINGS.BUTTON.REMOVE", options))));
  data.buffer.push("</button>\n			-->\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["persons/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<i class=\"fa fa-chevron-left\"></i><span class=\"back-title\">");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.PERSONS.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.PERSONS.TITLE", options))));
  data.buffer.push("</span>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n						<small>(");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.STATUSSTRINGS.EDITING", options) : helperMissing.call(depth0, "translateString", "STRINGS.STATUSSTRINGS.EDITING", options))));
  data.buffer.push(")</small>\n					");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.title")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.authorized_forename")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.authorized_forename", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.authorized_surname")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.authorized_surname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.startdate")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.startdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("model.enddate")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers._triageMustache.call(depth0, "model.enddate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">\n	<div class=\"page-head\">\n		<div class=\"row v-align\">\n			<div class=\"col-xs-2\">\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n			</div>\n			<div class=\"col-xs-9\">\n				<h1>\n					");
  data.buffer.push(escapeExpression((helper = helpers.translateString || (depth0 && depth0.translateString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "STRINGS.PAGES.PERSON.TITLE", options) : helperMissing.call(depth0, "translateString", "STRINGS.PAGES.PERSON.TITLE", options))));
  data.buffer.push(" \n					");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</h1>\n				</div>\n		</div> <!-- end row --> \n	</div> <!-- end page-head --> \n	<div class=\"row\">\n		<div class=\"col-xs-10\">\n			<table class=\"table table-striped\">\n				<tr>\n					<th>id:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>\n				<tr>\n					<th>pid:</th>\n					<td>");
  stack1 = helpers._triageMustache.call(depth0, "model.pid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n				</tr>				<tr>\n					<th>Titel:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Förnamn:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Efternamn:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Existerande påbörjat:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n				<tr>\n					<th>Existerande avslutat:</th>\n					<td>\n						");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"col-xs-2\">\n			<!--\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-success :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Spara</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Stäng</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-default :btn-block isEditing:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleIsEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Editera</button>\n			<button class=\"btn btn-sm btn-danger btn-block\">Ta bort</button>\n			-->\n		</div>\n	</div><!-- end row --> \n</div> <!-- end container --> ");
  return buffer;
  
});