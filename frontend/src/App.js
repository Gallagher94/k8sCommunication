import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    name: 'no name'
  }

  handleClick = async () =>{


    // No env variables are injected from k8s - docs say 
    // When a Pod is run on a Node, the kubelet adds a set of environment variables
    // for each active Service. It supports both Docker links compatible variables 
    // (see makeLinkVariables) and simpler {SVCNAME}_SERVICE_HOST and {SVCNAME}_SERVICE_PORT variables,
    // where the Service name is upper-cased and dashes are converted to underscores
    console.log('process.env ', process.env);

    // This works when i add the backend to the ingress file - but i dont want 
    // the backend in the ingress file anymore

    // const serverData = await axios.get('backend/getName');  WINNER FOR INGRESS


    // Using the Env variables injected by k8s i thought i could use the below. But it doenst work
    // const serverData = await axios.get(`http://${BACKENDAPI_SERVICE_HOST}:${BACKENDAPI_SERVICE_PORT}`); 

    // Using the core-dns set up i thought i could use 
    // const serverData = await axios.get(`http://backendapi.default.svc.cluster.local:8050/getName`); 

    // this.setState({ name: serverData.data });



  }



  render() {
    return (
     <div>
       <button onClick={this.handleClick}/>
       <div>{`The name is ${this.state.name}`}</div>
     </div>

    );
  }
}

export default App;
