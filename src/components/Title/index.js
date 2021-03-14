import { TitleStyled } from './index.styled';

const Title = ({ title, isToday }) => (
  <TitleStyled isToday={isToday}>{title}</TitleStyled>
);

export default Title;
