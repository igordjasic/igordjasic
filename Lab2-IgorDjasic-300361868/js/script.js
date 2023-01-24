window.addEventListener("onload", initializePage1())


async function initializePage1(){
    
    var contactTotal = 53;                                                //Request a total amount of contacts here. If you change this number, the pagination will adapt to the chosen number. 
    var api = 'https://randomuser.me/api/?results=' + contactTotal;       //Refresh the first page after changing the number to change the pagination. 100 is the maximum amount of contacts.

    localStorage.setItem("contact", contactTotal); //Sending api amount to to other script files

    var response = await fetch(api);               
    var data = await response.json();
    
    var database = data.results;
    const contact = JSON.stringify(database)  //Stringifying api to JSON string 
    

    var totalOutput = document.getElementById("totalNum")
    totalOutput.innerText = "Total: " + (JSON.parse(contact).length);   //Changes "Total:" counter
   
    var repeat = JSON.parse(contact).length;
    

    if(contactTotal > 10){                  //If else statement to ensure each page doesn't go above 10 contacts
        total = 8
    }
    else{
        var repeat = contactTotal;
        var total = repeat - 2;
    }

        for(i=0; i<total; i++){                     
        
            var output = document.getElementById("contact-list");      //For loop statement that creates each contact as many times as it needs to
            
            var listItem = document.createElement("li");
            listItem.className = "contact-item cf";
            
            var divMain = document.createElement("div");               //Assigning names to the creation of elements
            var divDate = document.createElement("div");
            var img = document.createElement("img");
            var h3 = document.createElement("h3");
            var spanMain = document.createElement("span");
            var spanDate = document.createElement("span");
            
            
            //BUILDING FIRST DIV
            

            divMain.className = "contact-details";                 
            img.className = "avatar";
            h3.innerText = JSON.parse(contact)[i].name.first + " " + JSON.parse(contact)[i].name.last;
            img.src = JSON.parse(contact)[i].picture.large;
            spanMain.innerText = JSON.parse(contact)[i].email;
            spanMain.className = "email";
            
            divMain.append(img);                                    
            divMain.append(h3);
            divMain.append(spanMain);
            
            listItem.append(divMain)                                
            
            
            //BUILDING SECOND DIV
            
            
            divDate.className = "joined-details";
            spanDate.className = "date";
            
            divDate.append(spanDate);
            listItem.append(divDate);
            var trim = (JSON.parse(contact)[i].registered.date);
            
            spanDate.innerText = "Joined " + (trim.slice(0,10));
            
            output.append(listItem);  //Appending both divs
        }
        
        
        createTabs(); //Function to take number of users taken from api, and create pagination based on it.

        function createTabs(){
            var pagForm = JSON.parse(contact).length;
            if(pagForm  > 10){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "2";
                link.href="page2.html";
                
                outLink.append(link);
            }
            if(pagForm  > 20){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "3";
                link.href="page3.html";
                
                outLink.append(link);
    
            }
            if(pagForm  > 30){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "4";
                link.href="page4.html";
                
                outLink.append(link);
    
            }
            if(pagForm  > 40){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "5";
                link.href="page5.html";
                
                outLink.append(link);
            }
            if(pagForm  > 50){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "6";
                link.href="page6.html";
                
                outLink.append(link);
            }
            if(pagForm  > 60){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "7";
                link.href="page7.html";
                
                outLink.append(link);
            }
            if(pagForm  > 70){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "8";
                link.href="page8.html";
                
                outLink.append(link);
            }
            if(pagForm  > 80){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "9";
                link.href="page9.html";
                
                outLink.append(link);
            }
            if(pagForm  > 90){
    
                var outLink = document.getElementById("pagOutput");
                var link = document.createElement('a');
                link.innerText = "10";
                link.href="page10.html";
                
                outLink.append(link);
            }
          


        }
        
        

}




