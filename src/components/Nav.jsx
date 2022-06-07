import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Nav({ libraryStatus, setLibraryStatus }) {
  const toggleLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <StyledNav>
      <div className='logo'>WAVES</div>
      <button className='toggle-library' onClick={toggleLibraryHandler}>
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
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .logo {
    font-size: 1.2rem;
  }

  .toggle-library {
    color: var(--clr-secondary);
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export default Nav;
