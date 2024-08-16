import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {People} from '$src/api/types';
import LikeToggle from '$src/components/LikeToggle';
import {GenderType} from '$src/store/fanStore';
import styled from 'styled-components/native';
import {NavigationProp} from '$src/navigation/types';

interface PersonItemProps {
  item: People;
}

const PersonListItem: React.FC<PersonItemProps> = ({item}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Item>
      <Pressable
        onPress={() => navigation.navigate('PersonDetail', {person: item})}>
        <NameText>{item.name}</NameText>
        <GenderText>{item.gender}</GenderText>
      </Pressable>
      <LikeToggle name={item.name} gender={item.gender as GenderType} />
    </Item>
  );
};

const Item = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  marginHorizontal: 10,
  padding: 15,
});

const NameText = styled.Text(({theme}) => ({
  fontSize: theme.fontSize.bold,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.darkGray,
}));

const GenderText = styled.Text(({theme}) => ({
  fontSize: theme.fontSize.regular,
  fontWeight: theme.fontWeight.regular,
  color: theme.color.darkGray,
}));

export default PersonListItem;
