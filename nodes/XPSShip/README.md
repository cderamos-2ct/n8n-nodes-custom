# XPS Ship Node

Custom n8n node for integrating with XPS Ship logistics and shipping API.

## Features

- **Create Labels**: Generate shipping labels automatically
- **Track Shipments**: Real-time shipment tracking
- **Rate Calculation**: Compare shipping rates across carriers
- **Address Management**: Validate and manage shipping addresses
- **Package Info**: Handle package dimensions and weights

## Files

- `XPS.node.ts` - Main node implementation (1,252 lines)
- `xpsshipper.svg` - Custom branded icon

## Credentials Required

Uses `XPSApi` credentials:
- **API Key**: From XPS Ship admin panel

## API Documentation

https://xpsship.rocksolidinternet.com/restapi/docs/v1-ecommerce/endpoints/overview/

## Usage Example

```
1. Add XPS Ship node to workflow
2. Configure API credentials
3. Select operation (Create Label, Track, etc.)
4. Enter shipping details
5. Execute workflow
```

## Operations

- Create Shipping Label
- Track Shipment
- Calculate Rates
- Validate Address
- Manage Package Information
- Cancel Shipment


