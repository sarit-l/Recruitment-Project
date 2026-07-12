# Public Complaint Form

## Project Overview

This project was developed as part of a recruitment assignment.

The application allows users to submit a public complaint through a multi-step form.

The solution consists of:

- Angular Frontend
- ASP.NET Core Minimal API Backend

---

# Technologies

## Frontend

- Angular
- TypeScript
- Angular Material
- Reactive Forms

## Backend

- ASP.NET Core 8
- C#
- Minimal API

---

# Project Structure

### Frontend

Responsible for:

- Multi-step form
- Form validation
- Navigation between steps
- File upload

### Backend

Responsible for:

- Receiving form submissions
- Returning API responses
- Monthly report endpoint
- File handling

---

# Build Approach

The project is divided into two independent layers:

- Frontend (Angular)
- Backend (.NET Core)

The frontend communicates with the backend using REST API requests.

Business logic is separated from the UI using Angular services.

---

# Security

The application includes:

- Client-side validation using Angular Reactive Forms.
- Server-side validation.
- HTTPS support.
- File validation before upload.
- Input sanitization to reduce malicious input.

---

# Error Handling

- Form validation prevents invalid user input.
- The backend returns appropriate HTTP status codes.
- Errors are logged using the existing logging mechanism.

---

# Cross Origin (CORS)

CORS is configured in the backend to allow communication between the Angular frontend and the ASP.NET Core backend during development.

---

# Installation

## Backend

```bash
cd PublicComplaintForm_API
dotnet restore
dotnet run
```

The backend runs on:

```
http://localhost:5209
```

## Frontend

```bash
cd PublicComplaintForm
npm install
ng serve
```

The frontend runs on:

```
http://localhost:4200
```

---

# Monthly Report Endpoint

GET

```
/monthly-report
```

Returns a JSON monthly report containing:

- Department Name
- Current Month Requests
- Previous Month Requests
- Same Month Last Year Requests

The current implementation uses dummy data, as allowed by the assignment instructions.