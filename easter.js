let score = 0;
      
      function foundEgg(event){
        console.log("clicked");
        let egg = $(event.currentTarget);
        egg.fadeOut(250);
        score = score + 1;
        $('#score').text(score);
        
        if(score >= 4){
          alert('You found all the eggs!');   
        }
      }
      $('.egg').click(foundEgg);