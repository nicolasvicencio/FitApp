import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors'

type Props = {}

const Spinner = (props: Props) => {
	return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={COLORS.primary} />
    </View>
  );
}

export default Spinner

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});