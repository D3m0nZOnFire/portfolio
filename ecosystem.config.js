module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/portfolio',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 8080
    },
    error_file: '/var/www/portfolio/logs/err.log',
    out_file: '/var/www/portfolio/logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};