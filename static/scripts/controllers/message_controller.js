Inbox.MessageController = Ember.ObjectController.extend({
  actions: {
    select: function() {
      this.store.all('message').forEach(function(message) {
        message.set('selected', false);
      });
      this.set('selected', true);
    }
  }
});