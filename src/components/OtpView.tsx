import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputKeyPressEventData, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

type OTPInputProps = {
    length: number,
    value: Array<string>,
    disabled: boolean,
    onChange(value: Array<string>): void,
    isAutoFocus : boolean
}


const OtpView = ({length , value , disabled , onChange , isAutoFocus} : OTPInputProps) => {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

    const inputRefs = useRef<Array<NonNullable<TextInput>>>([])
    const onChangeValue = (text: string, index: number) => {
        // console.log(value)
        
        const newValue = value.map((item, valueIndex) => {
            // console.log(valueIndex , index , "ind")
            
            if (valueIndex === index) {
                return text
            }
          
            return item
        })


        
        onChange(newValue)
    }

    const handleChange = (text: string, index: number) => {
        // console.log( text , "cahnge value" , index)
        

        // if (isNaN(Number(text))){
        //     console.log(text,"surajjheyy")
        //     return
        // }
        // text = text.replace(/[^0-9]/g, "");
      
        onChangeValue(text, index)
        // console.log(text,"texxt")
        if (text.length !== 0) {
            return inputRefs?.current[index + 1]?.focus()
        }

        return inputRefs?.current[index - 1]?.focus()
    }

    const handleBackspace = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        const { nativeEvent } = event
        if (nativeEvent.key === 'Backspace') {
            handleChange('', index)
        }
    }

    useEffect(() => {
        console.log('called use effect',isAutoFocus)
        if (isAutoFocus){
            inputRefs.current[0].focus()
        }
       
    }, [isAutoFocus])
    
    

  return (
    <View style={styles.container}>
    {[...new Array(length)].map((item, index) => (
        <TextInput
            ref={ref => {
                if (ref && !inputRefs.current.includes(ref)) {
                    inputRefs.current = [...inputRefs.current, ref]
                }
            }}
            selectionColor={'#3E52C1'}
            key={index}
            maxLength={1}
            contextMenuHidden
            selectTextOnFocus
            editable={!disabled}
            style={[styles.input, focusedIndex === index ? styles.focusedInput : null]}
            keyboardType="decimal-pad"
            testID={`OTPInput-${index}`}
            onChangeText={text => {handleChange(text, index)}}
            onKeyPress={event => handleBackspace(event, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            // value = {this.state.myNumber}
            
            
        />
    ))}
    
</View>
  )
}

export default OtpView

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        width: 45,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth : 1,
        borderColor : '#ECEFF3',
       
        
    },
    focusedInput: {
        borderColor: '#3E52C1'
    }
})