
// simple sample library. Tracks if a book is available, checked out , or late
//
//
( function( ) {
    
    const Tracker = new function(){

        const Inventory = {
            book1: {
                title: "Moby Dick",
                available: true,
                late: false
            },
            book2: {
                title: "Man of La Mancha",
                available: false,
                late: true
            }
        }
        
        this.items = {}
        this.cartObj = []

        this.cartObj = Inventory;

        console.log("Coopers library is open for business: ", this.cartObj );

        this.findBook = (title) =>{
            for (book in this.cartObj ){
                console.log("Our book: ", book )
                //use each item in the object array as a key and whatever
                // comes after as the value
                key = book;
                value = this.cartObj[book];

                console.log("our title: ", value.title )
                if (value.title == title ) {
                    console.log("Found book ", value.available )
                    if (value.available !== false ) {
                        console.log("And its available: ", value.available)
                        return book; //The book is in inventory and available
                    } else {
                        console.log("Sorry, that book has been checked out")
                        return false;// The book is inventory but checked out
                    } //end if available   
                } 
                return false;  //Book just not in inventory
            }//end for look
        }//end findBook
        
        this.isAvailable = (title) => {
            console.log("Find book: ", title );
            console.log("cartObj: ", this.cartObj );
 
            let foundBook = this.findBook(title);
             if (foundBook ){
                return foundBook
             } else {
                 console.log("isAvailable - book not found")
             };
      
           /* for(var i in vars ){
                varKey = i;
                varValue = vars[i];
                varObj = {
                    key : i,
                    value : vars[i]
                }
                varArr.push(varObj)
              } */
        }//end isAvailable

        this.checkOut = (title) => {
            console.log("Check book in:", title );
            if (Tracker.isAvailable(title)) {
                console.log("found book - set available to 0" );
                let takeOutBook = this.findBook(title);
                console.log("Take out book: ", takeOutBook.value)   
            } else {
                console.log("Checkout - Sorry book is unavailable")
            }

        }
        this.returnBook = () => {
            console.log("Return book here...");
        }

        this.generateLibrary = () => {
            console.log("Generate and refress library whenever there's a change in a book's status")
        } 
    }//end Tracker

    Tracker.checkOut("Moby Dick");


})()

