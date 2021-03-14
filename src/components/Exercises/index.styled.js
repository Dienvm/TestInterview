import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  padding: 8px;
  margin-top: 5px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: right;

  padding-left: 24px;
`;

export const SubTitle = styled.p`
  font-weight: bold;
  font-size: 10px;
  line-height: 14px;

  color: #919cad;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContent = styled.div`
  flex: 1;
  font-size: 10px;
  line-height: 14px;
  text-align: right;

  color: #95a6b7;
`;
