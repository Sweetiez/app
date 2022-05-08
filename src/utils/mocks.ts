jest.mock('./../assets/icons/pen.svg', () => 'Pen');
jest.mock('./../assets/icons/star.svg', () => 'Star');
jest.mock('./../assets/icons/plus.svg', () => 'Plus');
jest.mock('./../assets/icons/minus.svg', () => 'Minus');
jest.mock('./../assets/icons/add.svg', () => 'Add');

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