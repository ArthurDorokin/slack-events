import React from 'react';

const handlerClickFetch = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/api/auth/`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(json => console.log(json));
};


function App() {
  return (
    <div className="App">
        <div className="slack">
            <a onClick={handlerClickFetch} href="https://slack.com/oauth/v2/authorize?scope=incoming-webhook&client_id=2211413815281.2199026175683"><img
                alt="'Add to Slack'" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png"
                srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a>
        </div>
    </div>
  );
}

export default App;
