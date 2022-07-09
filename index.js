import React from 'react'
import * as S from './styled'

const profile = ()  => {
  return (
  <S.Wrapper>
      <img src="https://avatars.githubusercontent.com/u/74996628?v=4" alt='picture of user' />
      <h1>Arion94</h1>
      <h3>usernanme</h3>
      <span>arion nagnibeda</span>
      <S.Wrapper></S.Wrapper>
      <h4>Followers</h4>
      <span>1</span>
      <h4>starreds</h4>
      <span>1</span>
          <h4>Following</h4>
          <span>1</span>
      </S.Wrapper>
      );
};

export default profile