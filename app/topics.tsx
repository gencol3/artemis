type RootStackParamList = {
  topics: undefined;
  tabs: { screen: string; params?: { selectedTopics: string[] } };
};

type TopicScreenNavigationProp = NavigationProp<RootStackParamList, 'topics'>;
import { Image, StyleSheet, Platform, ScrollView, Text, View, Button, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import {topics} from '@/db';
import HomeScreen from './(tabs)';
import { Navigate } from 'react-router-dom';

const groupTopicsIntoRows = (topics: any) => {
    const rows = [];
    let isOddRow = true;
  
    for (let i = 0; i < topics.length;) {
      const row = [];
      const count = isOddRow ? 3 : 2;
      
      for (let j = 0; j < count && i < topics.length; j++, i++) {
        row.push(topics[i]);
      }
      
      rows.push(row);
      isOddRow = !isOddRow;
    }
  
    return rows;
};

export default function TopicScreen( { navigation }: { navigation: NavigationProp<any> } ) {
  const Webnavigation = useNavigation<TopicScreenNavigationProp>();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const rows = groupTopicsIntoRows(topics);


    const handlePress = (topicName: any) => {
        setSelectedTopics((prevSelected: any[]): any =>
          prevSelected.includes(topicName)
            ? prevSelected.filter((name) => name !== topicName)
            : [...prevSelected, topicName]
        );
    };


    const handleContinue = () => {
      if (Platform.OS === "web") {
        Webnavigation.navigate('tabs', { screen: 'Home', params: { selectedTopics } });
      } else {
        navigation.navigate('tabs', { screen: 'Home', params: { selectedTopics } });
      }
    };

    return (
      <SafeAreaView style={{backgroundColor: '#242423'}}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} scrollEnabled>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Select 5 Topics</Text>
            <Pressable style={styles.button} onPress={handleContinue}><Text style={styles.buttonText}>Skip For Now</Text></Pressable>
            </View>
            <View style={styles.container}>
            {rows.map((row, rowIndex) => (
                <View style={styles.row} key={rowIndex}>
                {row.map((topic: {name: string}, index) => (
                    <View style={styles.topicContainer} key={index}>
                    <ThemedView style={[ styles.stepContainer, selectedTopics.includes(topic.name) && styles.selectedStepContainer ]} >
                        <View style={[ styles.topic, selectedTopics.includes(topic.name) && styles.selectedTopic ]}>
                        <TouchableOpacity onPress={() => handlePress(topic.name)} style={[styles.topic, selectedTopics.includes(topic.name) && styles.selectedTopic]}>
                          <Text style={[styles.topicText, selectedTopics.includes(topic.name) && styles.selectedTopicText]}>{topic.name}</Text>
                        </TouchableOpacity>

                        </View>
                    </ThemedView>
                    </View>
                ))}
                </View>
            ))}
            </View>
        </ScrollView>
        <View style={styles.fixedContainer}>
            <Text style={{color: '#808080', padding: 12}}>You Can Change This Later</Text>
            <View style={styles.continue}>
                <Pressable style={styles.continue} onPress={handleContinue}>
                  <Text style={{color: '#808080', backgroundColor: '#FFC939'}}>Continue</Text>
                </Pressable>
            </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginBottom: 100,
    },
    scrollViewContent: {
      flexGrow: 1,
      ...(Platform.OS === 'web' && { height: 450 }),
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 32,
        color: '#ffffff',
      },
      titleContainer: {
        paddingTop: 52,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
      },
      button: {
        backgroundColor: '#242423',
        borderRadius: 25,
        padding: 8,
      },
      buttonText: {
        color: 'gray',
      },
      container: {
        padding: 12,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      topicContainer: {
        flex: 1,
        padding: 12,
        marginHorizontal: 5,
        backgroundColor: '#242423',
      },
      selectedTopicContainer: {
        backgroundColor: '#FFC939',
      },
      topic: {
        fontSize: 8,
        color: '#ffffff',
        textAlign: 'center',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242423',
        borderRadius: 25,
        
      },
      stepContainer: {
        alignItems: 'center',
        marginVertical: 5,
        width: '100%',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E8EDDF',
        backgroundColor: '#242423',
      },
      selectedStepContainer: {
        backgroundColor: '#FFC939',
        borderWidth: 1,
        borderColor: '#FFC939',
        color: '#000000',
      },
      fixedContainer: {
        margin: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#272727',
      },
      continue: {
        backgroundColor: '#FFC939',
        color: '#000000',
        padding: 8,
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      topicText: {
        color: '#ffffff',
        fontSize: 8,
      },
      selectedTopic: {
        backgroundColor: '#FFC939',
      },
      selectedTopicText: {
        color: '#000000',
      },      
});
