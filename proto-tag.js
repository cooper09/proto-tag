

( function( ) {

    const Tracker = new function(){
        console.log("The Lone Tracker is here!!")
        this.items = {}
        this.cartObj = []
    
        this.sayHello = () => {
            console.log("Hello out there in television land!!")
        }//end sayHello

        this.testFunc= () => {
            console.log("testFunc...");
            return { item1:"trivial data",
                     item2: "important data"
                    }
        }
   
    // first get url params from link
        this.getParams = () => {
            console.log("Tracker - getParams")

            var varArr = [];
            var paramArr = [];
            var vars = {};
            var varKey;
            var varValue;
            var varObj = {}

            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });
    
            for(var i in vars ){
                varKey = i;
                varValue = vars[i];
                varObj = {
                    key : i,
                    value : vars[i]
                }
                varArr.push(varObj)
              }
              
            return varArr;
        }//end getParams

    // first get url params from link
    this.storeData = (data) => {
            //console.log("Store your data here: ", data[0].key);
            
            let dataArr = []

            data.map((param) => {
               let dataObj = {}
               dataObj.key = param.key;
               dataObj.value = param.value
               dataObj.data = this.testFunc();
               dataArr.push(dataObj) 
            })

            console.log("final data: ", dataArr );

            var http = new XMLHttpRequest();
            var url = 'https://sleepy-everglades-99189.herokuapp.com/crystal'
            var timestamp = new Date()

            var params = 'hash='+ hashNo +'&category='+dataArr[0].value+'&source='+dataArr[1].value+'&utm_medium='+dataArr[0].data.item1+'&landing_page='+dataArr[1].data.item1+'&timestamp='+timestamp;
            
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    //window.location.href = 'https://us.tradezero.co/';
                    console.log("datafied!!!")
                    return "Watson I need you...";               
                } 
            }//end state change
    
            http.send(params);
        }
    }//end Tracker

    Tracker.sayHello();

    const params = Tracker.getParams();
    console.log("params for url: ", params );

  Tracker.storeData(params)

//window.location.href = 'http://localhost:8888/wordpress/?campaign='+ params[0].value +"&medium="+params[1].value+"&source="+params[2].value;
})()

