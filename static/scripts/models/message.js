Inbox.Message = DS.Model.extend({
  type: DS.attr('string'),
  form: DS.attr('string'),
  time: DS.attr('string'),
  valid: DS.attr('boolean'),
  verified: DS.attr('boolean'),
  sender_name: DS.attr('string'),
  sender_role: DS.attr('string'),
  sender_clinic: DS.attr('string'),
  selected: DS.attr('boolean')
});

Inbox.Message.FIXTURES = [
  {
    id: 1,
    type: 'form',
    form: 'Prenatal Care',
    time: '3:55pm',
    valid: true,
    verified: true,
    sender_name: 'Smith, Susan',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 11,
    type: 'message',
    form: 'Message',
    time: '2 Dec 2013',
    valid: true,
    verified: true,
    sender_name: 'Jones, Susan',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 2,
    type: 'form',
    form: 'Antenatal Care',
    time: '1:23pm',
    valid: false,
    verified: false,
    sender_name: 'Smith, Susan',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 3,
    type: 'form',
    form: 'Stock Monitoring',
    time: '2 Feb 2014',
    valid: true,
    verified: true,
    sender_name: 'Rivers, Joan',
    sender_role: 'Administrator',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 10,
    type: 'message',
    form: 'Message',
    time: '2 Dec 2013',
    valid: true,
    verified: false,
    sender_name: 'Jones, Susan',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 4,
    type: 'form',
    form: 'Prenatal Care',
    time: '2 Dec 2013',
    valid: true,
    verified: true,
    sender_name: 'Jones, Susan',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 5,
    type: 'form',
    form: 'Antenatal Care',
    time: '12 Oct 2013',
    valid: true,
    verified: true,
    sender_name: 'Smith, Sarah',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 6,
    type: 'form',
    form: 'Monthly Report',
    time: '2 Oct 2013',
    valid: false,
    verified: false,
    sender_name: 'Rivers, Gareth',
    sender_role: 'Administrator',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 7,
    type: 'form',
    form: 'Prenatal Care',
    time: '23 Feb 2013',
    valid: false,
    verified: true,
    sender_name: 'Davidson, Susan',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 8,
    type: 'form',
    form: 'Antenatal Care',
    time: '22 Feb 2013',
    valid: true,
    verified: true,
    sender_name: 'Smith, Susan',
    sender_role: 'Clinician',
    sender_clinic: 'Ganze Clinic'
  },
  {
    id: 9,
    type: 'form',
    form: 'Stock Monitoring',
    time: '2 Feb 2013',
    valid: true,
    verified: false,
    sender_name: 'Rivers, Joan',
    sender_role: 'Administrator',
    sender_clinic: 'Ganze Clinic'
  }
];