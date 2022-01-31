export class AuthService
{
    loggedIn=false;

    isAuthenticated()
    {
        const promose=new Promise(
            (resolve,reject) => 
            {
                setTimeout(() =>
                {
                    resolve(this.loggedIn);
                },800);
            }
        );
        return promose;
    }
    
    login()
    {
        this.loggedIn=true;
        // this.loggedIn=false;
    }

    logout()
    {
        this.loggedIn=false;
    }
}