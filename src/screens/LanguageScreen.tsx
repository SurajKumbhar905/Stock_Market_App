import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
// import { debounce } from 'lodash';

const languages = [
  {name: 'English', code: 'EN'},
  {name: 'हिंदी', code: 'HI'},
  {name: 'मराठी', code: 'MR'},
  {name: 'ગુજરાતી', code: 'GU'},
  {name: 'ਪੰਜਾਬੀ', code: 'PN'},
  {name: 'ಕನ್ನಡ', code: 'KA'},
  {name: 'தமிழ்', code: 'TM'},
];

const LanguageScreen = () => {
  const [colorIndex, setcolorIndex] = useState(0);

  useEffect(() => {
    const index = languages.findIndex(
      language => language.code === i18n.language,
    );
    setcolorIndex(index);
  }, []);

  const {t, i18n} = useTranslation();

  const changeLanguage = (languageCode: string, index: number) => {
    i18n.changeLanguage(languageCode);
    setcolorIndex(index);
  };

  const memoizedChangeLanguage = useCallback((languageCode:any, index:any) => {
    i18n.changeLanguage(languageCode);
    setcolorIndex(index);
  }, [i18n]);

  const memoizedColorIndex = useMemo(() => {
    return colorIndex;
  }, [colorIndex]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={languages}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              memoizedChangeLanguage(item.code, index);
            }}
            style={{
              height: 30,
              paddingHorizontal: 30,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: index === memoizedColorIndex ? '#3E52C1' : 'white',
                borderRadius: 100,
                borderWidth: 1,
              }}></View>
            <Text
              style={{
                color: 'black',
                marginHorizontal: 10,
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'Inter-Bold',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({});
