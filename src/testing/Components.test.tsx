import TestRenderer from 'react-test-renderer';
import { ErrorComponent } from '../components/ErrorComponent';
import { FoodSelection } from '../components/FoodSelection';


test('foodSelection component loads', () => {
    const testRenderer = TestRenderer.create(<FoodSelection />)
    const testInstance = testRenderer.toTree();

    expect(testInstance?.nodeType == 'component').toBe(true);
})

test('errorComponent calls Logger.log', () => {
})
