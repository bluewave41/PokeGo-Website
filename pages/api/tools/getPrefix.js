const db = require('../../../lib/db.js');

export default async function handler(req, res) {
    let response = await db.server.findOne({
        attributes: ['prefix'],
        where: {serverID: req.body.serverID}
    });
    res.send(response ? response.prefix : null);
    res.end();
}