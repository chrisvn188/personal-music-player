import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <StyledNav>
      <div className='logo'>WAVES</div>
      <button className='toggle-library'>
        <FontAwesomeIcon icon={faMusic} size='2x' />
      </button>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 6.5rem;
  background-color: var(--clr-primary-2);
  border-radius: 0 0 2.5rem 2.5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.2rem;
  }

  .toggle-library {
    color: var(--clr-secondary);
    font-size: 0.8rem;
  }
`;

export default Nav;
