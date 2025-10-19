import {
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class XPSApi implements ICredentialType {
	name = 'xpsApi';
	displayName = 'XPS Ship API';
	icon: Icon = 'file:xpsshipper.svg';
	documentationUrl = 'https://xpsship.rocksolidinternet.com/restapi/docs/v1-ecommerce/endpoints/overview/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Your XPS Ship API Key',
		},
		{
			displayName: 'Customer ID',
			name: 'customerId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your XPS Ship Customer ID',
		},
	];
}
