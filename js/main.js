var speed = 20;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

function incEltNbr2(id) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec2(0, endNbr, elt);
  }
  
  /*A recursive function to increase the number.*/
  function incNbrRec2(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function() {//Delay a bit before calling the function again.
        incNbrRec2(i + 1, endNbr, elt);
      }, 10);
    }
  }

/*Function called on button click*/
 /*Call this funtion with the ID-name for that element to increase the number within*/


  
   /*Call this funtion with the ID-name for that element to increase the number within*/

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y = 4) {
        function incNbr(){
            incEltNbr("nbr");
          }
          
          incEltNbr("nbr");
          function incNbr(){
            incEltNbr("nbr1");
          }
          
          incEltNbr("nbr1"); /*Call this funtion with the ID-name for that element to increase the number within*/
          
          function incNbr2(){
            incEltNbr2("nbr2");
          }
          incEltNbr2("nbr2"); /*Call this funtion with the ID-name for that element to increase the number within*/

        function incNbr(){
            incEltNbr("nbr3");
        }
        
        incEltNbr("nbr3");
    } else {
        function incNbr(){
            incEltNbr("nbr");
          }
          
          incEltNbr("nbr");
    }
    function incNbr(){
        incEltNbr("nbr1");
      }
      
      incEltNbr("nbr1"); /*Call this funtion with the ID-name for that element to increase the number within*/
      
      function incNbr2(){
        incEltNbr2("nbr2");
      }
      incEltNbr2("nbr2"); /*Call this funtion with the ID-name for that element to increase the number within*/

    function incNbr(){
        incEltNbr("nbr3");
    }
    
    incEltNbr("nbr3");
  });









  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 5890, 3000);
    counter("count2", 0, 478, 3000);
    counter("count3", 0, 78, 2800);
    counter("count", 0, 26, 1500)
   });
   