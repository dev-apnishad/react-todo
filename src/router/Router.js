import { Route, Switch } from 'react-router-dom';
import { Todos, Home } from '../containers';

const Error = () => {
    return (
        <><p>Error 404</p></>
    )
}


const Router = (data) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todos' component={Todos} />
            <Route component={Error} />
        </Switch>
    )
};

export default Router;