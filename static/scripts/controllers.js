var inboxApp = angular.module('inboxApp', []);

inboxApp.controller('MessageCtrl', function ($scope) {
  $scope.messages = [
    {
      id: '1',
      type: 'New Patient',
      time: '3:55pm',
      status: 'incomplete',
      sender: {
        name: 'Smith, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '2',
      type: 'Birth Outcome Report',
      time: '1:23pm',
      status: 'ok',
      sender: {
        name: 'Smith, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '3',
      type: 'Monthly Report',
      time: '2 Feb 2014',
      status: 'good',
      sender: {
        name: 'Rivers, Joan',
        role: 'Administrator',
        clinic: 'Ganze Clinic'
      }
    },{
      id: '4',
      type: 'New Patient',
      time: '2 Dec 2013',
      status: 'ok',
      sender: {
        name: 'Jones, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '5',
      type: 'Birth Outcome Report',
      time: '12 Oct 2013',
      status: 'ok',
      sender: {
        name: 'Smith, Sarah',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '6',
      type: 'Monthly Report',
      time: '2 Oct 2013',
      status: 'good',
      sender: {
        name: 'Rivers, Gareth',
        role: 'Administrator',
        clinic: 'Ganze Clinic'
      }
    },{
      id: '7',
      type: 'New Patient',
      time: '23 Feb 2013',
      status: 'incomplete',
      sender: {
        name: 'Davidson, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '8',
      type: 'Birth Outcome Report',
      time: '22 Feb 2013',
      status: 'good',
      sender: {
        name: 'Smith, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '9',
      type: 'Monthly Report',
      time: '2 Feb 2013',
      status: 'incomplete',
      sender: {
        name: 'Rivers, Joan',
        role: 'Administrator',
        clinic: 'Ganze Clinic'
      }
    }
  ];

  $scope.selected = undefined;

  $scope.setMessage = function(id) {
    $scope.messages.forEach(function(message) {
      if (message.id === id) {
        $scope.selected = message;
      }
    });
  }
});