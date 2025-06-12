import React from 'react'

const matches = [
  {
  "league": "Premier League",
  "season": "2024/2025",
  "teams": [
    {
      "id": 1,
      "name": "Manchester City",
      "stadium": "Etihad Stadium",
      "coach": "Pep Guardiola",
      "players": [
        {
          "id": 101,
          "name": "Erling Haaland",
          "position": "Forward",
          "age": 24,
          "nationality": "Norway",
          "goals": 28
        },
        {
          "id": 102,
          "name": "Kevin De Bruyne",
          "position": "Midfielder",
          "age": 33,
          "nationality": "Belgium",
          "assists": 15
        }
      ]
    },
    {
      "id": 2,
      "name": "Arsenal",
      "stadium": "Emirates Stadium",
      "coach": "Mikel Arteta",
      "players": [
        {
          "id": 201,
          "name": "Bukayo Saka",
          "position": "Forward",
          "age": 23,
          "nationality": "England",
          "goals": 14
        },
        {
          "id": 202,
          "name": "Declan Rice",
          "position": "Midfielder",
          "age": 26,
          "nationality": "England",
          "tackles": 85
        }
      ]
    }
  ],
  "recentMatches": [
    {
      "matchId": 1,
      "date": "2025-04-21",
      "homeTeam": "Manchester City",
      "awayTeam": "Arsenal",
      "score": "2-1",
      "scorers": ["Haaland", "De Bruyne", "Saka"]
    },
    {
      "matchId": 2,
      "date": "2025-04-28",
      "homeTeam": "Arsenal",
      "awayTeam": "Liverpool",
      "score": "1-1",
      "scorers": ["Saka", "Salah"]
    }
  ]
}

]
const Dashboard = () => {
  return (
    <div style={{background: "red"}}>
      <ul>
        { matches.map((match) => (
          <li key={match.id}>
            <h3>{ league.id }</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard