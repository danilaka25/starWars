import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Loading} from '$src/components/Loading';

interface AdditionalDetailsProps {
  title: string;
  additionalList: string[];
  isLoading: boolean;
  isError: boolean;
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
  title,
  additionalList,
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Title>Error fetching data</Title>;
  }

  if (!additionalList || additionalList.length === 0) {
    return <Title>Not available</Title>;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <FlatList
        data={additionalList}
        renderItem={({item}) => <ItemText>{item}</ItemText>}
        keyExtractor={(item, index) => `${item}-${index}`}
        scrollEnabled={false}
      />
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
  padding: 10,
});

const Title = styled.Text(({theme}) => ({
  fontSize: theme.fontSize.bold,
  fontWeight: theme.fontWeight.bold,
  marginBottom: 10,
}));

const ItemText = styled.Text(({theme}) => ({
  fontSize: theme.fontSize.extralight,
  marginBottom: 5,
}));

export default AdditionalDetails;
