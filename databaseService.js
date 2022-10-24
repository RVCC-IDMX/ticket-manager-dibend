const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  // eslint-disable-next-line class-methods-use-this
  save(email, price, timestamp) {
    log(chalk.red(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
  }
}

module.exports = DatabaseService;
