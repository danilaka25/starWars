import React from 'react';
import {Text, FlatList} from 'react-native';
import {usePeopleInfiniteQuery} from '$src/api/api';
import {People} from '$src/api/types';
import Header from '$src/components/Header';
import styled from 'styled-components/native';
import {Loading} from '$src/components/Loading';
import PersonListItem from '$src/components/PersonListItem';

const PersonList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = usePeopleInfiniteQuery();

  const peoples =
    data?.pages
      .map(page => page.results)
      .flat()
      .flat() ?? [];

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return <Loading />;
  };

  if (isError) {
    return <Text>Error !!!</Text>;
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={peoples}
          renderItem={({item}) => <PersonListItem item={item} />}
          keyExtractor={(item: People) => item.name}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={Header}
          stickyHeaderIndices={[0]}
        />
      )}
    </Container>
  );
};

const Container = styled.View(({theme}) => ({
  backgroundColor: theme.color.lightGray,
  flex: 1,
}));

export default PersonList;
