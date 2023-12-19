const insert = require('./insert.service.js');
const getById = require('./getById.service.js');
const addPhoto = require('./addPhoto.service.js');
const getPhotoById = require('./getPhotoById.service.js');
const deletePhoto = require('./deletePhoto.service.js');
const voteEntry = require('./voteEntry.service.js');
const getVoteAvg = require('./getVoteAvg.service.js');
const getVoteByUserId = require('./getVoteByUserId.service.js');

module.exports = {
    insert,
    getById,
    addPhoto,
    getPhotoById,
    deletePhoto,
    voteEntry,
    getVoteAvg,
    getVoteByUserId
}