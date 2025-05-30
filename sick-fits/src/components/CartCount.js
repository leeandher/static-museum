import styled from "styled-components";

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }
  /* Initial state of the entered Dot */
  .count-enter {
    transform: scale(4) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(4) rotateX(0.5turn);
  }
`;

const Dot = styled.div`
  background: ${({ theme }) => theme.red};
  color: white;
  padding: 0.5rem;
  transform: skew(-16deg);
  line-height: 2rem;
  min-width: 3rem;
  margin-left: 1rem;
  font-weight: 100;
  /* Ensure that all characters are monospaced */
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  p {
    margin: 0;
    transform: skew(16deg);
  }
`;

export default function CartCount({ count }) {
  return (
    <AnimationStyles>
      {/* <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className="count"
          classNames="count"
          key={count}
          timeout={{ enter: 400, exit: 400 }}
        > */}
      <Dot>
        <p>{count}</p>
      </Dot>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </AnimationStyles>
  );
}
