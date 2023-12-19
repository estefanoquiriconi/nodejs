const authUser = require('./authUser.middleware');
const canEdit = require('./canEdit.middleware.js');
const cantVote = require('./cantVote.middleware.js');

module.exports = {
    authUser,
    canEdit,
    cantVote
}