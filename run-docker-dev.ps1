# PowerShell script to run Docker with environment variables
# Usage: .\run-docker-dev.ps1

# Stop any existing containers
Write-Host "Stopping existing containers..." -ForegroundColor Yellow
docker stop $(docker ps -q --filter ancestor=newsverse-dev) 2>$null

# Remove existing containers
Write-Host "Removing existing containers..." -ForegroundColor Yellow
docker rm $(docker ps -aq --filter ancestor=newsverse-dev) 2>$null

# Build the image
Write-Host "Building Docker image..." -ForegroundColor Green
docker build -f Dockerfile.dev -t newsverse-dev .

# Run with environment variables
Write-Host "Starting container with environment variables..." -ForegroundColor Green
docker run -d `
  -p 3000:3000 `
  -e REACT_APP_NEWS_API_URL="https://newsapi.org/v2" `
  -e REACT_APP_NEWS_API_KEY="57c734c0ceee4c31821bcfdeb1e7c749" `
  -e REACT_APP_GUARDIAN_URL="https://content.guardianapis.com" `
  -e REACT_APP_GUARDIAN_KEY="a5a0379f-6d6e-45a4-af5f-6be2d26a4414" `
  --name newsverse-dev-container `
  newsverse-dev

Write-Host "Container started! Access your app at: http://localhost:3000" -ForegroundColor Green
Write-Host "To view logs: docker logs newsverse-dev-container" -ForegroundColor Cyan
Write-Host "To stop: docker stop newsverse-dev-container" -ForegroundColor Cyan 