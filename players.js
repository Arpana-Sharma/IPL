var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);
var x = parseInt(page[0]);
if((page.charCodeAt(1)>47) && (page.charCodeAt(1)<58)){
   x = (parseInt(page[1]))+(10*x);
}
// console.log(x);
fetch("playerData.json")
.then(function(response){
   return response.json();
})
.then(function(players){
    let placeholder = document.querySelector("#info");
    let out = "";
    let player = players[x];
    out += `
       <ul>
          <p>Name: ${player.Name}</p>
          <p>Team: ${player.Team}</p>
          <p>Type: ${player.Type}</p>
          <p>Born: ${player.Born}</p>
          <p>Age: ${player.Age}</p>
          <p>National Side: ${player.NationalSide}</p>
          <p>Batting Style: ${player.BattingStyle}</p>
          <p>Bowling: ${player.Bowling}</p>
          <p>Match Played: ${player.MatchPlayed}</p>
          <p>Innings Batted: ${player.InningsBatted}</p>
          <p>NotOuts: ${player.NotOuts}</p>
          <p>Runs Scored: ${player.RunsScored}</p>
          <p>Highest Inning Score: ${player.HighestInnScore}</p>
          <p>Hundreds: ${player.hundreds}</p>
          <p>Fiftys: ${player.fiftys}</p>
          <p>Fours: ${player.fours}</p>
          <p>Sixes: ${player.sixes}</p>
          <p>Batting Average: ${player.BattingAVG}</p>
          <p>Batting SR: ${player.BattingSR}</p>
          <p>Catches Taken: ${player.CatchesTaken}</p>
          <p>Stumpings Made: ${player.StumpingsMade}</p>
          <p>Ducks: ${player.Ducks}</p>
          <p>Innings Bowled: ${player.InningsBowled}</p>
          <p>Overs: ${player.Overs}</p>
          <p>Maidens: ${player.Maidens}</p>
          <p>Runs Conceded: ${player.RunsConceded}</p>
          <p>Wickets: ${player.Wickets}</p>
          <p>Best: ${player.Best}</p>
          <p>Threes: ${player.threes}</p>
          <p>Fives: ${player.fives}</p>
          <p>Bowling AVG: ${player.BowlingAVG}</p>
          <p>Economy Rate: ${player.EconomyRate}</p>
          <p>Bowling SR: ${player.BowlingSR}</p>
          <p>Matched Played: ${player.MatchedPlayed}</p>
       </ul>
    `;
 
   placeholder.innerHTML = out;
});