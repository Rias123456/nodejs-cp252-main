const User = require('../models/user');
const UserData = require('../models/userData');

// Count method group
describe('Count user', () => {
    test('default user count', () => {
        const testUserData = new UserData();  
        const userCount = testUserData.getUserCount();
        expect(userCount).toEqual(4);
    });

    test('clear user and Count', () => {
        const testUserData = new UserData(); 
        testUserData.clearUsers();
        const userCount = testUserData.getUserCount();
        expect(userCount).toEqual(0);
    });
});

// Remove user group
describe('remove user', () => {
    test('Remove one', () => {
        const testUserData = new UserData();
        const userCountBefore = testUserData.getUserCount();
        testUserData.removeOneUser();
        const userCountAfter = testUserData.getUserCount();
        const difUser = userCountBefore - userCountAfter;
        expect(difUser).toEqual(1);
    });

    test('Remove two and check difference', () => {
        const testUserData = new UserData();
        const userCountBefore = testUserData.getUserCount();
        testUserData.removeTwoUsers();
        const userCountAfter = testUserData.getUserCount();
        const difUser = userCountBefore - userCountAfter;
        expect(difUser).toEqual(2);
    });

    test('Remove two from empty data should not go negative', () => {
        const testUserData = new UserData();
        testUserData.clearUsers();
        testUserData.removeTwoUsers();
        expect(testUserData.getUserCount()).toEqual(0);
    });
});