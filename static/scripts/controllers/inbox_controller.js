Inbox.InboxController = Ember.ArrayController.extend({
  itemController: 'message',
  showContent: false,
  unshowContent: function() {
    this.set('showContent', false);
  }
});