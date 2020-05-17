import {Alert} from 'react-native';

export function showAlertConfirm(
  config = {title: 'Thông báo', message: 'Bạn có đồng ý điều này không!'},
  callback = () => {},
) {
  const {message, title = 'Thông báo'} = config;
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Không',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Có',
        onPress: () => {
          callback();
        },
      },
    ],
    {cancelable: false},
  );
}

export function showAlertNotification(
  config = {title: 'Thông báo', message: 'Bạn có đồng ý điều này không!'},
  callback = () => {},
  options = {cancelable: false},
) {
  const {message, title = 'Thông báo'} = config;
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Ok',
        onPress: () => {
          if (typeof callback === 'function') {
            callback();
          }
        },
      },
    ],
    options,
  );
}
