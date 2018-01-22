var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }, 
        getterMethods: {
           route() {
                return /wiki/.urlTitle;
            }
        }
});



var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = {
    db: db,
    Page: Page,
    User: User
  };

module.exports = db;

models.db.sync({})
.then(function () {
   wikistack.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);

var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

