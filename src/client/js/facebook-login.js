window.fbAsyncInit = function() {
  FB.init({
    appId      : '1665252223717651',
    xfbml      : true,
    version    : 'v2.5'
  });

  FB.getLoginStatus(function(response) {
   if (response.status === 'connected') {
     FB.api('/me', function(response) {
         if (response && !response.error) {
           window.facebookURL = "http://graph.facebook.com/" + response.id; //for picture: + "/picture?type=normal";
        }
      });
    }
   else {
     FB.login();
   }
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
