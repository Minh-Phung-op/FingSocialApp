// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

// // Import các màn hình
// import HomePage from './components/homePage/HomePage';  // Đảm bảo đường dẫn đúng

// // Tạo Bottom Tab Navigator
// const Tab = createBottomTabNavigator();

// const BottomTap = () => {
//   return (
//       <Tab.Navigator
//         initialRouteName="Home" // Đặt màn hình HomePage là màn hình mặc định
//         screenOptions={{
//           tabBarActiveTintColor: '#009688', // Màu cho tab đang được chọn
//           tabBarInactiveTintColor: 'gray', // Màu cho các tab không được chọn
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomePage}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home-outline" color={color} size={size} />
//             ),
//           }}
//         />
//         {/* Các tab khác như Friends, Video, Menu */}
//         <Tab.Screen
//           name="Friends"
//           component={HomePage}  
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="people-outline" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Video"
//           component={HomePage}  
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="videocam-outline" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Menu"
//           component={HomePage} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="menu-outline" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//   );
// };

// export default BottomTap;
