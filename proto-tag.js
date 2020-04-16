
// simple function to remove any 0 that comes after another 0
//
( function( ) {
    
    const Tracker = new function(){
        console.log("The Lone Tracker is here: ");
        this.datastore = []

        this.addItem = (key, value ) => {
            console.log("Tracker.addItem key: ", key, " value: ", value )
            if (key && value ) {
                this.datastore.push({key: key, value: value})
                return this.datastore
            }//end iff
        }//end add

        this.checkIn = (key) => {
            for (var i=0; this.datastore.length ; ++i) {
                if ( this.datastore[i].key === key) {
                    this.datastore[i].value.available = true;
                    return this.datastore;
                }//end iffy
            }//end for 
            return this.datastore;
        }//end checkIn

        this.checkOut = (key) => {
            for (var i=0; this.datastore.length ; ++i) {
                if ( this.datastore[i].key === key) {
                    this.datastore[i].value.available = false;
                    return this.datastore;
                }//end iffy
            }//end for 
            return this.datastore;
        }//end checkOut

        this.findAt = (key) =>{
            console.log("FindAt: ", key )
            for (var i=0; i < this.datastore.length ; ++i) {
                
                if ( this.datastore[i].key === key) {
                    return this.datastore[i].value.title;
                }//end iffy
             
            }//end for 
            return "Book not found" //this.datastore
        } //end findAt

        this.size = () => {
            return this.datastore.length;
        }//end size

        this.displayData = () =>{
            console.log("Current Data Store: ", this.datastore )
        }// displayData
    }//end Tracker

    Tracker.displayData();
    Tracker.addItem("book0", {title:"Moby Dick", available: true })
    Tracker.displayData();
    Tracker.checkOut("book0")
    Tracker.displayData()
    Tracker.checkIn("book0")
    Tracker.displayData()
    console.log("found book: " , Tracker.findAt("book0"))
    Tracker.addItem("book1", {title:"Man of La Mancha", available: false })
    console.log("found book: " , Tracker.findAt("book1"))
})()

