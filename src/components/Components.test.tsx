import TestRenderer from 'react-test-renderer';
import { ErrorComponent } from './ErrorComponent';
import { FoodSelection } from './FoodSelection';


test('foodSelection component loads', () => {
    const testRenderer = TestRenderer.create(<FoodSelection />)
    const testInstance = testRenderer.toTree();

    expect(testInstance?.nodeType == 'component').toBe(true);
})
