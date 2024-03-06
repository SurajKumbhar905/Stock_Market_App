import {ImageProps} from 'react-native';

export interface SettingDataProps {
  text: string;
  image: ImageProps;
  subText: string | undefined;
}

export const SettingData : SettingDataProps[] = [
    {
        text  : 'Account',
        image : require('../../assets/Icons/user/outline.png'),
        subText : ''
    },
    {
        text  : 'Security',
        image : require('../../assets/Icons/fingerprint.png'),
        subText : ''
    },
    {
        text  : 'Billing / Payments',
        image : require('../../assets/Icons/credit-card.png'),
        subText : ''
    },
    {
        text  : 'Language',
        image : require('../../assets/Icons/language.png'),
        subText : 'English'
    },
    {
        text  : 'Settings',
        image : require('../../assets/Icons/settings.png'),
        subText : ''
    },
    {
        text  : 'FAQ',
        image : require('../../assets/Icons/question-mark.png'),
        subText : ''
    }
]
