# Login Feature Implementation

This document describes the login feature implementation for the CallMyDriver app using Domain-Driven Design principles.

## Architecture Overview

The login feature follows Domain-Driven Design (DDD) architecture with the following layers:

### Domain Layer

- `src/domain/auth/useCases/LoginUser.ts` - Core business logic for login
- `src/domain/auth/repositories/IUserRepository.ts` - Repository interface
- `src/domain/auth/entities/LoginResult.ts` - Login result entity
- `src/domain/models/User.ts` - User domain model
- `src/domain/dtos/auth/LoginDto.ts` - Login data transfer object

### Data Layer

- `src/data/auth/UserRepositoryMongo.ts` - MongoDB implementation of user repository
- `src/data/models/UserModel.ts` - Mongoose User model

### Service Layer

- `src/services/authService.ts` - Coordinates between domain and controllers

### Presentation Layer

- `src/controllers/auth.controller.ts` - HTTP request handling
- `src/routes/v1/auth.routes.ts` - Route definitions

### Utilities

- `src/utils/jwt.ts` - JWT token generation and verification
- `src/utils/password.ts` - Password hashing and comparison

## API Endpoint

### POST /api/v1/auth/login

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "email": "user@example.com",
      "role": "Driver",
      "name": "John Doe"
    }
  }
}
```

**Error Response (401):**

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

## User Roles

The system supports two user roles:

- `Driver` - Users who provide driving services
- `Customer` - Users who request driving services

## Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt with 12 salt rounds
2. **JWT Tokens**: Secure token-based authentication
3. **Input Validation**: Email and password validation
4. **Error Handling**: Generic error messages to prevent information leakage

## Environment Variables

Add the following to your `.env` file:

```
DATABASE_URL=mongodb://localhost:27017/callmydriver
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables in `.env` file

3. Start the development server:

```bash
npm run dev
```

## Testing the Login Feature

You can test the login endpoint using curl or any API client:

```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "driver@example.com",
    "password": "password123"
  }'
```

## Database Schema

The User model includes:

- `email` (unique, required)
- `password` (hashed, required)
- `role` (enum: 'Driver' or 'Customer', required)
- `name` (required)
- `createdAt` (auto-generated)
- `updatedAt` (auto-generated)

## Dependencies Added

- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT token handling
- `mongoose` - MongoDB ODM
- `@types/bcrypt` - TypeScript types for bcrypt
- `@types/jsonwebtoken` - TypeScript types for JWT
