import { Link } from 'react-router-dom';
import Mode from '../components/mode/Mode';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Mode/> );
});

describe('<Mode>', () => {
  
  it('should <Board> defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders <Mode> without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  
  it('renders two <Link>', () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });
  
});
