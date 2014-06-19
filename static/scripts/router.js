Inbox.Router.map(function() {
  this.resource('inbox', { path: '/' });
});

Inbox.InboxRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  }
});