import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import SwipeableRating, { styles } from '../lib/swipeable-rating';
import Star from '../lib/components/Star';

const filledIcon =
  <View>
    <Text>
      full
    </Text>
  </View>;

const emptyIcon =
  <View>
    <Text>
      empty
    </Text>
  </View>;

describe('SwipeableRating Snapshot tests', () => {
  it('renders a 5 SwipeableRating using Snapshots', () => {
    expect(renderer.create(
      <SwipeableRating rating={5} />
    )).toMatchSnapshot();
  });

  it('renders a 3.5 star SwipeableRating using Snapshots', () => {
    expect(renderer.create(
      <SwipeableRating allowHalves rating={3.5} />
    )).toMatchSnapshot();
  });
});
describe('SwipeableRating shallow with Enzyme', () => {
  const wrapper = shallow(
    <SwipeableRating
      swipeable={false}
      rating={4}
      onPress={jest.fn()}
    />
  );

  console.log(wrapper.debug());
  console.log(wrapper.props());

  it('renders the correct filled/unfilled stars', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Star n={1} hasOnPress={true} filled={true} half={false} />,
        <Star n={2} hasOnPress={true} filled={true} half={false} />,
        <Star n={3} hasOnPress={true} filled={true} half={false} />,
        <Star n={4} hasOnPress={true} filled={true} half={false} />,
        <Star n={5} hasOnPress={true} filled={false} half={false} />
      ])).toBe(true);
  });

});

describe('SwipeableRating mounted with Enzyme', () => {


  const wrapper = mount(
    <SwipeableRating
      swipeable={false}
      rating={4}
      filledIcon={filledIcon}
      emptyIcon={emptyIcon}
    />
  );
 
  it('renders custom icon components', () => {
  expect(
    wrapper.containsAllMatchingElements(
      [emptyIcon, filledIcon]
    )).toBe(true);
  });

  const star = mount(<Star n={1} filled={true}/>);
  console.log(star.debug());

});