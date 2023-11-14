// Return a list of cards
const getCards = () => {
   return candidates.map(candidate => {
      return `
      <div class="card">
         <img class="card-image" src="../images/${candidate.id} 1.jfif">
         <div class="card-info">
               <div class="candidate-votes">
                  <span class="votes-number-${candidate.id}">0</span>
                  <span class="votes-text">${candidate.votes}</span>
               </div>
               <div class="line"></div>
               <div class="candidate-info">
                  <span class="candidate name">${candidate.name}</span>
                  <span class="party">${candidate.party}</span>
               </div>
         </div>
         <button class="card-btn btn-${candidate.id}">VOTE</button>
      </div>
      `;
   });
};
