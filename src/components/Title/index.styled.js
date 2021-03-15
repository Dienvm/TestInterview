import styled from "styled-components";
import { colors } from "../../themes/colors";

export const TextStyled = styled.p`
  color: ${(props) => (props.isActive ? colors.primary : "#6a7988")};
`;

export const TitleStyled = styled(TextStyled)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
`;

export const SubTitleStyled = styled(TextStyled)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  line-height: 15px;
`;

export const WorkoutTitle = styled(TextStyled)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  line-height: 15px;

  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
