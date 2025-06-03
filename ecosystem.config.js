module.exports = {
  apps: [
    {
      name: 'portfolio-website',
      script: 'server.js',
      instances: 1, // or 'max' for cluster mode
      exec_mode: 'fork', // or 'cluster'
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      // Logging
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      
      // Auto restart
      watch: false,
      max_memory_restart: '1G',
      
      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      // Advanced settings
      node_args: '--max-old-space-size=1024'
    }
  ]
}; 