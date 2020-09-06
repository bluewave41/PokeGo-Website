module.exports = {
	getUserID(req) {
		if(req.session.user) {
			return req.session.user.userID;
		}
		return req.body.userID;
	}
}