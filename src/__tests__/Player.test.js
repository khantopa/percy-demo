import Player from '../components/Player';
import Symbol from '../components/Symbol';

let wrapper, props;


beforeEach(() => {
  props = {} ; 
  wrapper =shallow(<Player player = { props } />);
});

describe('<Player>', () => {

  it('should <Board> defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders <Player> without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('render <Symbol> without crashing', () => {
    expect(wrapper.find(Symbol)).toHaveLength(1);
  });

});
