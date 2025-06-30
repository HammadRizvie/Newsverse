# Newsverse

A modern news aggregation web app built with React, TypeScript, and Material UI. Newsverse fetches and displays news from multiple APIs (NewsAPI, The Guardian) with a clean, responsive UI.

---

## 🚀 Quick Start

### 1. Local Development (without Docker)

```bash
# Install dependencies
npm install

# Start the development server
npm start

# App runs at http://localhost:3000
```

### 2. Build for Production

```bash
npm run build
# Output in the build/ directory
```

### 3. Run Tests

```bash
npm test
```

---

## 🐳 Docker Usage

### Prerequisites
- Docker Desktop (Windows/Mac) or Docker Engine (Linux)
- (Optional) Docker Compose

### 1. Development Mode (with Hot Reload)

#### Using PowerShell Script (Recommended on Windows)

Edit your API keys in `run-docker-dev.ps1` if needed, then run:

```powershell
powershell -ExecutionPolicy Bypass -File .\run-docker-dev.ps1
```
- App runs at http://localhost:3000
- Hot reload enabled

#### Using Docker Compose

```bash
docker-compose --profile dev up --build
```

#### Manual Docker Commands

```bash
docker build -f Dockerfile.dev -t newsverse-dev .
docker run -p 3000:3000 \
  -e REACT_APP_NEWS_API_URL="https://newsapi.org/v2" \
  -e REACT_APP_NEWS_API_KEY="your_news_api_key" \
  -e REACT_APP_GUARDIAN_URL="https://content.guardianapis.com" \
  -e REACT_APP_GUARDIAN_KEY="your_guardian_api_key" \
  newsverse-dev
```

### 2. Production Mode

```bash
docker build -t newsverse-prod .
docker run -p 80:80 newsverse-prod
# Or with Docker Compose
# docker-compose --profile prod up --build
```
- App runs at http://localhost (port 80)

---

## ⚙️ Environment Variables

All API keys and endpoints must be set as environment variables **at build time** (for Create React App):

| Variable                      | Description                        | Example Value                        |
|-------------------------------|------------------------------------|--------------------------------------|
| REACT_APP_NEWS_API_URL        | NewsAPI base URL                   | https://newsapi.org/v2               |
| REACT_APP_NEWS_API_KEY        | NewsAPI key                        | 57c734c0ceee4c31821bcfdeb1e7c749     |
| REACT_APP_GUARDIAN_URL        | Guardian API base URL              | https://content.guardianapis.com     |
| REACT_APP_GUARDIAN_KEY        | Guardian API key                   | a5a0379f-6d6e-45a4-af5f-6be2d26a4414 |

You can copy `env.example` to `.env` and fill in your keys for local development.

---

## 🛠️ Project Structure

```
newsverse/
  src/
    components/      # Reusable UI components
    pages/           # Page-level components
    context/         # React context providers
    constants/       # API endpoints, config
    utils/           # Utility functions
    types/           # TypeScript types
```

---

## 🐞 Troubleshooting

- **APIs not working in Docker?**
  - Make sure you set the correct API keys in your environment variables or Docker run command.
  - For local APIs, use `host.docker.internal` instead of `localhost` in your API URLs.
  - Rebuild the Docker image after changing environment variables.
- **Hot reload not working in Docker?**
  - Use the provided PowerShell script or Docker Compose for proper volume mounting.
- **CORS issues?**
  - Ensure your API server allows requests from your frontend's origin.

---

## 📄 License

MIT

---

## ✨ Credits
- [Create React App](https://github.com/facebook/create-react-app)
- [Material UI](https://mui.com/)
- [NewsAPI](https://newsapi.org/)
- [The Guardian Open Platform](https://open-platform.theguardian.com/)
