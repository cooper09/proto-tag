
// simple function to remove any 0 that comes after another 0
//
( function( ) {

    const data = [1,2,0,6,0,0,0,8,0,0,1,0,0,0];
    
    const Tracker = new function(){
        console.log("The Lone Tracker is here: ", data );
        this.items = {}
        this.cartObj = []

    const sortedArr = data.map( (num, index, array) => {
        console.log("current num: ", num )
            if( num == 0) {
                //check to see if next num is 0
                if (array[index+1] !== 0 ) {
                    this.cartObj.push(num)
                }//end if
            } else {
                this.cartObj.push(num)
            }//end if  
        })//end map
    
        console.log("final goodies: ", this.cartObj );

    }//end Tracker
})()

