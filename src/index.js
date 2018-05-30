import './styles'

import FriendListDrag from './modules/friendListsDrag'
import filterFriends from './modules/filterFriends'
import App from './modules/App';
const initApp = document.querySelector('#init-app');
const allFriendsSearch = document.querySelector('#allfriends-search');
const chosenFriendsSearch = document.querySelector('#choosenfriends-search');
const allFriendsResult = document.querySelector('#allFriends-result');
const chosenFriendResult = document.querySelector('#chosenFriends-result');

App({
    API_KEY: 5350105,
    vkParam: 2,
    responseVersion: '5.76',
    initApp
});

filterFriends([{
    target: allFriendsSearch,
    result: allFriendsResult
}, {
    target: chosenFriendsSearch,
    result: chosenFriendResult
}]);
new FriendListDrag({
    container: document.querySelector('.friends-lists'),
    target: {
        class: 'friends-list__item',
        container: 'friend-list',
    }
});
