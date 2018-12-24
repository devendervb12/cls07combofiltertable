sap.ui.controller("zproject1.FilterCountryList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zproject1.FilterCountryList
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/country.json");
		oModel.setSizeLimit(300);
		this.getView().byId("combo").setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zproject1.FilterCountryList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zproject1.FilterCountryList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zproject1.FilterCountryList
*/
//	onExit: function() {
//
//	}
	
	//event handlers
	onSelectionChange : function(){
	 //	alert('dfgdfgdg');
	 var oTable = this.getView().byId("idTable");
	 oTable.setVisible(true);
	 // load data into Table
	 var url = "proxy/https/services.odata.org/Northwind/Northwind.svc/";
	 var oModel = new sap.ui.model.odata.v2.ODataModel(url);
	 oTable.setModel(oModel);
	 
	 // get filtered data
	 //get country value
	 var combovalue = this.getView().byId("combo").getValue();
	 // alert(combovalue);
	 
	 var filters = [];
	 
	 var oFilter = new sap.ui.model.Filter({path : 'Country', operator : sap.ui.model.FilterOperator.EQ, value1 : combovalue});
	// var oFilter1 = new sap.ui.model.Filter({path : 'City', operator : sap.ui.model.FilterOperator.EQ, value1 : combovalue});
	 filters.push(oFilter);
	 
	 oTable.getBinding("items").filter(filters);
	 
	}

});