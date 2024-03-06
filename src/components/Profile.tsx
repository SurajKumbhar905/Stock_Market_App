import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useTranslation } from 'react-i18next';


const Profile = () => {
const { t, i18n } = useTranslation();
  return (
    <View style={{flex: 1 }}>
      <View
        style={{flexDirection: 'row', flex: 1 }}>
        <View style={{flexDirection: 'row', height: 85, alignItems: 'center' , flex : 1/1.3 , justifyContent : 'space-between' }}>
          <View style={{}}>
            <Image
              style={{width: 80, height: 80 , borderRadius : 100}}
              source={require('../../assets/Icons/brandLogos/Honeywell.png')}
            />
          </View>
          <View style = {{alignItems : 'flex-start' }}>
            <Text style = {{fontSize : 14 , fontFamily : 'Inter-SemiBold' , color :'black'}}>Suraj Kumbhar</Text>
            <Text style = {{fontSize : 12 , fontFamily : 'Inter-Regular' , color :'#818898'}}>surajkumbhar904@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style = {{paddingVertical : 20}}>
        <TouchableOpacity style = {{ height : 64 , borderWidth : 1 , flexDirection : 'row' , alignItems : 'center' , justifyContent : 'space-around' , backgroundColor : '#F8FAFB' , borderColor : '#C1C7D0' , borderRadius : 6 }}>
        <View style = {{width : 40 , height : 40 , backgroundColor : '#FFFFFF' , borderWidth  :1 , borderColor : '#EAEAEA' , borderRadius : 100 , alignItems : 'center' , justifyContent : 'center'}}>
            <Image
            style = {{width : '50%' , height : '50%'}}
            source={require('../../assets/Icons/receipt-2.png')}
            />
        </View>
        <View>
            <Text style = {{fontSize : 14 , fontFamily : 'Inter-SemiBold' , color :'black'}}>{t('Invite friends')}</Text>
            <Text style = {{fontSize : 12 , fontFamily : 'Inter-Regular' , color :'#818898'}}>{t('Invite your friends and get $15')}</Text>
        </View>
        <View>
            <Image
            style = {{width : 20 , height : 20}}
            source={require('../../assets/Icons/chevron-right.png')}
            />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
