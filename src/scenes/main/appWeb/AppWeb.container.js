import React, {useLayoutEffect} from 'react';
import AppWebView from './AppWeb.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESPACE} from './AppWeb.constants';
import {getString} from 'utils/i18n';

const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
 // ACTION.HANDLER,
]);

export default function AppWebContainer({navigation}) {
  const isLoading = useSelectorShallow(loadingSelector);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Audio',
    });
  }, [navigation]);

  return (
    <AppWebView isLoading={isLoading} />
  );
}
