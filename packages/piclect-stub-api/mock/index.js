const mocky = require('mocky');
const fs = require('fs');

const ctpath = '/api';

mocky.createServer([
  {
    url: ctpath + '/users',
    method: 'get',
    res(req, res, callback) {
      callback(null, {
        status: 200,
        body: JSON.stringify([
          {
            id: 1,
            name: 'first user',
            email: 'sample@example.com'
          }
        ])
      });
    },
  },
]).listen(8080);