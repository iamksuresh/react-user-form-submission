import { render, fireEvent, screen } from './testUtils';
import User from '../../../components/user';

describe('Test User Container', () => {
  it('Should render User container', async () => {
    const { container } = await render(<User />, {});

    const containerEle = container.querySelector('#userContainer');
    expect(containerEle).toBeInTheDocument();
  });
});
