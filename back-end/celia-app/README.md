## 1. Project setup in local

```bash
$ npm install
```

### Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
---
## **2. Docker**
Use docker compose
  ```bash
  docker-compose up --build -d
  ```

- **Logs**:
  Check the logs if something goes wrong:
  ```bash
  docker-compose logs app
  docker-compose logs db
  ```
---
## **3. Setup the project on the epitech VM**
- **Firewall Rules**: Ensure port `3000` is open in the VM's firewall.
  - For Ubuntu-based systems with UFW enabled, run:
    ```bash
    sudo ufw allow 3000
    sudo ufw reload
    ```
---

## **4. Map `localhost:3000` to Your Local Machine**
If you'd like to access the app using `http://localhost:3000` on your local machine, you can use **SSH port forwarding**.

- On your local machine, run:
  ```bash
  ssh -L 3000:localhost:3000 user@your-vm-ip
  ```
  This command forwards port `3000` on your local machine to port `3000` on the VM.

- Now, open your browser on your local machine and visit:
  ```
  http://localhost:3000/
  ```
- Access to the vm:
    ```
    ssh user@ip
    ```

---
## **5. API routes**

### **Public Routes (Non-authenticated users)**
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register
- `GET /api/auth/oauth/callback` - OAuth callback

---

### **Basic and Premium User Routes (Authentication required)**
#### **Schemas**
- `GET /api/schemas` - List saved schemas
- `POST /api/schemas` - Create a new schema
- `PUT /api/schemas/:id` - Update a schema
- `DELETE /api/schemas/:id` - Delete a schema
- `POST /api/schemas/:id/duplicate` - Duplicate a schema
- `GET /api/schemas/:id/history` - View schema modification history

#### **User Data**
- `GET /api/users/me` - View personal information
- `DELETE /api/users/me/data` - Delete personal information
- `DELETE /api/users/me` - Delete account

#### **AI and Voice**
- `POST /api/ai/apply` - Call AI with a voice input

---

### **Premium User-Specific Routes**
- `GET /api/users/me/api-key` - Get an API key with no call limits

---

### **Admin Routes**
- `GET /api/admin/subscriptions` - View active subscriptions
- `GET /api` - View Swagger documentation
---