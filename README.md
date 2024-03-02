Dockerized Node API using: express, express-validator, MySQL database and phpmyadmin
- Docker v4
- Mysql v8
- phpmyadmin v5
- express v4
- express-validator v7

1. Execute:
docker-compose build
docker-compose up

Note: 
If the mysql service fails the healthcheck, restart the container:
Ctrl+c twice
docker-compose down
docker-compose up

2. Go to localhost:4000 to run the app

Notes:
- DB script is in backend/db folder. Docker automatically creates a database with test data. Open phpmyadmin on localhost:8080 to view the database (user: user, password:123)
- Backend api runs on localhost:3000
