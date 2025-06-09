sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    return Controller.extend("org.indexit.in.supplierproject.controller.supplier2",{
        onInit: function () {
      
          
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("Routesupplier2").attachPatternMatched(this.ObjectMatched, this);
        },
        ObjectMatched:function(oEvent){

            let prodId = oEvent.getParameter("arguments").prodId;

            this.getView().byId("_IDGenInput").setValue(prodId);
            let sPath = "/ProductSet('" + prodId + "')";
            let oModel = this.getOwnerComponent().getModel();
            //read the odata
            oModel.read(sPath, {
                success: function (oData, response) {
                    //create a jsonmodel and store the response of odata
                    let jmodel = new sap.ui.model.json.JSONModel(oData);

                    this.getView().setModel(jmodel);
                }.bind(this),
                error: function (oError) {

                }
            });

        },
        onBack: function(){
            const getBack = this.getOwnerComponent().getRouter();
            getBack.navTo('Routesupplier')
        }
    })
}
)