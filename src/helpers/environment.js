let APIURL = '';

switch (window.location.hostname) {

    case 'localhost' || '127.0.0.1' :
    
    //     APIURL = 'http://localhost:4000';
    //     break;

        //  'mrc-hoptoit.herokuapp.com':

        APIURL='https://mrc-hoptoit.herokuapp.com'

}

export default APIURL;