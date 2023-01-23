import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { COLORS } from '../../utils/colors'
import React from 'react'
import global from '../../styles/Styles'

type Props = {
	onPress: Function
	children: any
}

export default function({children, onPress}: Props) {
 return(
	<TouchableOpacity
	style={[styles.button, global.shadow]}
	onPress={onPress}
	>
		<View style={styles.buttonContent}>
			{children}
		</View>
	</TouchableOpacity>
 )
}

const styles = StyleSheet.create({
	button: {
		top: -25, 
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 8,
	},
	buttonContent: {
		width: 65,
		height: 65,
		borderRadius: 35,
		backgroundColor: COLORS.primary	,
		elevation: 2
		
	},
})