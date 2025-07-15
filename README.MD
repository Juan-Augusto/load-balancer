## Load Balancer


This project implements a load balancer for video projects, allowing for efficient distribution of video content across multiple servers.

### Features
- Load balancing across multiple video servers
- Support for various video formats
- Easy integration with existing video projects
- Connection visualization and monitoring dashboard using WebSockets
### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/load-balancer.git
    cd load-balancer

2. Install dependencies:
    ```bash
    npm install

3. Configure the load balancer by editing the `config.js` file to specify your video servers.
4. Start the load balancer:
    ```bash
    npm start

### Usage
- The load balancer will automatically distribute incoming video requests to the available servers based on the configured
strategy (e.g., round-robin, least connections).
- You can monitor the load balancer's performance and server status through the provided dashboard.
### Contributing
Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.