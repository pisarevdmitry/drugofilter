import VKAuth from './Auth'

class startApp extends VKAuth {
    constructor(param) {
        super(param);
        let {initApp} = param;
        this.initApp = initApp;
        this.allFriends = {};
        this.chosenFriends = {};
        this.wrapper =  document.querySelector('.wrapper');
        this.app =  document.querySelector(".App");
        this.templateAllFriends = document.querySelector('#allFriends').textContent;
        this.templateChosenFriends = document.querySelector('#chosenFriends').textContent;
        this.allFriendsResult = document.querySelector('#allFriends-result');
        this.chosenFriendResult = document.querySelector('#chosenFriends-result');
        this.startApp = this.startApp.bind(this);
        this.initListener()
    }
    initListener() {
        this.initApp.addEventListener('click', this.startApp)
    }
    showApp() {
        this.wrapper.classList.add('overlay');
        this.app.classList.remove('hidden');
        this.initApp.classList.add('hidden');
    }
   async startApp(e){
        e.preventDefault();
        if (localStorage.getItem('myFriends')) {
          let {allFriends, chosenFriends} = JSON.parse(localStorage.getItem('myFriends'));
            this.allFriends = allFriends;
            this.chosenFriends = chosenFriends;
            this.showApp();
            this.renderFriends();
        } else {
            try {
                await this.auth();
                this.allFriends = await this.callApi('friends.get', {fields: 'photo_100'});
                this.showApp();
                this.renderFriends();

            } catch (e) {
            console.log(e.message)
            }
        }
   }
   renderFriends() {
       const renderAllFriends = Handlebars.compile(this.templateAllFriends);
       const renderChosenFriends = Handlebars.compile(this.templateChosenFriends);
       const allFriendsHtml = renderAllFriends(this.allFriends);
       const chosenFriendsHtml = renderChosenFriends(this.chosenFriends);

       this.allFriendsResult.innerHTML = allFriendsHtml;
       this.chosenFriendResult.innerHTML = chosenFriendsHtml
   }
}

export default (param) => {
    new startApp(param)
}