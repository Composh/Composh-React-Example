// React Components Import
import React from 'react';

import {
  Text,
  View,
} from 'react-native';

// Styled Component Common Import
import {
  Chip,
  Container,
  Icon,
  Title,
  Toolbar
} from 'react-composh';

// import Container from '../../../../src/base/Container';

// import ButtonNative from 'composh/base/Button/ButtonWative';




const ChipScreen: React.FC = () => {
  return (

    <Container>

      <Toolbar
        statusBarStyle="light-content"
        statusBarColor={'darkblue'}
        backgroundColor={'darkblue'}
        // leftIcon={
        //   <ButtonBack />
        // }
        centerContent={
          <Title
            numberOfLines={1}
            ellipsizeMode="tail">
            Chip
          </Title>
        }
      />



      <View>

        <View>

          <Text>
            Basic
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Chip
              disabled
              title={'Default'}
              backgroundColor={'gray'}
              unselectedColor={'white'}
            />

            <Chip
              disabled
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-trash'}
                  size={24}
                  color="black"
                />
              }
              title={'Icon'}
              backgroundColor={'gray'}
              unselectedColor={'white'}
            />

            <Chip
              disabled
              title={'Avatar'}
              backgroundColor={'gray'}
              unselectedColor={'white'}
            />

          </View>

        </View>



        <View>

          <Text>
            Select
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Chip
              selected
              title={'Default'}
              backgroundColor={'gray'}
              selectedColor={'yellow'}
              unselectedColor={'white'}
            />

            <Chip
              selected
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-trash'}
                  size={24}
                  color="black"
                />
              }
              title={'Icon'}
              backgroundColor={'gray'}
              unselectedColor={'white'}
            />

            <Chip
              selected
              title={'Avatar'}
              backgroundColor={'gray'}
              unselectedColor={'white'}
            />

          </View>

        </View>



        <View>

          <Text>
            Colors
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Chip
              title={'Red'}
              backgroundColor={'red'}
              unselectedColor={'white'}
            />

            <Chip
              title={'Green'}
              backgroundColor={'green'}
              unselectedColor={'white'}
            />

            <Chip
              title={'Blue'}
              backgroundColor={'blue'}
              unselectedColor={'white'}
            />

          </View>

        </View>



        <View>

          <Text>
            Outline
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Chip
              title={'Red'}
              backgroundColor={'red'}
              unselectedColor={'white'}
            />

            <Chip
              title={'Green'}
              backgroundColor={'green'}
              unselectedColor={'white'}
            />

            <Chip
              title={'Blue'}
              backgroundColor={'blue'}
              unselectedColor={'white'}
            />

          </View>

        </View>



        <View>

          <Text>
            Icons
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Chip
              disabled
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-home'}
                  size={24}
                  color="white"
                />
              }
              title={'Home'}
              backgroundColor={'gray'}
              unselectedColor={'white'}
            />

            <Chip
              selected
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-camera'}
                  size={24}
                  color="white"
                />
              }
              title={'Home'}
              backgroundColor={'gray'}
              selectedColor={'white'}
            />

            <Chip
              selected
              disabled
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-settings'}
                  size={22}
                  color="white"
                />
              }
              title={'Settings'}
              backgroundColor={'gray'}
              selectedColor={'white'}
            />

          </View>

        </View>



        <View>

          <Text>
            Avatar
          </Text>

          <View style={{
            flexDirection: 'row',
          }}>

            <Chip
              disabled
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-home'}
                  size={24}
                  color="white"
                />
              }
              title={'Andy'}
              backgroundColor={'gray'}
              unselectedColor={'white'}
            />

            <Chip
              selected
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-camera'}
                  size={24}
                  color="white"
                />
              }
              title={'Melissa'}
              backgroundColor={'gray'}
              selectedColor={'white'}
            />

            <Chip
              selected
              disabled
              thumb={
                <Icon
                  type={'ionicon'}
                  name={'md-settings'}
                  size={22}
                  color="white"
                />
              }
              title={'Jonny'}
              backgroundColor={'gray'}
              selectedColor={'white'}
            />

          </View>

        </View>

      </View>

    </Container>

  );
};



export default ChipScreen;
