# Customer Relationship Manager (CRM) Application

This project implements a basic CRM module using NestJS for the backend and Vue.js for the frontend. It covers lead generation and management, customer interface, search and filtering functionalities, and interaction tracking.

## Setup Instructions

1. Clone the repository:
git clone https://github.com/yourusername/crm-application.git


2. Navigate to the project directory:
cd crm-application


3. Install dependencies:
npm install


4. Set up the database (MySQL):
   - Create a MySQL database named `crm_db`
   - Import the SQL schema file located in `crm/src/crm/schema.sql`

5. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
DATABASE_URL=mysql://username:password@localhost/crm_db JWT_SECRET=your_jwt_secret_here


6. Start the NestJS server:
npm run start:nestjs


7. Start the Vue.js development server:
npm run serve


8. Open your web browser and navigate to `http://localhost:8080`

## Execution

Once the servers are running, you can interact with the CRM application through the following endpoints:

- Customers: `/customers`
- Leads: `/leads`
- Interactions: `/interactions`

The Vue.js frontend provides a user-friendly interface for managing customers, leads, and interactions.

## Features

- Basic CRUD operations for customers and leads
- Search and filtering capabilities
- Interaction tracking (phone calls and emails)
- User authentication and authorization

## Technologies Used

- Backend: NestJS
- Frontend: Vue.js
- Database: MySQL
- State Management: Vuex

## Contributing

Contributions are welcome! Please feel free to submit pull requests or issues.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.