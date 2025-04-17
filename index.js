// Bring in the required modules
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream } from 'fs';
// Import CRUD operations
import { createPost, deletePost, getPosts, getPostById, updatePost } from './crudOperations.js';
// Import utility functions
import { regex, returnErrorWithMessage, addCorsHeaders } from './utils.js';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Base resource
const resource = '/posts';

// Request handler to handle all requests
const requestHandler = async (req, res) => {
  const { method, url } = req;

  // Handle OPTIONS requests for CORS
  if (method === 'OPTIONS') {
    addCorsHeaders(res);
    res.statusCode = 204;
    return res.end();
  }

  // Serve static files from public directory
  if (method === 'GET' && (url === '/' || url === '/index.html')) {
    const filePath = join(__dirname, 'public', url === '/' ? 'index.html' : url);
    const stream = createReadStream(filePath);
    
    stream.on('error', () => {
      returnErrorWithMessage(res, 404, 'File not found');
    });

    addCorsHeaders(res);
    res.setHeader('Content-Type', 'text/html');
    return stream.pipe(res);
  }

  if (url === resource) {
    if (method === 'GET') return await getPosts(req, res);
    if (method === 'POST') return await createPost(req, res);
    else return returnErrorWithMessage(res, 405, 'Method Not Allowed');
  } else if (regex(resource).test(url)) {
    if (method === 'GET') return await getPostById(req, res);
    if (method === 'PUT') return await updatePost(req, res);
    if (method === 'DELETE') return await deletePost(req, res);
    else return returnErrorWithMessage(res, 405, 'Method Not Allowed');
  } else {
    return returnErrorWithMessage(res, 404, 'Resource Not Found');
  }
};

// Create a server
const server = http.createServer(requestHandler);
// Set the port
const port = 3000;
// Start the server
server.listen(port, () => console.log(`Server running at http://localhost:${port}`));
