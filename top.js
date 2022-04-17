var x = 1;
fetch("playerData.json")
.then(function(response){
   return response.json();
})
.then(function(players){
   let placeholder = document.querySelector("#top-output");
   let out = "";
   for(let player of players){
      out += `
         <tr>
            <td>${x}</td>
            <td>${player.Name}</td>
            <td>${player.MatchPlayed}</td>
            <td>${player.InningsBatted}</td>
            <td>${player.NotOuts}</td>
            <td>${player.RunsScored}</td>
            <td>${player.HighestInnScore}</td>
            <td>${player.BattingAVG}</td>
            <td>${player.BattingSR}</td>
            <td>${player.hundreds}</td>
            <td>${player.fiftys}</td>
            <td>${player.fours}</td>
            <td>${player.sixes}</td>
         </tr>
      `;
      x = x + 1;
   }
 
   placeholder.innerHTML = out;
});