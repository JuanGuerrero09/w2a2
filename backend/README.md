# Backend
## Backend Dependencies

### Use:
- bcrypt: Encrypt password with hash
- CORS: Remove CORS error when connect backend to frontend
- express: Main backend framework
- express-session: To manage user session when the user log in
- http-errors: To send better errors when using http methods
- morgan: To send command line messages when a http method is exec
- eslint: Linter
- nodemon: Track changes and restart server automatically
- ts-node: to use typescript without having to compile everytime
- typescript: Main backend language
- connect-mongo: to connect with MongoDB
- dotenv: to use .env files

```
"devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/express-session": "^1.17.6",
    "@types/http-errors": "^2.0.1",
    "@types/morgan": "^1.9.4",
    "@types/node": "*",
    "@typescript-eslint/eslint-plugin": "^5.54.1",
    "@typescript-eslint/parser": "^5.54.1",
    "eslint": "^8.35.0",
    "eslint-plugin-react": "^7.32.2",
    "nodemon": "^2.0.21",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.5"
  },
  "dependencies": {
    "bcrypt": "^5.1.0",
    "connect-mongo": "^4.6.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "envalid": "^7.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "http-errors": "^2.0.0",
    "mongodb": "^4.1.0",
    "mongoose": "^7.0.0",
    "morgan": "^1.10.0"
  }
```