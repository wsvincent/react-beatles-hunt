import React, { Component } from 'react';
import './App.css';


function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
}

const members = [
  {
    id: 1,
    name: 'Paul McCartney',
    description: 'The cute one',
    votes: generateVoteCount(),
    imageURL: 'images/mccartney.png',
    instrument: 'bass',
  },
  {
    id: 2,
    name: 'John Lennon',
    description: 'The smart one',
    votes: generateVoteCount(),
    imageURL: 'images/lennon.jpg',
    instrument: 'rhythm guitar',
  },
  {
    id: 3,
    name: 'George Harrison',
    description: 'The quiet one',
    votes: generateVoteCount(),
    imageURL: 'images/harrison.jpg',
    instrument: 'lead guitar',
  },
  {
    id: 4,
    name: 'Ringo Starr',
    description: 'The sad one',
    votes: generateVoteCount(),
    imageURL: 'images/starr.png',
    instrument: 'drums',
  },
];

class Member extends Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className='member col-3'>
        <div className='image'>
          <img src={this.props.imageURL} alt={'picture of ' + this.props.name}/>
        </div>
        <div className='content'>
          <div className='header'>
            <span className='icon'>
              <a onClick={this.handleUpVote}>
                <i class="fas fa-sort-up fa-2x"></i>
              </a>
            </span>
            <span class='votes'>{this.props.votes}</span>
          </div>
          <div className='info'>
            <p>{this.props.name}</p>
            <p className='description'>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  state = {
    members: [],
  }

  handleMemberUpVote = (memberId) => {
    const nextMembers = this.state.members.map((member) => {
      if (member.id === memberId) {
        return Object.assign({}, member, {
          votes: member.votes + 1,
        });
      } else {
        return member;
      }
    });
    this.setState({
      members: nextMembers,
    });
  }

  componentDidMount() {
    this.setState({ members: members });
  }

  render() {
    const members = this.state.members.sort((a, b) => (
      b.votes - a.votes
    ));
    const memberComponents = members.map((member) => (
      <Member
        key={'member-' + member.id}
        id={member.id}
        name={member.name}
        description={member.description}
        votes={member.votes}
        imageURL={member.imageURL}
        instrument={member.instrument}
        onVote={this.handleMemberUpVote}
      />
    ));
    return (
      <div className="App">
        <h1>Beatles Hunt</h1>
        <p>Vote on your favorite Beatle!</p>
        <hr />
        <div className='container'>
          <div class='row'>
            {memberComponents}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
