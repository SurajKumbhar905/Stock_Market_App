import { StyleSheet, Text, View , Dimensions } from 'react-native'
import React from 'react'
import { EdgePosition, LineChart, ruleTypes, yAxisSides } from 'react-native-gifted-charts';




const DetailChart = () => {
    const windowWidth = Dimensions.get('window').width;

    const ptData = [
        {
          value: 240,
          date: '10 Apr 2022',
          label: 'Mon',
          labelTextStyle: {color: '#A0AEC0', width: 60},
        },
        {value: 280, date: '11 Apr 2022'},
        {value: 260, date: '12 Apr 2022'},
        {value: 340, date: '13 Apr 2022'},
        {value: 385, date: '14 Apr 2022'},
        {value: 280, date: '15 Apr 2022'},
        {value: 390, date: '16 Apr 2022'},
    
        {value: 370, date: '17 Apr 2022'},
        {value: 285, date: '18 Apr 2022'},
        {value: 295, date: '19 Apr 2022'},
        {
          value: 300,
          date: '20 Apr 2022',
          label: 'Tue',
          labelTextStyle: {color: '#A0AEC0', width: 60},
        },
        {value: 280, date: '21 Apr 2022'},
        {value: 295, date: '22 Apr 2022'},
        {value: 260, date: '23 Apr 2022'},
        {value: 255, date: '24 Apr 2022'},
    
        {value: 190, date: '25 Apr 2022'},
        {value: 220, date: '26 Apr 2022'},
        {value: 205, date: '27 Apr 2022'},
        {value: 230, date: '28 Apr 2022'},
        {value: 210, date: '29 Apr 2022'},
        {
          value: 200,
          date: '30 Apr 2022',
          label: 'Wed',
          labelTextStyle: {color: '#A0AEC0', width: 60},
        },
        {value: 160, date: 'Mon'},
        {value: 180, date: '2 Apr 2022'},
        {value: 190, date: '3 Apr 2022'},
        {value: 180, date: '4 Apr 2022'},
        {value: 140, date: '5 Apr 2022'},
        {value: 145, date: '6 Apr 2022'},
        {value: 160, date: '7 Apr 2022'},
        {value: 200, date: '8 Apr 2022'},
        {value: 200, date: '8 Apr 2022'},
        {
          value: 300,
          date: '20 Apr 2022',
          label: 'Thu',
          labelTextStyle: {color: '#A0AEC0', width: 60},
        },
        {value: 280, date: '21 Apr 2022'},
        {value: 295, date: '22 Apr 2022'},
        {value: 260, date: '23 Apr 2022'},
        {value: 255, date: '24 Apr 2022'},
    
        {value: 190, date: '25 Apr 2022'},
        {value: 220, date: '26 Apr 2022'},
        {value: 205, date: '27 Apr 2022'},
        {value: 230, date: '28 Apr 2022'},
        {value: 210, date: '29 Apr 2022'},
        {
          value: 200,
          date: '30 Apr 2022',
          label: 'Fri',
          labelTextStyle: {color: '#A0AEC0', width: 60},
        },
        {value: 240, date: '1 May 2022'},
        {value: 250, date: '2 May 2022'},
        {value: 280, date: '3 May 2022'},
        {value: 250, date: '4 May 2022'},
        {value: 234, date: '5 May 2022'},
        {value: 205, date: '27 Apr 2022'},
        {value: 230, date: '28 Apr 2022'},
        {value: 234, date: '29 Apr 2022'},
      ];

      console.log(windowWidth)

      return (
        <View
          style={{
            // paddingVertical: 100,
            // paddingLeft: 20,
            // paddingRight : 0,
            // flex : 1/2,
            // height : 30
            justifyContent :'center',
            alignItems : 'center',
            // backgroundColor : 'red'
          }}>
          <LineChart
            // areaChart
            data={ptData}
            // rotateLabel
            width={windowWidth-100}
            hideDataPoints
            spacing={7}
            color="#3E52C1"
            thickness={2.5}
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            initialSpacing={0}
            noOfSections={4}
            stepHeight={50}
            height={220}
            maxValue={500}
            yAxisColor="white"
            yAxisThickness={0}
            rulesType={ruleTypes.DOTTED}
            rulesColor="lightgray"
            yAxisTextStyle={{color: '#A0AEC0' ,}}
    
            
            curved={true}
            scrollAnimation = {true}
            // yAxisLabelPrefix="hello"
            yAxisLabelSuffix={'k'}
            yAxisTextNumberOfLines={2}
            yAxisLabelWidth={40}
            // yAxisTextStyle = {{}}
            
            
            yAxisSide={yAxisSides.RIGHT}
            // xAxisColor="red"
            xAxisThickness={0}
            focusEnabled = {true}
            // showScrollIndicator = {true}
            hideAxesAndRules = {false}
            pointerConfig={{
                
            //   pointerStripHeight: 160,
              pointerStripColor: 'lightgray',
              pointerStripWidth: 0,
              pointerColor: '#3E52C1',
              
            
              radius: 6,
              
            //   strokeDashArray : [1,2,3],
            //   pointerLabelWidth: 100,
            //   pointerLabelHeight: 90,
              activatePointersOnLongPress: true,
            //   activatePointersDelay : 200,
              autoAdjustPointerLabelPosition: true,
              pointerLabelComponent: (items:any) => {
                return (
                  <View
                    style={{
                      height: 90,
                      width: 100,
                    //   backgroundColor : 'red',
                      justifyContent: 'center',
                      alignItems : 'center',
                      marginTop: -40,
                      marginLeft : -40
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 10,
                        marginBottom: 6,
                        textAlign: 'center',
                        backgroundColor : '#16192C',
                        fontFamily : 'Inter-Bold',
                        padding : 5,
                        borderRadius : 6
                      }}>
                      {'$' + items[0].value + '.0'}
                    </Text>
    
                  </View>
                );
              },
            }}
          />
        </View>
      );
}

export default DetailChart

const styles = StyleSheet.create({})