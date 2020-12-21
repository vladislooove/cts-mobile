// Libs
import React, { FC } from 'react';
import { View, ScrollView, Text, ImageBackground } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';

// Styles
import styles from './styles';

export const About: FC = () => {
  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require('../../assets/about-bg.jpg')}
          resizeMode="cover"
          style={styles.image}
          resizeMethod="auto"
        >
          <View style={styles.imageContainer} />
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.title}>
            <Title>
              Our story
            </Title>
          </View>
          <Text style={styles.text}>
            Both Miles and I became doctors because we wanted to make a difference. If that meant saving just one life, then it was a vocation we were both happy to dedicate our lives to. Ironically, whilst working as a junior doctor, it was a patient I met who changed our lives forever. I met Joe in the emergency department when I was working as a junior doctor. He came in very unwell – jaundiced, gaunt and had visibly lost a significant amount of weight. He had visited his GP a few times over the preceding few months to no avail. I was extremely worried, following a CT scan I had the difficult task of breaking the news to Joe that he had stage 4 metastatic pancreatic cancer. During that heart-breaking conversation he never once said “why did I get cancer?” but instead asked “why was my cancer picked up so late?” Tragically Joe died three weeks later. I couldn’t save Joe, and sadly, Joe’s story is not unique. Looking back, most doctors would have done the same thing as his GP, as it just wasn’t obvious at the time when he first presented – other diagnoses were far more likely. 50% of patient are diagnosed with their cancer at the later stages, because of this 80% of those patients will die within 5 years. Things could be different. If diagnosed early, 80% of patients would survive to 10 years As a GP I often wake up at night thinking, “could my patient have had cancer? Should I have done something differently?” Thinking about the patient I had met all those years ago, nothing had changed. I knew we could do better… we had to do better for patients. This is when Miles and I came together and founded C the Signs. We met as junior doctors and bonded over our love for technology to improve patient care. We were now two doctors with a new purpose and on a mission – no doctor, patient or family member should have to endure the pain of a preventable death from cancer.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default About;
