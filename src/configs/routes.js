import PlayerDetails from '../components/PlayerDetails';
import NoPage from '../components/NoPage';
import Tictactoe from '../components/Tictactoe';
import DashBoard from '../components/DashBoard';
const routes = [
    {
      path: '/',
      component: <PlayerDetails/>
    },
    {
      path: '*',
      component: <NoPage/>
    },
    {
      path: '/playGame',
      component: <Tictactoe/>
    },
    {
      path: '/dashboard',
      component: <DashBoard/>
    }
  ]
      
export default routes  