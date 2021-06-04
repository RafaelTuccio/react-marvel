import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import Hero from './pages/hero/index';
import NotFound from './pages/error/NotFound';


const Routes = () => {
    return (
        <Switch >
            <Route exact path="/" component={Home}/>
            <Route exact path="/hero" component={Hero}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;