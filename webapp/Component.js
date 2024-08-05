/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "supplyriskresilience/supplierriskresilience/model/models"
    ],
    function (UIComponent, Device, models) { 
        "use strict";

        return UIComponent.extend("supplyriskresilience.supplierriskresilience.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                debugger;
                const sDataPath = jQuery.sap.getModulePath("supplyriskresilience.supplierriskresilience.model","/ApplicationData.json");
                const oDataModel = new sap.ui.model.json.JSONModel(sDataPath);
                this.setModel(oDataModel,"oDataModel");
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);