import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SettingData} from '../Data/SettingData';
import SettingOption from '../components/SettingOption';
import Profile from '../components/Profile';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SettingStackParamList} from '../routes/AppStack';

type SettingItemProps = {
  text: string;
};

type ProfileScreenProps = NativeStackScreenProps<
  SettingStackParamList,
  'Profile'
>;

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const onpressSettingItem = ({text}: SettingItemProps) => {
    if (text === 'Language') {
      navigation.push('Language');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F8FAFB'}}>
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              paddingHorizontal: 16,
              backgroundColor: 'white',
              marginBottom: 20,
            }}>
            <Profile />
          </View>
        }
        data={SettingData}
        renderItem={({item}) => (
          <View>
            <SettingOption
              text={item.text}
              image={item.image}
              subText={item.subText}
              onpress={() => onpressSettingItem(item)}
            />
          </View>
        )}
        keyExtractor={index => index.text}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
