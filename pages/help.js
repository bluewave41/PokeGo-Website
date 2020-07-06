import React, { useState} from 'react';
import SideBar from './components/SideBar';
import ActiveComponent from './components/help/ActiveComponent';
import WelcomeComponent from './components/help/WelcomeComponent';
import CatchComponent from './components/help/CatchComponent';
import DailyComponent from './components/help/DailyComponent';
import EvolveComponent from './components/help/EvolveComponent';
import InfoComponent from './components/help/InfoComponent';
import InventoryComponent from './components/help/InventoryComponent';
import ListComponent from './components/help/ListComponent';
import NicknameComponent from './components/help/NicknameComponent';
import PokedexComponent from './components/help/PokedexComponent';
import PrefixComponent from './components/help/PrefixComponent';
import StarterComponent from './components/help/StarterComponent';
import TransferComponent from './components/help/TransferComponent';
import DisplayComponent from './components/help/DisplayComponent';
import SearchComponent from './components/help/SearchComponent';
import ShopComponent from './components/help/ShopComponent'; 
import SearchTutorial from './components/help/SearchTutorial';
import TradeListComponent from './components/help/TradeListComponent';
import TradeTutorial from './components/help/TradeTutorial';
import TradeComponent from './components/help/TradeComponent';
import QuitComponent from './components/help/QuitComponent';
import FavoriteComponent from './components/help/FavoriteComponent';
import HelpComponent from './components/help/HelpComponent';
import UseComonent from './components/help/UseComponent';
import BugReportComponent from './components/help/BugReportComponent';
import NavBar from './components/NavBar';
import { applySession } from 'next-session';

export default function Help(props) {
	const [page, setPage] = useState('');
	const components = {
		'Active': <ActiveComponent />,
		'Bug Report': <BugReportComponent />,
		'Catch': <CatchComponent />,
		'Daily': <DailyComponent />,
        'Evolve': <EvolveComponent />,
        'Help': <HelpComponent />,
		'Info': <InfoComponent />,
		'Inventory': <InventoryComponent />,
		'List': <ListComponent />,
		'Nickname': <NicknameComponent />,
		'Pokedex': <PokedexComponent />,
		'Prefix': <PrefixComponent />,
		'Starter': <StarterComponent />,
		'Transfer': <TransferComponent />,
		'Display': <DisplayComponent />,
		'Search': <SearchComponent setPage={setPage}/>,
		'Tutorial': <SearchTutorial />,
		'TradeTutorial': <TradeTutorial />,
		'Shop': <ShopComponent />,
		'Tradelist': <TradeListComponent />,
		'Trade': <TradeComponent setPage={setPage}/>,
		'Quit': <QuitComponent />,
        'Favorite': <FavoriteComponent />,
        'Use': <UseComonent />,
		'': <WelcomeComponent />
	}
    const componentName = components[page];
	
	return (
		<div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
			<SideBar setPage={setPage} />

            <div className="main">
                <div className="center">
                    <h1>{page}</h1>
			        {componentName}
                </div>
            </div>
            <style jsx>{`
                .center {
                    text-align: center;
                }
                h1 {
                    text-align: center;
                }
            `}</style>
		</div>
	)
}

export async function getServerSideProps({ req, res }) {
    await applySession(req, res);
    if(!req.session.user) {
        return {props: {}};
    }
    return {
        props: {
            discordID: req.session.user.id,
            discriminator: req.session.user.discriminator,
            avatarID: req.session.user.avatar,
            username: req.session.user.username,
        }
    }
}