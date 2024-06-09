import { Image, StyleSheet, Platform, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import {topics} from '@/db';

export default function TestingScreeen() {


    return (
      <View>
        <Text style={{ fontSize: 26, color: 'white' }}>Testing</Text>
      </View>
    );
}

const styles = StyleSheet.create({

});
