const server = require('./server.js');
const PORT = 3001;

const saveApiData = require('./controllers/saveApiData.js');
const { sequelize } = require('./DB_connection.js');





// server.listen(PORT, () => {
//    console.log('------------------BEFORE SYNC--------------------')
//    sequelize.sync({ force: true })
//    .then(async () => {
//       await saveApiData();
//       console.log('------------------AFTER SYNC--------------------')
//    console.log('Server raised in port ' + PORT);
//       })
//    });

sequelize.sync({ force: true })
   .then(async () => {
      await saveApiData();
      server.listen(PORT, () => {
         console.log('Server raised in port ' + PORT);
      });
   });
