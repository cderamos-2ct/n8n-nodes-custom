#!/bin/bash

echo "==================================="
echo "n8n Custom Nodes Setup"
echo "==================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "Error: Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies"
    exit 1
fi

echo "✓ Dependencies installed"
echo ""

# Build the nodes
echo "Building nodes..."
npm run build

if [ $? -ne 0 ]; then
    echo "Error: Failed to build nodes"
    exit 1
fi

echo "✓ Nodes built successfully"
echo ""

echo "==================================="
echo "Setup Complete!"
echo "==================================="
echo ""
echo "Next steps:"
echo "1. If using Docker, restart your n8n container"
echo "2. If using local n8n, run:"
echo "   npm link"
echo "   cd ~/.n8n/custom"
echo "   npm link n8n-nodes-custom"
echo "3. Restart n8n"
echo ""
echo "For more information, see README.md"

