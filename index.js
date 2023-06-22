const inquirer = require('inquirer');
const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'topnotch13',
    database: 'employe_db'
  },

);

function menu() {

  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ["view department", "view role", "view employe"]
      },

    ])
    .then((response) => {
      if (response.action === "view department") {
        db.query("select * from department", function (error, data) {
          console.table(data)
          menu()
        })


      }
      if (response.action === "view role") {
        db.query("select * from role", function (error, data) {
          console.table(data)
          menu()

        })


      }
      if (response.action === "view employe") {
        db.query("select * from employe", function (error, data) {
          console.table(data)
          menu()
        })
      }

    }



    );
}
menu ()