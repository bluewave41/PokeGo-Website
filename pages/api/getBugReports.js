const BugReportCommands = require('./BugReportCommands');
import { applySession } from 'next-session';

export default async function handler(req, res) {
    await applySession(req, res);
    if(!req.session.user) {
        res.send({error: "Not logged in"});
        res.end();
    }
    else if(req.session.user.admin) {
        let bugreports = await BugReportCommands.getAllBugReports();
        res.send(bugreports);
        res.end();
    }
    else {
        let bugreports = await BugReportCommands.getBugReportsForUser(req.session.user.userID);
        res.send(bugreports);
        res.end();
    }
}