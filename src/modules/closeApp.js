class closeApp {
    constructor() {
        this.wrapper = document.querySelector('.wrapper');
        this.app = document.querySelector('.App');
        this.initApp = document.querySelector('#init-app');
        this.saveBtn = document.querySelector('.btn-save');
        this.closeBtn = document.querySelector('#btn-close');
        this.allFriendsResult = document.querySelector('#allFriends-result');
        this.chosenFriendResult = document.querySelector('#chosenFriends-result');
        this.closeApp = this.closeApp.bind(this);
        this.saveData = this.saveData.bind(this);
        this.initListeners();
    }
    saveData() {
        let allFriends, chosenFriends;

        allFriends = this.composeFriends(this.allFriendsResult);
        chosenFriends = this.composeFriends(this.chosenFriendResult);
        localStorage.setItem('myFriends', JSON.stringify({ allFriends, chosenFriends }))
        this.closeApp();
        alert('Данные сохранены');
    }
    composeFriends(list) {
        let arr= [];

        for (let child of list.children){
            let [firstName, lastName] = child.querySelector('.friends-list__name').innerText.split(' ');
            let photo100 = child.querySelector('.friends-lists__picture').getAttribute('src');

            arr.push({
                first_name: firstName, last_name: lastName, photo_100: photo100
            })
        }

        return {
            items: arr
        }
    }
    closeApp() {
        this.wrapper.classList.remove('overlay');
        this.app.classList.add('hidden');
        this.initApp.classList.remove('hidden');
    }

    initListeners() {
        this.saveBtn.addEventListener('click', this.saveData);
        this.closeBtn.addEventListener('click', this.closeApp);
    }
}

export default () =>{
    new closeApp()
}