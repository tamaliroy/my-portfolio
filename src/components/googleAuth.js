import React from 'react';

class GoogleAuth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn : null
        }
    }

    componentDidMount() {

        // window.gapi.load('client:auth2', () => {
        //     window.gapi.client.init({
        //         clientId: '1069143243117-v558gl86fj6mu6ocul110398g1ttkbb1.apps.googleusercontent.com',
        //         scope: 'email'
        //     })
        // });

    }

    updateSigninStatus =  () => {
        this.setState({isSignedIn: true })
    }

    render() {
        return (
          <>
           {/* <button onClick = {this.updateSigninStatus} className="ui google plus button">
           <i className="google plus icon"></i>
              Sign in with Google
          </button> */}
         </>  
        )
    }

}

export default GoogleAuth;