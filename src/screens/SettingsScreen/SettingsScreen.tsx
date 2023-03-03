import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import global from '../../styles/Styles'

type Props = {}

const SettingsScreen = (props: Props) => {
	return (
		<View style={global.container}>
			<Text>Night Mode</Text>
		</View>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({})