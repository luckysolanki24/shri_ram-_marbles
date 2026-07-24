#!/bin/bash
# Automatically load the Node.js binary path
export PATH="$HOME/.node/bin:$PATH"

# Move to the project directory
cd "$(dirname "$0")"

echo "----------------------------------------"
echo "Building the project..."
echo "----------------------------------------"
npm run build

echo "----------------------------------------"
echo "Deploying to Vercel..."
echo "----------------------------------------"
# Run Vercel deploy. If not logged in, Vercel CLI will prompt to log in.
npx vercel --prod
