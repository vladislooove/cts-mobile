// Libs
import React, { FC } from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import { About, ArrowRight, Governance, Contact, Resources, User } from '../../components/icons';

// Styles
import styles from './styles';
import { COLOR_PRIMARY } from '../../styles/constants';

export const More: FC = () => {
  const svgIconProps = {
    width: 75,
    height: 75,
  };

  return (
    <View style={styles.container}>
      <Navigation />
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Title>
            More
          </Title>
        </View>
        <View style={styles.linksWrapper}>
          <TouchableNativeFeedback>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <About {...svgIconProps} />
                <Text style={styles.linkText}>
                  About
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <Governance {...svgIconProps} />
                <Text style={styles.linkText}>
                  Governance
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <Contact {...svgIconProps} />
                <Text style={styles.linkText}>
                  Contact
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <Resources {...svgIconProps} />
                <Text style={styles.linkText}>
                  Resources
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <User {...svgIconProps} />
                <Text style={styles.linkText}>
                  My Account
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

export default More;
