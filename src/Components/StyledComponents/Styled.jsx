import styled, { keyframes } from "styled-components";


// const Animation_ = keyframes`
// from {
//     opacity: 0.5;
//   transform: translateX(-400);
// }
// to{
//     opacity: 1;
//   transform: translateX(0);
    
// }
// `;

// export const Animation_Wrapper = styled.div`

// height: 100%;
// width: 100%;
// animation: ${Animation_} 3s forwards ;

// `;
const Animation = keyframes`   // 
0% {
  transform: translateY(50px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`

export const AnimatedCard = styled.h1`
animation: ${Animation} 0.8s ease-out
`

const AnimationGro = keyframes`   // 
0% {
  transform: translateX(-50px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`

export const AnimatedWrapper = styled.h1`
animation: ${AnimationGro} 0.8s ease-out
`

const AnimationLeft = keyframes`   // 
0% {
  transform: translateX(50px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`

export const AnimatedLeftWrapper = styled.div`
animation: ${AnimationLeft} 0.8s ease-out
`
