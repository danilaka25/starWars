import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

export const Loading = () => {
  const theme = useTheme();

  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={theme.color.primary} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
});
