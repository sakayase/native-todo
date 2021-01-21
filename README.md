# Ajouter une police d'ecriture

expo install expo-font @expo-google-fonts/[font]
https://github.com/expo/google-fonts/blob/master/GALLERY.md#readme

import AppLoading from 'expo-app-loading';
expo install expo-app-loading

  let [fontsLoaded] = useFonts({
    ArbutusSlab_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />

  fontFamily: 'ArbutusSlab_400Regular',

  # Custom fonts
  https://docs.expo.io/guides/using-custom-fonts/https://docs.expo.io/guides/using-custom-fonts/