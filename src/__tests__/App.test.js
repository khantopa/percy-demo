import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Mode from '../components/mode/Mode';
import Board from '../components/board/Board';

let wrapper, router;

beforeEach(() => {
  wrapper = shallow(<App/> );
  router = wrapper.find(Router);
});

describe('App', () => {

  it('should <App> defined', () => {
    expect(wrapper).toBeDefined();
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should have Router ', () => {
    expect(wrapper.find(Router)).toHaveLength(1);
  });
  
  it('Should have Router ', () => {
    expect(router.find(Route)).toHaveLength(2);
  });

  it('Should renders correct routes', () => {
    const pathMap = router.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});  
    expect(pathMap['/']).toBe(Mode);
    expect(pathMap['/play']).toBe(Board);
  });

});

