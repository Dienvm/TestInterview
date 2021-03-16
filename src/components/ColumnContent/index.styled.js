import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  background: #f3f5f8;
  opacity: 0.8;
  border-radius: 6px;

  margin-top: 9px;
  padding: 10px;
`;

export const WorkoutContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-sizing: border-box;
  border-radius: 6px;

  padding: 5px 3px;
  margin-top: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuImage = styled.img`
  width: 11px;
  height: 3px;
  align-self: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

export const AddImage = styled.img`
  width: 12px;
  height: 12px;
`;
