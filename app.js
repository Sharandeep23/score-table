const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");

  for (let game of games) {
    //   Creating individual lists
    const li = document.createElement("li");

    //   Inserting text inside it
    li.innerHTML = getScoreLine(game);

    // Getting the class name according to the target team
    const className = getClass(game, targetTeam);

    //   Adding win or lose class
    li.classList.add(className);

    //   Attaching list to the ul
    ulParent.append(li);
  }

  return ulParent;
};

const getScoreLine = ({ awayTeam, homeTeam }) => {
  const teamNames = `${awayTeam.team} @ ${homeTeam.team}`;

  let scoreLine;
  //   want to bold the winning score
  if (awayTeam.isWinner) {
    scoreLine = `<b>${awayTeam.points}</b>-${homeTeam.points}`;
  } else {
    scoreLine = `${awayTeam.points}-<b>${homeTeam.points}</b>`;
  }

  return `${teamNames} ${scoreLine}`;
};

const getClass = ({ homeTeam, awayTeam }, targetTeam) => {
  //   We need to filter out target Team First ...so that we can know our teams conditions
  const target = awayTeam.team === targetTeam ? awayTeam : homeTeam;
  return target.isWinner ? "win" : "lose";
};

//Select the 2 sections to append to (from index.html)
const gsSection = document.querySelector("#gs");
const houstonSection = document.querySelector("#hr");

// Make the 2 charts:
const gsChart = makeChart(warriorsGames, "Golden State");
const hrChart = makeChart(warriorsGames, "Houston");

//Append them!
gsSection.append(gsChart);
houstonSection.append(hrChart);
