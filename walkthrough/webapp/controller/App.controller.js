sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("walkthrough.controller.App", {

		onShowHello : function () {
			alert("Hello World");
		}
	});

});