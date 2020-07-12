const BugReportCommands = require('./BugReportCommands');
import { applySession } from 'next-session';

export default async function handler(req, res) {
    await applySession(req, res);
    if(!req.session.user.admin) {
        res.send({error: "User is not admin"});
        res.end();
    }
    await BugReportCommands.answerBugReport(req.body.id, req.body.response);
}