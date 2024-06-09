import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Platform, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { topics, users, posts, communities } from '@/db';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { SimpleLineIcons } from '@expo/vector-icons';

export function ForYouSection() {
  // Find the user with id of 1
  const user = users.find((user) => user.id === '1');

  // Sort communities based on created
  const sortedCommunities = communities.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  // Sort posts based on created
  const sortedPosts = posts.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  // Merge sorted communities and posts
  const mergedArray = [...sortedCommunities, ...sortedPosts];

  // Sort merged array based on created
  const sortedMergedArray = mergedArray.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  // Filter the sortedMergedArray to only include items that have at least one topic in common with the user
  const filteredItems = sortedMergedArray.filter((item) => {
    if ('name' in item) {
      return item.topics.some((topic) => user?.topics.includes(topic));
    } else {
      return item.topics.some((topic) => user?.topics.includes(topic));
    }
  });

  return (
    <View>
      {filteredItems.map((item, index) => (
        <React.Fragment key={index}>
          {'name' in item ? (
            <TouchableOpacity style={styles.imageContainer}>
              <ImageBackground source={{ uri: item.Image }} style={styles.Communityimage} imageStyle={styles.imageBorder}>
                <View style={styles.imageTextContainer}>
                  <Text style={styles.imageText}>{item.name}</Text>
                  <Text style={styles.imageDescription}>{item.description}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.imageContainer}>
              <ImageBackground source={{ uri: item.Image }} style={styles.postsImage} imageStyle={styles.imageBorder}>
                <View style={styles.imageContentContainer}>
                  <View style={styles.userImageContainer1}>
                    <View style={styles.userImageContainer}>
                      <Image
                        source={{ uri: users.find((user) => user.id === item.user)?.avatar }}
                        style={styles.userImage}
                      />
                      <Text style={styles.userName}>{users.find((user) => user.id === item.user)?.username}</Text>
                    </View>
                    <TouchableOpacity>
                      <SimpleLineIcons name="options" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ImageRowContainer}>
                    <Text style={styles.imageDescription}>{item.ImageDescription}</Text>
                    <View style={styles.heartContainer}>
                      <Text>{item.likes.length}</Text>
                      <TouchableOpacity>
                        <Entypo name="heart-outlined" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

export function FollowingSection() {
  // Find the user with id of 1
  const user = users.find((user) => user.id === '1');

  // Get the user followings and community memberships
  const userFollowings = user?.following || [];
  const userCommunities = user?.communities || [];

  // Sort communities based on created and filter by user membership
  const sortedCommunities = communities
    .filter((community) => userCommunities.includes(community.id))
    .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  // Sort posts based on created and filter by user followings
  const sortedPosts = posts
    .filter((post) => userFollowings.includes(post.user))
    .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  // Merge sorted communities and posts
  const mergedArray = [...sortedCommunities, ...sortedPosts];

  // Sort merged array based on created
  const sortedMergedArray = mergedArray.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  return (
    <View>
      {sortedMergedArray.map((item, index) => (
        <React.Fragment key={index}>
          {'name' in item ? (
            // Community item
            <TouchableOpacity style={styles.imageContainer}>
              <ImageBackground source={{ uri: item.Image }} style={styles.Communityimage} imageStyle={styles.imageBorder}>
                <View style={styles.imageTextContainer}>
                  <Text style={styles.imageText}>{item.name}</Text>
                  <Text style={styles.imageDescription}>{item.description}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ) : (
            // Post item
            <TouchableOpacity style={styles.imageContainer}>
              <ImageBackground source={{ uri: item.Image }} style={styles.postsImage} imageStyle={styles.imageBorder}>
                <View style={styles.imageContentContainer}>
                  <View style={styles.userImageContainer1}>
                    <View style={styles.userImageContainer}>
                      <Image
                        source={{ uri: users.find((user) => user.id === item.user)?.avatar }}
                        style={styles.userImage}
                      />
                      <Text style={styles.userName}>{users.find((user) => user.id === item.user)?.username}</Text>
                    </View>
                    <TouchableOpacity>
                      <SimpleLineIcons name="options" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ImageRowContainer}>
                    <Text style={styles.imageDescription}>{item.ImageDescription}</Text>
                    <View style={styles.heartContainer}>
                      <Text>{item.likes.length}</Text>
                      <TouchableOpacity>
                        <Entypo name="heart-outlined" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

export default function HomeScreen() {
  const userId = 1;
  const [selectedTab, setSelectedTab] = useState('forYou');

  const handleTabChange = (tab: any) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.head}>
          <TouchableOpacity>
            <Ionicons name="menu" size={32} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Artemis</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome6 name="gear" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'forYou' && styles.tabSelected]}
          onPress={() => handleTabChange('forYou')}
        >
          <Text style={[styles.tabText, selectedTab === 'forYou' && styles.tabTextSelected]}>For you</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'following' && styles.tabSelected]}
          onPress={() => handleTabChange('following')}
        >
          <Text style={[styles.tabText, selectedTab === 'following' && styles.tabTextSelected]}>Following</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {selectedTab === 'forYou' && (
          <View style={styles.forYouContainer}>
            <ForYouSection />
          </View>
        )}
        {selectedTab === 'following' && (
          <View style={styles.followingContainer}>
            <FollowingSection />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242423',
  },
  header: {
    marginTop: Platform.OS === 'android' ? 24 : 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 16,
    color: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  tab: {
    margin: 4,
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242423',
    borderColor: 'white',
  },
  tabSelected: {
    backgroundColor: '#333533',
    borderColor: '#333533',
  },
  tabText: {
    color: 'white',
  },
  tabTextSelected: {
    color: 'white',
  },
  forYouContainer: {
    padding: 16,
  },
  followingContainer: {
    padding: 16,
  },
  imageContainer: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 16,
  },
  Communityimage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  postsImage: {
    height: 250,
    justifyContent: 'space-between',
    padding: 16,
  },
  imageBorder: {
    borderRadius: 20,
  },
  imageText: {
    color: 'white',
    textAlign: 'left',
    paddingLeft: 8,
  },
  imageDescription: {
    color: 'gray',
    textAlign: 'left',
  },
  imageTextContainer: {
    flex: 1,
    gap: 8,
    textAlign: 'left',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  userImageContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  userImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    color: 'white',
  },
  userTextContainer: {
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  userText: {
    color: 'gray',
  },
  imageContentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ImageRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
