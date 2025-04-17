# Blog API: Learn, Test & Explore

A modern, interactive API platform for learning and testing RESTful blog operations. Built with Node.js and PostgreSQL (Neon), this project provides both a functional API and an educational interface for understanding API interactions.

## 🚀 Features

- **Interactive Web Interface**: Test API endpoints directly from your browser
- **Real-time Response Display**: See API responses instantly
- **Comprehensive Documentation**: Built-in guides and examples
- **Full CRUD Operations**: Complete blog post management
- **Educational Resources**: Learn about curl commands and API testing

## 🛠️ Technology Stack

- **Backend**: Node.js with native HTTP module
- **Database**: PostgreSQL hosted on Neon
- **Database Driver**: node-postgres (pg)
- **Frontend**: Pure HTML, CSS, and JavaScript

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Retrieve all posts |
| GET | `/posts/:id` | Retrieve a specific post |
| POST | `/posts` | Create a new post |
| PUT | `/posts/:id` | Update an existing post |
| DELETE | `/posts/:id` | Delete a post |

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Larsbuilds/Blog-API.git
   cd Blog-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   PG_URI=your_neon_connection_string
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   Open `http://localhost:3000` in your browser

## 🌐 Deployment

### Frontend Deployment (Netlify)

1. **Connect to Netlify**
   - Fork this repository to your GitHub account
   - Log in to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Choose GitHub and select your forked repository

2. **Configure Build Settings**
   - Build command: Leave empty (no build command needed)
   - Publish directory: `public`
   - Click "Deploy site"

### Backend Deployment Options

You can deploy the Node.js backend on any of these platforms that work well with Neon:

1. **Railway** (Recommended)
   - Visit [Railway.app](https://railway.app/)
   - Connect your GitHub repository
   - Add your Neon database URL as an environment variable
   - Railway will automatically deploy your Node.js application
   - Free tier available for hobby projects

2. **Render**
   - Visit [Render.com](https://render.com/)
   - Create a new Web Service
   - Connect your GitHub repository
   - Add environment variables:
     ```
     PG_URI=your_neon_connection_string
     ```
   - Free tier available

3. **Heroku**
   - Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
   - Login and create a new app:
     ```bash
     heroku login
     heroku create your-app-name
     ```
   - Set environment variables:
     ```bash
     heroku config:set PG_URI=your_neon_connection_string
     ```
   - Deploy:
     ```bash
     git push heroku main
     ```
   - Note: Requires credit card for free tier

### Connecting Frontend to Backend

1. **Update API URL**
   - Once your backend is deployed, get your backend URL (e.g., `https://your-app.railway.app`)
   - Update the `API_URL` in `public/index.html`:
     ```javascript
     const API_URL = 'https://your-backend-url';
     ```

2. **Configure CORS**
   - Add your Netlify domain to your backend's CORS configuration
   - Example CORS configuration:
     ```javascript
     app.use(cors({
       origin: 'https://your-netlify-app.netlify.app'
     }));
     ```

### Important Notes
- Ensure your backend service has CORS properly configured
- Update your Neon database security settings to allow connections from your chosen backend host
- Keep your environment variables secure and never commit them to version control
- Consider using environment-specific configuration for development and production

## 💡 Usage Example

Creating a new blog post:
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "author": "John Doe",
    "content": "Hello, World!"
  }'
```

## 📊 Database Schema

```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔍 Error Handling

| Status Code | Description |
|-------------|-------------|
| 404 | Resource Not Found |
| 400 | Bad Request (missing fields) |
| 405 | Method Not Allowed |
| 500 | Internal Server Error |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

- **Lars Tischer** - [Larsbuilds](https://github.com/Larsbuilds)

## 🙏 Acknowledgments

- Thanks to Neon for providing the PostgreSQL database infrastructure
- Special thanks to all contributors and users of this project 