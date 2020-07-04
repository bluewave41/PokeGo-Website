import React from 'react';
import { applySession } from 'next-session';
import NavBar from './components/NavBar';
import axios from 'axios';
import BugReportComponent from './components/BugReportComponent';

export default function BugReports(props) {
    if(props.admin) {
        return (
            <div>
                <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
                <div id="content">
                    {props.bugreports.map(function(el) {
                        let user = el.User;
                        return <BugReportComponent username={user.username} discordID={user.discordID} message={el.message} response={el.response}
                                                   admin={props.admin} id={el.id}/>
                    })}
                </div>
            </div>
        );
    }
    else {
         return (
            <div>
                <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
                <div id="content">
                    {props.bugreports.map(function(el) {
                        return <BugReportComponent message={el.message} response={el.response}/>
                    })}
                 </div>
            </div>
        );
    }
}

export async function getServerSideProps({ req, res }) {
    await applySession(req, res);
    let response = await axios.post(process.env.API_URL + '/api/getBugReports', {}, {headers: req ? { cookie: req.headers.cookie } : undefined});
    if(response.data.error) {
        res.writeHead(302, {Location: '/'});
        res.end();
    }
    return {
        props: {
            discordID: req.session.user.id,
            username: req.session.user.username,
            discriminator: req.session.user.discriminator,
            avatarID: req.session.user.avatar,
            bugreports: response.data,
            admin: req.session.user.admin,
        }
    }
}