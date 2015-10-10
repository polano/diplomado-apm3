$(document).ready(function(){

	function Validate(){};

  		Validate.prototype = {
  			email : function(email){
      			var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
      			return pattern.test(email);
    	},
    	userid : function(uid){
      				var pattern = new RegExp(/^[0-9]+$/);
      				return pattern.test(uid);
		}
  };
		
});
