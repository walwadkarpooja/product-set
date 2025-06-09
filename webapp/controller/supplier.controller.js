sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("org.indexit.in.supplierproject.controller.supplier", {
        onInit: function () {

        },
        // onNav: function(oEvent){
        //   const oRoute = this.getOwnerComponent().getRouter();
        //   oRoute.navTo("Routesupplier2",productId)
        // },
        onItemPress: function(oEvent){
            let listTitle = oEvent.getParameter('listItem').getProperty('title')
            const oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("Routesupplier2",{
                prodId: listTitle
            })
        }
    });
});
