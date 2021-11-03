Moralis.initialize("INSERT_APP_ID"); // Application id from moralis.io
Moralis.serverURL = "INSERT_SERVER_URL"; //Server url from moralis.io

async function login() {
    try {
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.authenticate({ 
                provider: "walletconnect", 
                mobileLinks: [
                  "metamask",
                  "trust",
                ] ,
                chainId: 3
            })
        }
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("login_button").onclick = login;
