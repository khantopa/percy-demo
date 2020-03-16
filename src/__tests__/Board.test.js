import Board from '../components/board/Board';
import Player from '../components/player/Player';


let wrapper, props, state, runButton, player1, player2, winner;

beforeEach(() => {
  state = {
    mode: "Player vs Computer"
  }
  props = { state }
  wrapper = shallow(<Board location={props} />);
});

describe('<Board>', () => {

  it('should <Board> defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should <Board> defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders <Board> without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render <Player>', () => {
    expect(wrapper.find(Player)).toHaveLength(2);
  });

  it('should call fetch when mounted', () => {
    expect(wrapper.instance().UNSAFE_componentWillMount());
  });

});


describe('Computer vs Computer', () => {

  it('Random vs Random', () => {
    jest.useFakeTimers();
    state.mode = 'Computer vs Computer';
    wrapper = shallow(<Board location={props} />)
    wrapper.instance().UNSAFE_componentWillMount();
    runButton = wrapper.find('button.play_run_button');
    runButton.simulate('click');
    jest.advanceTimersByTime(2000);
    player1 = wrapper.state('player1');
    player2 = wrapper.state('player2');
    winner = wrapper.state('winner');
    if (player1.symbol === player2.symbol) {
      expect(winner).toBe('Draw !')
    } else if ((player1.symbol === "rock" && player2.symbol === "scissors") ||
      (player1.symbol === "paper" && player2.symbol === "rock") ||
      (player1.symbol === "scissors" && player2.symbol === "paper")) {
        expect(winner).toBe(`${player1.name} wins !`);
        expect(player1.score).toBe(1)
    } else {
      expect(winner).toBe(`${player2.name} wins !`);
      expect(player2.score).toBe(1)
    }
  });

});

describe('Player vs Computer', () => {

  it('Rock vs Random', () => {
    jest.useFakeTimers();
    state.mode = 'Player vs Computer';
    wrapper.instance().UNSAFE_componentWillMount();
    runButton = wrapper.find('button.play_button_item').first();
    runButton.simulate('click');
    jest.advanceTimersByTime(2000);
    player1 = wrapper.state('player1');
    player2 = wrapper.state('player2');
    winner = wrapper.state('winner');
    if (player1.symbol === player2.symbol) {
      expect(winner).toBe('Draw !')
    } else if (player2.symbol === "scissors") {
        expect(winner).toBe(`${player1.name} wins !`);
        expect(player1.score).toBe(1)
    } else {
      expect(winner).toBe(`${player2.name} wins !`);
      expect(player2.score).toBe(1)
    } 
  });

  it('Paper vs Random', () => {
    jest.useFakeTimers();
    state.mode = 'Player vs Computer';
    wrapper.instance().UNSAFE_componentWillMount();
    runButton = wrapper.find('button.play_button_item').at(1);
    runButton.simulate('click');
    jest.advanceTimersByTime(2000);
    player1 = wrapper.state('player1');
    player2 = wrapper.state('player2');
    winner = wrapper.state('winner');
    if (player1.symbol === player2.symbol) {
      expect(winner).toBe('Draw !')
    } else if (player2.symbol === "rock") {
        expect(winner).toBe(`${player1.name} wins !`);
        expect(player1.score).toBe(1)
    } else {
      expect(winner).toBe(`${player2.name} wins !`);
      expect(player2.score).toBe(1)
    } 
  });

  it('Scissor vs Random', () => {
    jest.useFakeTimers();
    state.mode = 'Player vs Computer';
    wrapper.instance().UNSAFE_componentWillMount();
    runButton = wrapper.find('button.play_button_item').at(2);
    runButton.simulate('click');
    jest.advanceTimersByTime(2000);
    player1 = wrapper.state('player1');
    player2 = wrapper.state('player2');
    winner = wrapper.state('winner');
    if (player1.symbol === player2.symbol) {
      expect(winner).toBe('Draw !')
    } else if (player2.symbol === "paper") {
        expect(winner).toBe(`${player1.name} wins !`);
        expect(player1.score).toBe(1)
    } else {
      expect(winner).toBe(`${player2.name} wins !`);
      expect(player2.score).toBe(1)
    } 
  });

});

