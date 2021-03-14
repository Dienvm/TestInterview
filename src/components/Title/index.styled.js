import styled from 'styled-components';

export const TitleStyled = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;

  color: ${(props) => (props.isToday ? '#5A57CB' : '#6a7988')};
`;
