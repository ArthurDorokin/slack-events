import addToSlack from "./componens/pages/add_to_slack";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={addToSlack}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
