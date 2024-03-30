export const api_host = 'http://127.0.0.1:8082';

export const endpoint = function(url=''){
    return api_host + url;
}

let token = localStorage.getItem('token');
let auth_token = ""
if(token){
    auth_token = {
        'Authorization': `Bearer ${token}`,
    };
}else{
    auth_token = {
        'Authorization': `Bearer ${token}`,
    };

}

export const bearer_token = auth_token;