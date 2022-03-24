let fs = require('fs');

const FILE_NAME = './assets/answers.json';

let answerRepo = {
  get: function (resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        resolve(JSON.parse(data));
      }
    });
  },
  getById: function (id, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let answer = JSON.parse(data).find(p => p.id == id);
        resolve(answer);
      }
    });
  },
  search: function (searchObject, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let answers = JSON.parse(data);
        // Perform search
        if (searchObject) {
          answers = answers.filter(
            p => (searchObject.id ? p.id == searchObject.id : true) &&
              (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name) >= 0 : true));
        }

        resolve(answers);
      }
    });
  },

  insert: function (newData, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let answers = JSON.parse(data);
        answers.push(newData);
        fs.writeFile(FILE_NAME, JSON.stringify(answers), function (err) {
          if (err) {
            reject(err);
          }
          else {
            resolve(newData);
          }
        });
      }
    });
  },
  update: function (newData, id, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let answers = JSON.parse(data);
        let answer = answers.find(p => p.id == id);
        if (answer) {
          Object.assign(answer, newData);
          fs.writeFile(FILE_NAME, JSON.stringify(answers), function (err) {
            if (err) {
              reject(err);
            }
            else {
              resolve(newData);
            }
          });
        }
      }
    });
  },





};

module.exports = answerRepo;