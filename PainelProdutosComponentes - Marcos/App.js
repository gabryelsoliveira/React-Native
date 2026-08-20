import React from 'react';
import { ScrollView } from 'react-native';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <ScrollView>
      <Header />
      <Main />
      <Footer />
    </ScrollView>
  );
}