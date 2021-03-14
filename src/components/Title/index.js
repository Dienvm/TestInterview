import { TitleStyled } from './index.styled';

const Title = ({ title, isActive }) => (
  <TitleStyled isActive={isActive}>{title}</TitleStyled>
);

export default Title;
