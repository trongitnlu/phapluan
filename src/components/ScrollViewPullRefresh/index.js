import React, {useCallback, useMemo, Fragment} from 'react';
import {ScrollView, RefreshControl, StyleSheet} from 'react-native';
import {COLOR_PRIMARY} from 'constants/colors';
import styles from './styles';
import {SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

export default function ScrollViewPullRefresh(props) {
  const refreshControl = useCallback((onRefresh = () => {}) => {
    return (
      <RefreshControl
        colors={[COLOR_PRIMARY]}
        refreshing={false}
        onRefresh={onRefresh}
      />
    );
  }, []);

  const {onRefresh} = props;
  const newStyle = useMemo(() => {
    return [styles.container, StyleSheet.flatten(props.style)];
  }, [props.style]);

  const Container = useMemo(() => {
    return props.safeArea ? SafeAreaView : Fragment;
  }, [props.safeArea]);

  const newProps = useMemo(() => {
    return props.safeArea ? {style: styles.container} : {};
  }, [props.safeArea]);

  return (
    <Container {...newProps}>
      <ScrollView
        style={newStyle}
        showsVerticalScrollIndicator={false}
        {...props}
        refreshControl={refreshControl(onRefresh)}>
        {props.children}
      </ScrollView>
    </Container>
  );
}

ScrollViewPullRefresh.propTypes = {
  safeArea: PropTypes.bool,
  onRefresh: PropTypes.func,
};

ScrollViewPullRefresh.defaultProps = {
  safeArea: false,
  onRefresh: () => {},
};
