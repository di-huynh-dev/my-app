import { useEffect, useState } from 'react'
import ProfileScreen from './src/screens/profile/ProfileScreen'
import HomeScreen from './src/screens/home/HomeScreen'
import { View } from 'react-native'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('profile')

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('home')
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {currentScreen === 'home' ? <HomeScreen /> : <ProfileScreen />}
    </View>
  )
}
