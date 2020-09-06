import { applySession } from 'next-session';

export default async function handler(req, res) {
    await applySession(req, res);
    await req.session.destroy();
    res.end();
}