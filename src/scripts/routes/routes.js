import Resto from '../views/pages/resto';
import Detail from '../views/pages/detail';

const routes = {
	'/': Resto,
	'/Resto': Resto,
	'/detail/:id': Detail,
};

export default routes;