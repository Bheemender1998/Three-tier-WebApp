# Three-Tier Web Application

This repository contains the code for a Three-Tier Web Application built with AWS services, using a frontend, backend, and database tier. The app is designed to demonstrate a typical three-tier architecture where each tier is responsible for a different part of the application.

## Architecture

The application is divided into three layers:
1. **Frontend Layer (Presentation Tier)**: 
   - A simple web-based UI created using HTML, CSS, and JavaScript.
   - It allows users to interact with the backend via API requests.

2. **Logic Layer (Backend Tier)**: 
   - API Gateway to expose RESTful APIs.
   - AWS Lambda functions to process requests and interact with the data layer (DynamoDB).

3. **Data Layer**:
   - AWS DynamoDB to store and manage user data.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: AWS Lambda, API Gateway
- **Database**: AWS DynamoDB
- **Cloud Infrastructure**: AWS (S3, Lambda, API Gateway, DynamoDB)

## Setup Instructions

### Prerequisites
- AWS account and basic knowledge of AWS services like Lambda, DynamoDB, API Gateway, and S3.
- Git installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Bheemender1998/Three-tier-WebApp.git
cd Three-tier-WebApp
