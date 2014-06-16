var inboxApp = angular.module('inboxApp', []);

inboxApp.controller('MessageCtrl', function ($scope) {
  
  $scope.messages = [
    {
      id: '1',
      type: 'form',
      form: 'Prenatal Care',
      time: '3:55pm',
      status: 'incomplete',
      sender: {
        name: 'Smith, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '11',
      type: 'message',
      form: 'Message',
      time: '2 Dec 2013',
      status: 'ok',
      sender: {
        name: 'Jones, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '2',
      type: 'form',
      form: 'Antenatal Care',
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
      type: 'form',
      form: 'Stock Monitoring',
      time: '2 Feb 2014',
      status: 'good',
      sender: {
        name: 'Rivers, Joan',
        role: 'Administrator',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '10',
      type: 'message',
      form: 'Message',
      time: '2 Dec 2013',
      status: 'ok',
      sender: {
        name: 'Jones, Susan',
        role: 'Clinician',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '4',
      type: 'form',
      form: 'Prenatal Care',
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
      type: 'form',
      form: 'Antenatal Care',
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
      type: 'form',
      form: 'Monthly Report',
      time: '2 Oct 2013',
      status: 'good',
      sender: {
        name: 'Rivers, Gareth',
        role: 'Administrator',
        clinic: 'Ganze Clinic'
      }
    },
    {
      id: '7',
      type: 'form',
      form: 'Prenatal Care',
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
      type: 'form',
      form: 'Antenatal Care',
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
      type: 'form',
      form: 'Stock Monitoring',
      time: '2 Feb 2013',
      status: 'incomplete',
      sender: {
        name: 'Rivers, Joan',
        role: 'Administrator',
        clinic: 'Ganze Clinic'
      }
    }
  ];
  $scope.forms = [
    {
      code: 'PREN',
      name: 'Prenatal Care'
    },
    {
      code: 'ANTE',
      name: 'Antenatal Care'
    },
    {
      code: 'STCK',
      name: 'Stock Monitoring'
    }
  ];

  $scope.selected = undefined;
  $scope.filter = 'message';
  $scope.selectedForm = $scope.forms[1];

  $scope.setMessage = function(id) {
    $scope.messages.forEach(function(message) {
      if (message.id === id) {
        $scope.selected = message;
      }
    });
  };

  $scope.setForm = function(form) {
    $scope.selectedForm = form;
  };

  $scope.tab = function(filter) {
    $scope.filter = filter;
  };

  $scope.checkFilter = function() {
    return function(message) {
      return message.type === $scope.filter && 
            ($scope.filter === 'message' || message.form === $scope.selectedForm.name);
    };
  };

});