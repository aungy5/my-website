const connection = require("./connection");

class DB {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }

  // Find all Players, ORDER BY whatever the user chooses
  findAllPlayers() {
    return this.connection.promise().query(
      "SELECT playerID, Player, Position, Team, CFP, FFP, SFP, GFP, SCFP, HDCFP, TOI FROM players ORDER BY HDCFP;"
    );
  }

  // Find all teams so that we can use them in our query
  findAllTeams() {
    return this.connection.promise().query(
      "SELECT DISTINCT Team from players;"
    );
  }

    // Find all teams so that we can use them in our query
    findAllPositions() {
      return this.connection.promise().query(
        "SELECT DISTINCT Position from players;"
      );
    }

  // Find all Players in a given Team, join with roles to display role titles
  findAllPlayersByTeam(TeamName) {
    return this.connection.promise().query(
      "SELECT playerID, Player, Position, Team, CFP, FFP, SFP, GFP, SCFP, HDCFP, TOI FROM players WHERE Team = ? ORDER BY HDCFP;",
      TeamName
    );
  }

  // Find all Players by Position
  findAllPlayersByPosition(PositionId) {
    return this.connection.promise().query(
      "SELECT playerID, Player, Position, Team, CFP, FFP, SFP, GFP, SCFP, HDCFP, TOI FROM players WHERE Position = ? ORDER BY HDCFP;",
      PositionId
    );
  }

  // Find all Players by Statistic
  findAllPlayersByStat(StatName, MatchType, StatValue) 
  {
    console.log("CRITERIA:", StatName, MatchType, StatValue)
    return this.connection.promise().query(
      "SELECT playerID, Player, Position, Team, CFP, FFP, SFP, GFP, SCFP, HDCFP, TOI FROM players WHERE ? ORDER BY HDCFP;",
      StatName, MatchType, StatValue
    );
  }
}

module.exports = new DB(connection);
