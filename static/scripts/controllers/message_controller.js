Inbox.MessageController = Ember.ObjectController.extend({
  needs: ['inbox'],
  actions: {
    select: function() {
      this.get('controllers.inbox').set('showContent', true);
      this.store.all('message').forEach(function(message) {
        message.set('selected', false);
      });
      this.set('selected', true);
    }
  }
});