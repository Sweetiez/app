jest.mock('./../assets/icons/pen.svg', () => 'Pen');
jest.mock('./../assets/icons/star.svg', () => 'Star');
jest.mock('./../assets/icons/plus.svg', () => 'Plus');
jest.mock('./../assets/icons/minus.svg', () => 'Minus');
jest.mock('./../assets/icons/add.svg', () => 'Add');
jest.mock('./../assets/icons/arrow-back.svg', () => 'Back');
jest.mock('./../assets/icons/cook-book.svg', () => 'CookBook');
jest.mock('./../assets/icons/cake.svg', () => 'Cake');
jest.mock('./../assets/icons/event.svg', () => 'Event');
jest.mock('./../assets/icons/eye.svg', () => 'Eye');
jest.mock('./../assets/icons/trash.svg', () => 'Trash');
jest.mock('./../assets/icons/no-image.svg', () => 'NoImage');
jest.mock('./../assets/icons/edit.svg', () => 'Edit');
jest.mock('./../assets/icons/warning.svg', () => 'Warning');

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}))



jest.mock('react-native-picker-select', () => 'RNPickerSelect')
jest.mock('react-native-config', () => 'Config')