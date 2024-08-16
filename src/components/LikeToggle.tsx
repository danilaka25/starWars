import {Gender, useFanStore} from '$src/store/fanStore';
import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';

const ACTIVE_IMAGE = require('../../assets/icons/active.png');
const INACTIVE_IMAGE = require('../../assets/icons/inactive.png');

interface LikeToggleProps {
  name: string;
  gender: Gender;
}

const LikeToggle: React.FC<LikeToggleProps> = React.memo(({name, gender}) => {
  const wasNameLiked = useFanStore(
    useCallback(state => state.wasNameLiked(name), [name]),
  );
  const addFan = useFanStore(state => state.addFan);
  const removeFan = useFanStore(state => state.removeFan);

  const [isActive, setIsActive] = useState(wasNameLiked);

  useEffect(() => {
    setIsActive(wasNameLiked);
  }, [wasNameLiked]);

  const handlePress = () => {
    if (isActive) {
      removeFan(name);
    } else {
      addFan({name, gender});
    }
    setIsActive(!isActive);
  };

  return (
    <Button onPress={handlePress}>
      <Img source={isActive ? ACTIVE_IMAGE : INACTIVE_IMAGE} />
    </Button>
  );
});

const Button = styled.Pressable({
  alignItems: 'center',
  justifyContent: 'center',
});

const Img = styled.Image({
  width: 30,
  height: 30,
});

export default LikeToggle;
