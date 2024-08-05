/*global QUnit*/

sap.ui.define([
	"supplyriskresilience/supplierriskresilience/controller/LandingPageView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LandingPageView Controller");

	QUnit.test("I should test the LandingPageView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
