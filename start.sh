#!/bin/bash
# Automatically load the permanent Node.js installation path
export PATH="$HOME/.node/bin:$PATH"

# Move to the project directory
cd "$(dirname "$0")"

echo "----------------------------------------"
echo "Starting Shree Marble & Stone website..."
echo "----------------------------------------"

# Run development server
npm run dev
