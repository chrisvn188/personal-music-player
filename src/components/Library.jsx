import styled from 'styled-components';

function Library({ libraryStatus }) {
  return (
    <StyledLibrary className={libraryStatus ? 'active' : ''}>
      <h3>Library</h3>
    </StyledLibrary>
  );
}

const StyledLibrary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  padding: 8rem 1.5rem 1.5rem 1.5rem;
  width: 100vw;
  height: 100vh;
  background-color: var(--clr-primary-3);
  transform: translateX(-100%);
  transition: all 0.3s ease-out;
  &.active {
    transform: translateX(0);
  }
`;

export default Library;
