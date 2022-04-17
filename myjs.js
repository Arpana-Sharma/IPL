fetch("teamData.json")
.then(function(response){
   return response.json();
})
.then(function(teams){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let team of teams){
      out += `
         <tr>
            <td>${team.Sno}</td>
            <td> <img src='${team.Logo}'> </td>
            <td>${team.Team}</td>
            <td>${team.Pld}</td>
            <td>${team.Won}</td>
            <td>${team.Lost}</td>
            <td>${team.Tied}</td>
            <td>${team.NR}</td>
            <td>${team.NetRR}</td>
            <td>${team.For}</td>
            <td>${team.Against}</td>
            <td>${team.Pts}</td>
            <td>${team.Form}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});