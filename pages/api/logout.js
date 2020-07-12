import { applySession } from 'next-session';

export default async function handler(req, res) {
    await applySession(req, res);
    await req.session.destroy();
    console.log('SESSION',req.session);
    res.end();
}