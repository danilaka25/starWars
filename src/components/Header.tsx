import React from 'react';
import {GenderType, useFanStore} from '$src/store/fanStore';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

const Header = () => {
  const {countByGender, removeAll} = useFanStore();

  return (
    <HeaderContainer>
      <GenderText>Male: {countByGender(GenderType.male)}</GenderText>
      <GenderText>Female: {countByGender(GenderType.female)}</GenderText>
      <GenderText>Others: {countByGender('others')}</GenderText>
      <ResetButton onPress={removeAll}>
        <ResetButtonText>Reset</ResetButtonText>
      </ResetButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View(({theme}) => ({
  width: '100%',
  height: 50,
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: theme.color.lightGray,
  borderBottomWidth: 1,
  borderBottomColor: theme.color.darkGray,
}));

const GenderText = styled.Text(({theme}) => ({
  fontSize: theme.fontSize.regular,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.darkGray,
}));

const ResetButton = styled(Pressable)(({theme}) => ({
  backgroundColor: theme.color.primary,
  padding: 7,
  borderRadius: 5,
}));

const ResetButtonText = styled.Text(({theme}) => ({
  color: theme.color.white,
  fontSize: theme.font,
  fontWeight: theme.fontWeight.regular,
}));

export default Header;
