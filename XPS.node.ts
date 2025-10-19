import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';

export class XPS implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'XPS Ship',
		name: 'xps',
		icon: 'file:xpsshipper.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with XPS Ship API for shipping quotes and tracking',
		defaults: {
			name: 'XPS Ship',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'xpsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://xpsshipper.com/restapi/v1/customers',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Quote',
						value: 'quote',
					},
					{
						name: 'Shipment',
						value: 'shipment',
					},
					{
						name: 'Service',
						value: 'service',
					},
				],
				default: 'quote',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['quote'],
					},
				},
				options: [
					{
						name: 'Get Quote',
						value: 'get',
						description: 'Get a shipping quote',
					},
				],
				default: 'get',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['shipment'],
					},
				},
				options: [
					{
						name: 'Search Shipments',
						value: 'search',
						description: 'Search for shipments',
					},
				],
				default: 'search',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['service'],
					},
				},
				options: [
					{
						name: 'List Services',
						value: 'list',
						description: 'List available services',
					},
				],
				default: 'list',
			},
			// Carrier Settings Section
			{
				displayName: '--- Carrier Settings ---',
				name: 'carrierSettingsHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Carrier Code',
				name: 'carrierCode',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'UPS',
						value: 'ups',
					},
					{
						name: 'FedEx',
						value: 'fedex',
					},
					{
						name: 'DHL',
						value: 'dhl',
					},
					{
						name: 'USPS',
						value: 'usps',
					},
				],
				default: 'ups',
				description: 'The carrier to use for shipping',
			},
			{
				displayName: 'UPS Service',
				name: 'upsService',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['ups'],
					},
				},
				options: [
					{
						name: 'UPS Ground',
						value: 'ups_ground',
					},
					{
						name: 'UPS Next Day Air',
						value: 'ups_next_day_air',
					},
					{
						name: 'UPS 2nd Day Air',
						value: 'ups_2nd_day_air',
					},
					{
						name: 'UPS 3 Day Select',
						value: 'ups_3_day_select',
					},
				],
				default: 'ups_ground',
				description: 'UPS service type',
			},
			{
				displayName: 'FedEx Service',
				name: 'fedexService',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['fedex'],
					},
				},
				options: [
					{
						name: 'FedEx Ground',
						value: 'fedex_ground',
					},
					{
						name: 'FedEx Express Saver',
						value: 'fedex_express_saver',
					},
					{
						name: 'FedEx 2Day',
						value: 'fedex_2day',
					},
					{
						name: 'FedEx Standard Overnight',
						value: 'fedex_standard_overnight',
					},
				],
				default: 'fedex_ground',
				description: 'FedEx service type',
			},
			{
				displayName: 'DHL Service',
				name: 'dhlService',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['dhl'],
					},
				},
				options: [
					{
						name: 'DHL Express Worldwide',
						value: 'dhl_express_worldwide',
					},
					{
						name: 'DHL Express 12:00',
						value: 'dhl_express_12',
					},
					{
						name: 'DHL Express 10:30',
						value: 'dhl_express_1030',
					},
					{
						name: 'DHL Express Same Day',
						value: 'dhl_express_same_day',
					},
				],
				default: 'dhl_express_worldwide',
				description: 'DHL service type',
			},
			{
				displayName: 'USPS Service',
				name: 'uspsService',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['usps'],
					},
				},
				options: [
					{
						name: 'USPS Ground Advantage',
						value: 'usps_ground_advantage',
					},
					{
						name: 'USPS Priority Mail',
						value: 'usps_priority_mail',
					},
					{
						name: 'USPS Priority Mail Express',
						value: 'usps_priority_mail_express',
					},
					{
						name: 'USPS First-Class Mail',
						value: 'usps_first_class_mail',
					},
				],
				default: 'usps_ground_advantage',
				description: 'USPS service type',
			},
			{
				displayName: 'UPS Package Type',
				name: 'upsPackageType',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['ups'],
					},
				},
				options: [
					{
						name: 'Customer Supplied Package',
						value: 'ups_custom_package',
					},
					{
						name: 'UPS Letter',
						value: 'ups_letter',
					},
					{
						name: 'UPS Tube',
						value: 'ups_tube',
					},
					{
						name: 'UPS Pak',
						value: 'ups_pak',
					},
					{
						name: 'UPS Express Box',
						value: 'ups_express_box',
					},
					{
						name: 'UPS Express Box Small',
						value: 'ups_express_box_small',
					},
					{
						name: 'UPS Express Box Medium',
						value: 'ups_express_box_medium',
					},
					{
						name: 'UPS Express Box Large',
						value: 'ups_express_box_large',
					},
				],
				default: 'ups_custom_package',
				description: 'UPS package type',
			},
			{
				displayName: 'FedEx Package Type',
				name: 'fedexPackageType',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['fedex'],
					},
				},
				options: [
					{
						name: 'Customer Supplied Package',
						value: 'fedex_custom_package',
					},
					{
						name: 'FedEx Box',
						value: 'fedex_box',
					},
					{
						name: 'FedEx Pak',
						value: 'fedex_pak',
					},
					{
						name: 'FedEx Tube',
						value: 'fedex_tube',
					},
					{
						name: 'FedEx Envelope',
						value: 'fedex_envelope',
					},
				],
				default: 'fedex_custom_package',
				description: 'FedEx package type',
			},
			{
				displayName: 'DHL Package Type',
				name: 'dhlPackageType',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['dhl'],
					},
				},
				options: [
					{
						name: 'Customer Supplied Package',
						value: 'dhl_custom_package',
					},
					{
						name: 'DHL Document',
						value: 'dhl_document',
					},
					{
						name: 'DHL Non-Document',
						value: 'dhl_non_document',
					},
				],
				default: 'dhl_custom_package',
				description: 'DHL package type',
			},
			{
				displayName: 'USPS Package Type',
				name: 'uspsPackageType',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						carrierCode: ['usps'],
					},
				},
				options: [
					{
						name: 'Customer Supplied Package',
						value: 'usps_custom_package',
					},
					{
						name: 'USPS Flat Rate Envelope',
						value: 'usps_flat_rate_envelope',
					},
					{
						name: 'USPS Flat Rate Box Small',
						value: 'usps_flat_rate_box_small',
					},
					{
						name: 'USPS Flat Rate Box Medium',
						value: 'usps_flat_rate_box_medium',
					},
					{
						name: 'USPS Flat Rate Box Large',
						value: 'usps_flat_rate_box_large',
					},
				],
				default: 'usps_custom_package',
				description: 'USPS package type',
			},
			// Sender Information Section
			{
				displayName: '--- Sender Information ---',
				name: 'senderInfoHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Sender Country',
				name: 'senderCountry',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: 'US',
				description: 'ISO two-character country code for sender',
			},
			{
				displayName: 'Sender Zip Code',
				name: 'senderZip',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
				description: 'Sender zip or postal code',
			},
			// Receiver Information Section
			{
				displayName: '--- Receiver Information ---',
				name: 'receiverInfoHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Receiver Country',
				name: 'receiverCountry',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: 'US',
				description: 'ISO two-character country code for receiver',
			},
			{
				displayName: 'Receiver City',
				name: 'receiverCity',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
				description: 'Destination city/town',
			},
			{
				displayName: 'Receiver Zip Code',
				name: 'receiverZip',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
				description: 'Receiver zip or postal code',
			},
			{
				displayName: 'Receiver Email',
				name: 'receiverEmail',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
				description: 'Receiver email address',
			},
			// Shipping Options Section
			{
				displayName: '--- Shipping Options ---',
				name: 'shippingOptionsHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Residential Address',
				name: 'residential',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: false,
				description: 'Set to true if receiver address is residential',
			},
			{
				displayName: 'Signature Option Code',
				name: 'signatureOptionCode',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'No Signature Required',
						value: 'NO_SIGNATURE_REQUIRED',
					},
					{
						name: 'Adult Signature',
						value: 'ADULT',
					},
					{
						name: 'Direct Signature',
						value: 'DIRECT',
					},
					{
						name: 'Indirect Signature',
						value: 'INDIRECT',
					},
					{
						name: 'Service Default',
						value: 'SERVICE_DEFAULT',
					},
				],
				default: 'NO_SIGNATURE_REQUIRED',
				description: 'Signature option for shipment',
			},
			{
				displayName: 'USPS Express AM Delivery',
				name: 'uspsExpressAmDelivery',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: false,
				description: '10:30 AM Delivery',
			},
			{
				displayName: 'Saturday Delivery',
				name: 'saturdayDelivery',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: false,
				description: 'Saturday Delivery',
			},
			// Units & Currency Section
			{
				displayName: '--- Units & Currency ---',
				name: 'unitsCurrencyHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Weight Unit',
				name: 'weightUnit',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'Pounds',
						value: 'lb',
					},
					{
						name: 'Ounces',
						value: 'oz',
					},
					{
						name: 'Kilograms',
						value: 'kg',
					},
					{
						name: 'Grams',
						value: 'g',
					},
				],
				default: 'lb',
				description: 'Unit of weight measurement',
			},
			{
				displayName: 'Dimension Unit',
				name: 'dimUnit',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'Inches',
						value: 'in',
					},
					{
						name: 'Centimeters',
						value: 'cm',
					},
				],
				default: 'in',
				description: 'Unit of dimension measurement',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'US Dollar',
						value: 'USD',
					},
					{
						name: 'Canadian Dollar',
						value: 'CAD',
					},
					{
						name: 'British Pound',
						value: 'GBP',
					},
					{
						name: 'Euro',
						value: 'EUR',
					},
				],
				default: 'USD',
				description: 'Currency for insurance and declared values',
			},
			{
				displayName: 'Customs Currency',
				name: 'customsCurrency',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'US Dollar',
						value: 'USD',
					},
					{
						name: 'Canadian Dollar',
						value: 'CAD',
					},
					{
						name: 'British Pound',
						value: 'GBP',
					},
					{
						name: 'Euro',
						value: 'EUR',
					},
				],
				default: 'USD',
				description: 'Currency for customs value',
			},
			// Additional Options Section
			{
				displayName: '--- Additional Options ---',
				name: 'additionalOptionsHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Content Description',
				name: 'contentDescription',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
				description: 'Content description (required for international shipments)',
			},
			// Billing Information Section
			{
				displayName: '--- Billing Information ---',
				name: 'billingInfoHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Billing Party',
				name: 'billingParty',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'Sender',
						value: 'sender',
						description: 'Sender pays for shipping',
					},
					{
						name: 'Receiver',
						value: 'receiver',
						description: 'Receiver pays for shipping',
					},
					{
						name: 'Third Party',
						value: 'third_party',
						description: 'Third party pays for shipping',
					},
				],
				default: 'sender',
				description: 'Who pays for the shipping',
			},
			{
				displayName: 'Provider Account ID',
				name: 'providerAccountId',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
				description: 'Provider account ID (optional)',
			},
			// Package Information Section - Dynamic Input
			{
				displayName: '--- Package Information ---',
				name: 'packageInfoHeader',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				default: '',
			},
			{
				displayName: 'Package Input Method',
				name: 'packageInputMethod',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
					},
				},
				options: [
					{
						name: 'Manual Entry',
						value: 'manual',
						description: 'Enter package details manually',
					},
					{
						name: 'From Previous Node',
						value: 'expression',
						description: 'Use data from previous node (drag & drop fields)',
					},
				],
				default: 'manual',
				description: 'Choose how to provide package information',
			},
			// Manual Package Entry
			{
				displayName: 'Packages (Manual)',
				name: 'packages',
				type: 'fixedCollection',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						packageInputMethod: ['manual'],
					},
				},
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: 'package',
						displayName: 'Package',
						values: [
							{
								displayName: 'Weight',
								name: 'weight',
								type: 'number',
								default: 1,
								description: 'Weight of the package',
							},
							{
								displayName: 'Length',
								name: 'length',
								type: 'number',
								default: 0,
								description: 'Length of the package (0 for preset dimensions)',
							},
							{
								displayName: 'Width',
								name: 'width',
								type: 'number',
								default: 0,
								description: 'Width of the package (0 for preset dimensions)',
							},
							{
								displayName: 'Height',
								name: 'height',
								type: 'number',
								default: 0,
								description: 'Height of the package (0 for preset dimensions)',
							},
							{
								displayName: 'Insurance Amount',
								name: 'insuranceAmount',
								type: 'number',
								default: 0,
								description: 'Insurance amount for the package',
							},
							{
								displayName: 'Declared Value',
								name: 'declaredValue',
								type: 'number',
								default: 0,
								description: 'Declared value for customs',
							},
						],
					},
				],
			},
			// Expression-based Package Entry
			{
				displayName: 'Packages Array',
				name: 'packagesExpression',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						packageInputMethod: ['expression'],
					},
				},
				default: '',
				placeholder: '={{ $json.packages }}',
				description: 'Expression that returns an array of package objects. Each package should have: weight, length, width, height, insuranceAmount, declaredValue',
			},
			{
				displayName: 'Package Schema Help',
				name: 'packageSchemaHelp',
				type: 'notice',
				displayOptions: {
					show: {
						resource: ['quote'],
						operation: ['get'],
						packageInputMethod: ['expression'],
					},
				},
				default: 'Expected package object format: { "weight": 1.5, "length": 10, "width": 8, "height": 6, "insuranceAmount": 100, "declaredValue": 50 }',
			},
			// Search Shipment Fields
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'dateTime',
				default: '',
				displayOptions: {
					show: {
						resource: ['shipment'],
						operation: ['search'],
					},
				},
				description: 'Start date for shipment search',
			},
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				displayOptions: {
					show: {
						resource: ['shipment'],
						operation: ['search'],
					},
				},
				description: 'End date for shipment search',
			},
			{
				displayName: 'Tracking Number',
				name: 'trackingNumber',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['shipment'],
						operation: ['search'],
					},
				},
				description: 'Tracking number to search for',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];

		const credentials = await this.getCredentials('xpsApi');
		const apiKey = credentials.apiKey as string;
		const customerId = credentials.customerId as string;
		const baseUrl = `https://xpsshipper.com/restapi/v1/customers/${customerId}`;

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', i) as string;
				const operation = this.getNodeParameter('operation', i) as string;

				let responseData: any;

				if (resource === 'quote') {
					if (operation === 'get') {
						// Get carrier settings
						const carrierCode = this.getNodeParameter('carrierCode', i, 'ups') as string;
						
						// Get service code based on selected carrier
						let serviceCode = '';
						if (carrierCode === 'ups') {
							serviceCode = this.getNodeParameter('upsService', i, 'ups_ground') as string;
						} else if (carrierCode === 'fedex') {
							serviceCode = this.getNodeParameter('fedexService', i, 'fedex_ground') as string;
						} else if (carrierCode === 'dhl') {
							serviceCode = this.getNodeParameter('dhlService', i, 'dhl_express_worldwide') as string;
						} else if (carrierCode === 'usps') {
							serviceCode = this.getNodeParameter('uspsService', i, 'usps_ground_advantage') as string;
						}
						
						// Get package type code based on selected carrier
						let packageTypeCode = '';
						if (carrierCode === 'ups') {
							packageTypeCode = this.getNodeParameter('upsPackageType', i, 'ups_custom_package') as string;
						} else if (carrierCode === 'fedex') {
							packageTypeCode = this.getNodeParameter('fedexPackageType', i, 'fedex_custom_package') as string;
						} else if (carrierCode === 'dhl') {
							packageTypeCode = this.getNodeParameter('dhlPackageType', i, 'dhl_custom_package') as string;
						} else if (carrierCode === 'usps') {
							packageTypeCode = this.getNodeParameter('uspsPackageType', i, 'usps_custom_package') as string;
						}
						
						// Get sender information
						const senderZip = this.getNodeParameter('senderZip', i, '') as string;
						const senderCountry = this.getNodeParameter('senderCountry', i, 'US') as string;
						
						// Get receiver information
						const receiverCity = this.getNodeParameter('receiverCity', i, '') as string;
						const receiverZip = this.getNodeParameter('receiverZip', i, '') as string;
						const receiverCountry = this.getNodeParameter('receiverCountry', i, 'US') as string;
						const receiverEmail = this.getNodeParameter('receiverEmail', i, '') as string;
						
						// Get shipping options
						const residential = this.getNodeParameter('residential', i, false) as boolean;
						const signatureOptionCode = this.getNodeParameter('signatureOptionCode', i, 'NO_SIGNATURE_REQUIRED') as string;
						const uspsExpressAmDelivery = this.getNodeParameter('uspsExpressAmDelivery', i, false) as boolean;
						const saturdayDelivery = this.getNodeParameter('saturdayDelivery', i, false) as boolean;
						
						// Get units & currency
						const weightUnit = this.getNodeParameter('weightUnit', i, 'lb') as string;
						const dimUnit = this.getNodeParameter('dimUnit', i, 'in') as string;
						const currency = this.getNodeParameter('currency', i, 'USD') as string;
						const customsCurrency = this.getNodeParameter('customsCurrency', i, 'USD') as string;
						
						// Get additional options
						const contentDescription = this.getNodeParameter('contentDescription', i, '') as string;
						
						// Get billing information
						const billingParty = this.getNodeParameter('billingParty', i, 'sender') as string;
						const providerAccountId = this.getNodeParameter('providerAccountId', i, '') as string;
						
						// Get packages based on input method (only for quote operation)
						let pieces: IDataObject[] = [];
						if (operation === 'get') {
							const packageInputMethod = this.getNodeParameter('packageInputMethod', i, 'manual') as string;
							let packages: any[] = [];
							
							if (packageInputMethod === 'manual') {
								// Get packages from manual repeater
								const packagesData = this.getNodeParameter('packages', i, {}) as any;
								packages = (packagesData && packagesData.package) ? packagesData.package : [];
							} else {
								// Get packages from expression
								try {
									const packagesExpression = this.getNodeParameter('packagesExpression', i, '') as string;
									if (packagesExpression && packagesExpression.trim() !== '') {
										// Evaluate the expression to get the packages array
										packages = this.getNodeParameter('packagesExpression', i, '') as any;
										// If it's a string, try to parse it as JSON
										if (typeof packages === 'string') {
											packages = JSON.parse(packages);
										}
										// Ensure it's an array
										if (!Array.isArray(packages)) {
											packages = [packages];
										}
									}
								} catch (error) {
									throw new Error(`Invalid packages expression: ${error.message}`);
								}
							}
							
							// Build pieces array from packages
							pieces = packages.map((pkg: any) => {
								if (!pkg) return null;
								const piece: IDataObject = {
									weight: (pkg.weight || 1).toString(),
									insuranceAmount: (pkg.insuranceAmount > 0) ? pkg.insuranceAmount.toString() : null,
									declaredValue: (pkg.declaredValue > 0) ? pkg.declaredValue.toString() : null,
								};
								if (pkg.length && pkg.length > 0) piece.length = pkg.length.toString();
								if (pkg.width && pkg.width > 0) piece.width = pkg.width.toString();
								if (pkg.height && pkg.height > 0) piece.height = pkg.height.toString();
								return piece;
							}).filter((piece: any) => piece !== null);
						}
						
						const quoteData: IDataObject = {
							sender: {
								country: senderCountry,
								zip: senderZip,
							},
							receiver: {
								city: receiverCity,
								country: receiverCountry,
								zip: receiverZip,
								email: (receiverEmail && receiverEmail.trim() !== '') ? receiverEmail : undefined,
							},
							pieces: pieces,
							residential,
							signatureOptionCode,
							contentDescription: contentDescription || '',
							weightUnit: weightUnit.toLowerCase(),
							dimUnit: dimUnit.toLowerCase(),
							currency,
							customsCurrency,
							billing: {
								party: billingParty,
							},
							uspsExpressAmDelivery,
							saturdayDelivery,
						};
						
						// Only include optional fields if they have values
						if (carrierCode && carrierCode.trim() !== '') {
							quoteData.carrierCode = carrierCode;
						}
						if (serviceCode && serviceCode.trim() !== '') {
							quoteData.serviceCode = serviceCode;
						}
						if (packageTypeCode && packageTypeCode.trim() !== '') {
							quoteData.packageTypeCode = packageTypeCode;
						}
						if (providerAccountId && providerAccountId.trim() !== '') {
							quoteData.providerAccountId = providerAccountId;
						}
						
						responseData = await this.helpers.request({
							method: 'POST',
							url: `${baseUrl}/quotes`,
							headers: {
								Authorization: `RSIS ${apiKey}`,
							},
							body: quoteData,
						});
					}
				} else if (resource === 'shipment') {
					if (operation === 'search') {
						const startDate = this.getNodeParameter('startDate', i);
						const endDate = this.getNodeParameter('endDate', i);
						const trackingNumber = this.getNodeParameter('trackingNumber', i, '') as string;
						
						const queryParams = new URLSearchParams();
						if (startDate) {
							queryParams.append('startDate', new Date(startDate as string).toISOString());
						}
						if (endDate) {
							queryParams.append('endDate', new Date(endDate as string).toISOString());
						}
						if (trackingNumber && trackingNumber.trim() !== '') {
							queryParams.append('trackingNumber', trackingNumber);
						}
						
						const queryString = queryParams.toString();
						const url = queryString ? `${baseUrl}/shipments?${queryString}` : `${baseUrl}/shipments`;
						
						responseData = await this.helpers.request({
							method: 'GET',
							url: url,
							headers: {
								Authorization: `RSIS ${apiKey}`,
							},
						});
						
						// Extract individual shipments from the response
						if (responseData.shipments && Array.isArray(responseData.shipments)) {
							responseData = responseData.shipments;
						}
					}
				} else if (resource === 'service') {
					if (operation === 'list') {
						responseData = await this.helpers.request({
							method: 'GET',
							url: `${baseUrl}/services`,
							headers: {
								Authorization: `RSIS ${apiKey}`,
							},
						});
						
						// Flatten the response to return individual service objects
						if (responseData.services && Array.isArray(responseData.services)) {
							responseData = responseData.services.flatMap((serviceGroup: any) => 
								serviceGroup.services || []
							);
						}
					}
				}
				
				if (Array.isArray(responseData)) {
					returnData.push(...responseData);
				} else {
					returnData.push(responseData);
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						error: error.message,
						json: {},
					});
					continue;
				}
				throw error;
			}
		}
		return [this.helpers.returnJsonArray(returnData)];
	}
}