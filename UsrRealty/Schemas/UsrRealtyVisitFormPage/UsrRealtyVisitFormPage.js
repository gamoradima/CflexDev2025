define("UsrRealtyVisitFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_vcac8qb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrVisitDateTime_oxj9g9t",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrVisitDateTime_oxj9g9t"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_pq1evdz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrPotentialCustomer_5qr3kny",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrPotentialCustomer_5qr3kny",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_1i6d5bg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1i6d5bg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_pq1evdz",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_mj6fas0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrVisitManager_7jd5eyi",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrVisitManager_7jd5eyi",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ict7hjb",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ict7hjb_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_mj6fas0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_awobmkl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrComment_0xh8gsl",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrComment_0xh8gsl"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ParentRealtyManagerCity",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ParentRealtyManagerCity_label)#",
					"ariaLabel": "#ResourceString(ParentRealtyManagerCity_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"control": "$UsrRealtyVisitDS_UsrParentRealtyUsrManagerCity_6wl5zrn"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ManagerRealCity",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrColumn6_vlyjfs2",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrColumn6_vlyjfs2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyVisitDS_UsrVisitDateTime_oxj9g9t": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitDS_UsrPotentialCustomer_5qr3kny": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrPotentialCustomer"
						}
					},
					"UsrRealtyVisitDS_UsrVisitManager_7jd5eyi": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitManager"
						}
					},
					"UsrRealtyVisitDS_UsrComment_0xh8gsl": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrComment"
						}
					},
					"UsrRealtyVisitDS_UsrParentRealtyUsrManagerCity_6wl5zrn": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrParentRealtyUsrManagerCity_6wl5zrn"
						}
					},
					"UsrRealtyVisitDS_UsrColumn6_vlyjfs2": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrManagerCity"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisit",
								"attributes": {
									"UsrParentRealtyUsrManagerCity_6wl5zrn": {
										"path": "UsrParentRealty.UsrManager.City",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					let attrname = request.attributeName;
      				if (attrname === 'UsrRealtyVisitDS_UsrParentRealtyUsrManagerCity_6wl5zrn') { 				             // if ParentRealty.Manager.City changed
						let ParentManagerCityObject = await request.$context.UsrRealtyVisitDS_UsrParentRealtyUsrManagerCity_6wl5zrn;
						request.$context.UsrRealtyVisitDS_UsrColumn6_vlyjfs2 = ParentManagerCityObject;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});