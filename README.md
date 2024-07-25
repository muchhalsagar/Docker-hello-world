# Node.js with Docker Hello World Example

This repository contains a simple "Hello World" Node.js application that is containerized using Docker.

## Project Structure

- `app.js`: The main application file.
- `Dockerfile`: The Docker configuration file.
- `.dockerignore`: Specifies files and directories to be ignored by Docker.
- `package.json`: Node.js project metadata and dependencies.

## Getting Started

These instructions will guide you through setting up and running the project on your local machine.

### Prerequisites

Ensure you have the following installed on your machine:
- Docker
- Node.js

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/muchhalsagar/Docker-hello-world.git
    cd Docker-hello-world
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Build the Docker image:**

    ```bash
    docker build -t Docker-hello-world .
    ```

4. **Run the Docker container:**

    ```bash
    docker run -p 3000:3000 Docker-hello-world
    ```

## Accessing the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see "Hello World!".


## License

This project is licensed under the MIT License.     

---

Thank you for checking out this project! If you have any questions or feedback, feel free to reach out.
