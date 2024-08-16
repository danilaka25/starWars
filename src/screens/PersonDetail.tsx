import React from 'react';
import styled from 'styled-components/native';
import {useFilmNames, useStarshipNames} from '$src/api/api';
import AdditionalDetails from '$src/components/AdditionalDetails';
import LikeToggle from '$src/components/LikeToggle';
import {PersonDetailScreenProps} from '$src/navigation/types';

const PersonDetail: React.FC<PersonDetailScreenProps> = ({route}) => {
  const {person} = route.params;

  const {
    data: filmNames,
    isLoading: filmsLoading,
    isError: filmsError,
  } = useFilmNames(person.films);

  const {
    data: starshipNames,
    isLoading: starshipsLoading,
    isError: starshipsError,
  } = useStarshipNames(person.starships);

  return (
    <Container>
      <Header>
        <NameText>{person.name}</NameText>
        <LikeToggle name={person.name} gender={person.gender}></LikeToggle>
      </Header>
      <DetailLine>
        <DetailText>Height: {person.height}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailText>Mass: {person.mass}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailText>Hair Color: {person.hair_color}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailText>Skin Color: {person.skin_color}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailText>Eye Color: {person.eye_color}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailText>Birth Year: {person.birth_year}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailText>Gender: {person.gender}</DetailText>
      </DetailLine>

      <AdditionalRow>
        {filmNames ? (
          <AdditionalDetails
            title="Films"
            additionalList={filmNames}
            isLoading={filmsLoading}
            isError={filmsError}
          />
        ) : null}
        {starshipNames ? (
          <AdditionalDetails
            title="Starships"
            additionalList={starshipNames}
            isLoading={starshipsLoading}
            isError={starshipsError}
          />
        ) : null}
      </AdditionalRow>
    </Container>
  );
};

const Header = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Container = styled.ScrollView(({theme}) => ({
  flex: 1,
  padding: 20,
  backgroundColor: theme.color.lightGray,
}));

const DetailLine = styled.View(({theme}) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.color.darkGray,
  paddingTop: 20,
  paddingBottom: 20,
}));

const NameText = styled.Text(({theme}) => ({
  fontSize: theme.fontSize.bold,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.darkGray,
}));

const DetailText = styled.Text(({theme}) => ({
  fontSize: theme.fontSize.regular,
  color: theme.color.darkGray,
}));

const AdditionalRow = styled.View(({theme}) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: theme.color.white,
  marginTop: 20,
}));

export default PersonDetail;
