const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "N H L D B" }).render();

  console.log(logoText);

  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Players",
          value: "VIEW_PLAYERS"
        },
        {
          name: "View All Players By Position",
          value: "VIEW_PLAYERS_BY_POSITION"
        },
        {
          name: "View All Players By Team",
          value: "VIEW_PLAYERS_BY_TEAM"
        },
        {
          name: "View All Players By Statistical Criteria",
          value: "VIEW_PLAYERS_BY_STAT"
        },
        {
          name: "View Total Utilized Budget By Team",
          value: "VIEW_UTILIZED_BUDGET_BY_Team"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    // Call the appropriate function depending on what the user chose
    switch (choice) {
      case "VIEW_PLAYERS":
        viewPlayers();
        break;
      case "VIEW_PLAYERS_BY_POSITION":
        viewPlayersByPosition();
        break;
      case "VIEW_PLAYERS_BY_TEAM":
        viewPlayersByTeam();
        break;
      case "VIEW_PLAYERS_BY_STAT":
        viewPlayersByStat();
        break;
      case "VIEW_UTILIZED_BUDGET_BY_Team":
        viewUtilizedBudgetByTeam();
        break;
      default:
        quit();
    }
  }
  )
}

// View all Players
function viewPlayers() {
  db.findAllPlayers()
    .then(([rows]) => {
      let Players = rows;
      console.log("\n");
      console.table(Players);
    })
    .then(() => loadMainPrompts());
}

// View all Players that belong to a Team
function viewPlayersByTeam() {
  db.findAllTeams()
    .then(([rows]) => {
      let Teams = rows;
      console.log(Teams);
      const TeamChoices = Teams.map(({ Team }) => ({
        value: Team
      }));

      console.log(TeamChoices)

      prompt([
        {
          type: "list",
          name: "TeamName",
          message: "Which Team would you like to see Players for?",
          choices: TeamChoices
        }
      ])
        .then(res => db.findAllPlayersByTeam(res.TeamName))
        .then(([rows]) => {
          let Players = rows;
          console.log("\n");
          console.table(Players);
        })
        .then(() => loadMainPrompts())
    });
}

// View all Players By Position
function viewPlayersByPosition() {
  db.findAllPositions()
    .then(([rows]) => {
      let Positions = rows;
      const PositionChoices = Positions.map(({ Position }) => ({
        value: Position
      }));

      prompt([
        {
          type: "list",
          name: "PositionId",
          message: "Which Position would you like to view?",
          choices: PositionChoices
        }
      ])
        .then(res => db.findAllPlayersByPosition(res.PositionId))
        .then(([rows]) => {
          let Players = rows;
          console.log("\n");
          if (Players.length === 0) {
            console.log("The selected position has no players");
          } else {
            console.table(Players);
          }
        })
        .then(() => loadMainPrompts())
    });
}

// View all Players that meet a certain statistical criteria
function viewPlayersByStat() {
  db.findAllPlayers()
    // .then(([fields]) => {
    //   let Stats = fields;
    //   console.log(Stats);
    //   const StatChoices = Stats.map(({ Stat }) => ({
    //     value: Stat
    //   }));

    //   console.log(StatChoices)

      prompt([
        {
          type: "list",
          name: "StatName",
          message: "Which Statistic would you like to filter on?",
          choices: ["CFP","FFP","SFP","GFP","SCFP","HDCFP","TOI"]
        },
        {
          type: "list",
          name: "MatchType",
          message: "What MatchType would you like to use?",
          choices: ["=",">","<"]
        },
        {
          type: "input",
          name: "StatValue",
          message: "Please enter a number below that you would like the statistic to be greater than, equal to, or less than."
        }
      ])
        .then(res => db.findAllPlayersByStat(res.StatName, res.MatchType, res.StatValue))
        //console.log(res.StatName, res.MatchType, res.StatValue)
        .then(([rows]) => {
          let Players = rows;
          console.log("\n");
          if (Players.length === 0) {
            console.log("There are no players that meet this criteria");
          } else {
            console.table(Players);
          }
        })
        .then(() => loadMainPrompts())
    //});
}

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
