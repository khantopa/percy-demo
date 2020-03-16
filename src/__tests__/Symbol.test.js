import Symbol from '../components/symbol/Symbol';

let wrapper, props;


beforeEach(() => {
  props = {} ; 
  wrapper =shallow(<Symbol player = { props } />);
});

describe('<Symbol>', () => {
  
  it('should <Board> defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders <Symbol> without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

});
