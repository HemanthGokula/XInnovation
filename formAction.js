//Forming the Subroutines to populate the JS
//This probably needs to have a CCLLINK and XMLCCLREQUEST to parse the data
function myFunction()
{
		
		console.log("Loading from within a extended file");
}

loadPage = function() {
		console.log("I'm in the Loadpage section at the top");
		$("#useloader").removeClass("loader");
		$("#useloader").addClass("hidden");
		return(true);
		
};	 
//catching the JSON PARSE from Criterion throiugh XMLCCLREQUEST

var ptParam = function() {
	var ptId = new XMLCclRequest ();
	var criterion = JSON.parse(m_criterionJSON);
	var htmlLoad = []; //load my data when request. 
	
	ptId.onreadystatechange = function () {
		if (ptId.readyState == 4 && ptId.status == 200) 
		{
			  var rText = ptId.responseText;
			  //document.getElementById('useful_n_p').innerHTML = rText;
			  if (rText != undefined && rText != null && rText > " ") {
			  retJSON = eval('(' + rText + ')');
				}	
	  }
	}
}

var catchformReq = function formRequest(){
	alert("in cclreq func");

	var chkbxFetch = document.getElementById("chkbox").value;
	console.log(chkbxFetch);
	//var chkbxFetch = document.getElementById("prov_chk");
	if (chkbxFetch === "prov_chk")
	{	
		console.log("first if state");
		console.log("second if to equate prov_chk");
		var jsonParam = '{ "PERSON_ID": "1234", "ENCNTR_ID":"56789", "FORM_ID":"1112222333" }';
		console.log(jsonParam);
		console.log("Inside prov_chk checked-func");	
		//var jsonParam = JSON.parse(jsonreply); 
		var Prov_chkList = new function () 
					{
						alert("inside the new function");
						var prov_chk_list;
						prov_chk_list = window.open("","window","location=-1,status=1")
						prov_chk_list.document.write("<html><head><title></title><body>" + 
													"<h2>Provider Check-List</h2><div><form id='prov_check' onsubmit='submitForm'><br>" + 
													"<label>Check List Item 1<label><br>" + "<textarea rows=4 cols=50 autofocus> </textarea><br>" +
													"<label>Check List Item 2<label><br>" + "<textarea rows=4 cols=50 autofocus> </textarea><br>" +
													"<label>Check List Item 3<label><br>" + "<textarea rows=4 cols=50 autofocus> </textarea><br>" +
													"<label>Check List Item 4<label><br>" + "<textarea rows=4 cols=50 autofocus> </textarea><br>" +
													"<label>Check List Item 5<label><br>" + "<textarea rows=4 cols=50 autofocus> </textarea><br>" +
													"<button class ='button' value='submit' onclick='wrteBlob' onsubmit='window.close();'>" +
													"Submit</button></div></form></body></head></html>");	
						console.log(prov_chk_list);
						alert(prov_chk_list);
						return (true);
					}
		
		return(false);
	}
	
	var submitForm = function () {
		console.log("Form is submitted");
		return false;
	}
	
	 //Parse Person_ID, ENCNTR_ID and FORM_REF_ID
	var saveForm = function wrteBlob() { 
		console.log("Form has been requested to be saved");
		}	
}

//IMP NOTE
//if(!document.getElementById("someId") //(NOT FALSE === TRUE) or !false === true;
//EXECUTE CCL  
/*
    var xmlObj = new XMLCclRequest();  
    var cclPrg = "CCL_program_name";  
    var cclParams = "$PERSON_ID, $ENCNTR_ID, $EVENTST, $EVENTCD";  
      
    xmlObj.onreadystatechange = function() {  
         if (xmlObj.readyState === 4 && xmlObj.status === 200) {  
              //do something ONLY AFTER the ccl program has executed successfully        
          } else if (xmlObj.readyState === 4) {  
            alert("Error was encountered during CCL call. status: "+ xmlObj.status);  
          }  
    };  
      
    xmlObj.open("GET",cclPrg);  
    xmlObj.send(cclParams);  


function (ccl, params) {
  var xcr = new XMLCclRequest();
  var retJSON;
  xcr.onreadystatechange = function () {
  if (xcr.readyState == 4 && xcr.status == 200) 
	{
		  var rText = xcr.responseText;
		  //document.getElementById('useful_n_p').innerHTML = rText;
		  if (rText != undefined && rText != null && rText > " ") {
		  retJSON = eval('(' + rText + ')');
	}
  }
  else if(xcr.readyState == 4)
		{
			  alert("Comms Error: " + xcr.status );
			  retJSON=0
		}
	}
  xcr.open('POST', ccl, false); /*Gets the file synchronously, so that the next command doesn't run until this is returned.*/
/*  xcr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xcr.setRequestHeader('Connection', 'close');
  xcr.send(params);
  return retJSON;
};*/