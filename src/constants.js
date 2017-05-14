export const roles = {
  // Good team
  'Merlin': {
    knows: ['Morgana', 'Assassin', 'Minion of Mordred'],
    max_count: 1
  },
  'Percival': {
    knows: ['Merlin', 'Morgana'],
    max_count: 1
  },
  'Loyal Servant of Arthur': {
    knows: []
    max_count: 5
  }

  // Evil team
  'Mordred': {
    knows: ['Morgana', 'Assassin', 'Minion of Mordred'],
    max_count: 1
  }
  'Morgana': {
    knows: ['Mordred', 'Assassin', 'Minion of Mordred'],
    max_count: 1
  }
  'Assassin': {
    knows: ['Mordred', 'Morgana', 'Minion of Mordred'],
    max_count: 1
  }
  'Minion of Mordred': {
    knows: ['Mordred', 'Morgana', 'Assassin', 'Minion of Mordred'],
    max_count: 3
  }
  'Oberon': {
    knows: [],
    max_count: 1
  }
};
