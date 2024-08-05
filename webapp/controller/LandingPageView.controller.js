sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "supplyriskresilience/supplierriskresilience/util/formatter",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem",
    'sap/viz/ui5/format/ChartFormatter'

],
    function (Controller, JSONModel, Formatter, FlattenedDataset, FeedItem, ChartFormatter) {
        "use strict";

        return Controller.extend("supplyriskresilience.supplierriskresilience.controller.LandingPageView", {
            Formatter: Formatter,
            onInit: function () {


                this.fnFirstChart();
                this.fnSecondChart();
                this.fnThirdChart();
                this.fnFourtChart();
                this.fnFifthChart();
                this.fnLoadHeatWave();

                
            },

            fnFirstChart: function () {
                let oVizFrame = this.byId("idVizFrame");
                oVizFrame.setVizProperties({
                    title: {
                        text: "Donut Chart Example"
                    },
                    plotArea: {
                        dataLabel: {
                            visible: true
                        },
                        colorPalette: ['#00008B', '#87CEEB', '#0092D1'],
                        innerRadiusRatio: 0.75
                    },
                    legend: {
                        title: {
                            visible: true,
                        },
                        visible: true,
                        isScrollable: true,

                    },

                    legendGroup: {
                        layout: {
                            position: "bottom" // Change to "left", "right", "top", or "bottom" as needed
                        },
                        linesOfWrap: 2

                    }
                });
            },
            fnSecondChart: function () {
                // Data is binded directly from applicationData.json
                let oVizFrameColumn = this.byId("idVizFrame1");
                oVizFrameColumn.setVizProperties({
                    plotArea: {
                        colorPalette: ['#0092D1']
                    }
                    ,
                    legend: {
                        visible: false,

                    }
                });


            },
            fnThirdChart: function () {

                // Get the VizFrame and set properties
                let oVizFrame = this.byId("idVizFrame3");
                oVizFrame.setVizProperties({
                    title: {
                        text: "Donut Chart Example"
                    },
                    plotArea: {
                        dataLabel: {
                            visible: true
                        },
                        colorPalette: ['#00008B', '#87CEEB', '#0092D1'],
                        innerRadiusRatio: 0.75
                    },
                    legend: {
                        title: {
                            visible: true,
                        },
                        visible: true,
                        isScrollable: true,
                    },

                    legendGroup: {
                        layout: {
                            position: "bottom" // Change to "left", "right", "top", or "bottom" as needed
                        }
                    }
                });

            },
            fnFourtChart: function () {

                // Data is binded directly from applicationData.json
                let oVizFrameColumn = this.byId("idVizFrame4");
                oVizFrameColumn.setVizProperties({
                    plotArea: {
                        colorPalette: ['#AB218E']
                    }
                    ,
                    legend: {
                        visible: false,

                    }
                });

            },
            fnFifthChart: function () {
                // Data is binded directly from applicationData.json

            },
            fnLoadHeatWave: function () {
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame11");
                oVizFrame.setVizProperties({
                    plotArea: {
                        background: {
                            border: {
                                top: {
                                    visible: true
                                },
                                bottom: {
                                    visible: true
                                },
                                left: {
                                    visible: true
                                },
                                right: {
                                    visible: true
                                }
                            }
                        },
                        dataPointStyle: {
                            "rules": [
                                {
                                    "dataContext": { "Revenue": { min: 0, max: 10000 } },
                                    "properties": { "color": "#FFA500" } // Orange color
                                },
                                {
                                    "dataContext": { "Revenue": { min: 10001, max: 50000 } },
                                    "properties": { "color": "#FFFF00" } // Yellow color
                                },
                                {
                                    "dataContext": { "Revenue": { min: 50001 } },
                                    "properties": { "color": "#FF6347" } // Reddish color
                                }
                            ]
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis2: {
                        title: {
                            visible: false
                        }
                    },
                    legend: {
                        visible: false,
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false,
                        text: 'Revenue by City and Store Name'
                    },
                    axisTitle: {
                        name: "Axis Title",
                        defaultState: true
                    },
                    semanticColors: {
                        name: "Semantic Colors",
                        defaultState: true
                    },

                    dataLabel: {
                        visible: true, // Show data labels

                    }
                });


            }






        });
    });
