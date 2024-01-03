import styled from "styled-components";

export default function DisplayData({ cityName, temp, feelsLike, perType, windSpd, snow }) {
  return (
    <Container>
      <Title>Weather Information</Title>
      <DataItem>
        <Label>City Name:</Label>
        <Value>{cityName}</Value>
      </DataItem>
      <DataItem>
        <Label>Temperature:</Label>
        <Value>{temp}</Value>
      </DataItem>
      <DataItem>
        <Label>Feels Like:</Label>
        <Value>{feelsLike}</Value>
      </DataItem>
      {perType && (
        <DataItem>
          <Label>Precipitation:</Label>
          <Value>{perType}</Value>
        </DataItem>
      )}
      <DataItem>
        <Label>Wind Speed:</Label>
        <Value>{windSpd}</Value>
      </DataItem>
      {snow && (
        <DataItem>
          <Label>Snow:</Label>
          <Value>{snow}</Value>
        </DataItem>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 300px;
  height: 220px;
  border: 1px solid #ccc;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f7f7f7;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: underline;
`;

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Value = styled.p`
  font-size: 15px;
  color: #333;
`;
