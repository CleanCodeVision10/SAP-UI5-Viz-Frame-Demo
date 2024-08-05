sap.ui.define([
    "sap/m/Text"
],
function (Text) {
    "use strict";

    return {
        overallCategoryCriticalityFormatter : function(value){
            if (value === "High") {
                return "🔴 High"; // Return the string directly
            } else if(value === "Low"){
                return "🟢 Low"; // Return the original status if it's not "High"
            }
        },
        overallCategoryImpactFormatter : function(value){
            if (value === "Critical Isolated") {
                return "🟠 Critical Isolated"; // Return the string directly
            } else if(value === "Critical Global"){
                return "🔴 Critical Global"; // Return the original status if it's not "High"
            }
        }

    };
}
);