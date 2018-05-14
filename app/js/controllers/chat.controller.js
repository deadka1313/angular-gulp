function chatCtrl(ChatService, $firebaseAuth) {
	var vm = this;
	var auth = $firebaseAuth();

	vm.messages = ChatService.getMessages();
	vm.shownMessages = ChatService.shownMessages();

	vm.sendMessage = function () {
		var message = {};
		if (vm.author) {
			message = {
				authorName: vm.author.displayName,
				authorId: vm.author.uid,
				authorPhoto: vm.author.photoURL,
				text: vm.newMessage
			};
		} else {
			alert('Неавторизованный пользователь!');
		}

		if (vm.newMessage) {
			ChatService.sendMessage(message);
			vm.newMessage = '';
			var div = $(".chat-body");
			div.scrollTop(div.prop('scrollHeight'));
		} else {
			alert("Введите сообщение");
		}
	};

	vm.login = function () {
		auth.$signInWithPopup('google');
	};

	vm.logout = function () {
		auth.$signOut();
	};

	auth.$onAuthStateChanged(function (authData) {
		vm.author = authData;
	});
}

angular.module('cbsChat')
	.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl]);
