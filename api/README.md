### Migrations using Sequelize CLI
Sequelize documentation: https://sequelize.org/docs/v6/other-topics/migrations/

To run database migrations:
`npx sequelize-cli db:migrate`

To undo migrations:
`npx sequelize-cli db:migrate:undo`

To generate seed data:
`npx sequelize-cli seed:generate --name demo-user`

To run the seeder:
`npx sequelize-cli db:seed:all`

To undo seeds:
`npx sequelize-cli db:seed:undo`