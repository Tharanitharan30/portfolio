import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 614 390" height={390} width={614}>
        <g id="Frame">
          <g id="box-figma">
            <text
              id="text"
              x="307"
              y="190"
              fill="#F9F9F9"
              fontSize="90"
              fontFamily="Arial, sans-serif"
              fontWeight="600"
              textAnchor="middle"
              letterSpacing="3"

            >
              <tspan x="307" dy="-20">
                Fullstack
              </tspan>
              <tspan x="307" dy="84">
                developer
              </tspan>
            </text>
            <g id="box">
              <path strokeWidth={2} stroke="#2563EB" fillOpacity="0.05" fill="#2563EB" d="M587 20H28V306H587V20Z" id="figny9-box" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M33 15H23V25H33V15Z" id="figny9-adjust-1" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M33 301H23V311H33V301Z" id="figny9-adjust-3" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M592 301H582V311H592V301Z" id="figny9-adjust-4" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M592 15H582V25H592V15Z" id="figny9-adjust-2" />
            </g>
            <g id="cursor">
              <path strokeWidth={2} stroke="white" fill="#2563EB" d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z" id="Vector 273" />
              <path fill="#2563EB" d="M587 343H469.932V376H587V343Z" id="Rectangle 786" />
              <text x="528" y="364" fill="white" fontSize="20" fontFamily="Arial, sans-serif" fontWeight="500" textAnchor="middle">
                tharani
              </text>
            </g>
          </g>
        </g>
      </svg>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 614px;
  margin-left: auto;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  #cursor,
  #box,
  #text {
    cursor: pointer;
  }
  #cursor {
    overflow: visible;
    transform: translate3d(300px, 0, 0) scale(1);
    transform-origin: center center;
    transform-box: fill-box;
    animation: cursor 5s ease infinite alternate;
  }
  @keyframes cursor {
    0% {
      opacity: 0;
      transform: translate3d(300px, 0, 0) scale(1);
    }
    30% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
    60% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }

    /* clique */
    65% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(0.95);
    }
    70% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }

    100% {
      opacity: 1;
      transform: translate3d(-300px, -50px, 0) scale(1);
    }
  }

  #box {
    opacity: 0;
    animation: box 5s ease infinite alternate;
  }
  @keyframes box {
    0%,
    60% {
      opacity: 0;
    }
    65%,
    100% {
      opacity: 1;
    }
  }
  #text {
  }`;

export default Card;
