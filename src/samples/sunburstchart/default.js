export class BasicUse {
  constructor() {
    this.ndatasource = [
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Sales',
        'JobGroup': 'Executive',
        'EmployeesCount': 50
      },
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Sales',
        'JobGroup': 'Analyst',
        'EmployeesCount': 40
      },
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Marketing',
        'EmployeesCount': 40
      },
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Technical',
        'JobGroup': 'Testers',
        'EmployeesCount': 55
      },
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Windows',
        'EmployeesCount': 175
      },
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Web',
        'EmployeesCount': 70
      },
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Management',
        'EmployeesCount': 40
      },
      {
        'Category': 'Employees',
        'Country': 'USA',
        'JobDescription': 'Accounts',
        'EmployeesCount': 60
      },
      {
        'Category': 'Employees',
        'Country': 'India',
        'JobDescription': 'Technical',
        'JobGroup': 'Testers',
        'EmployeesCount': 43
      },
      {
        'Category': 'Employees',
        'Country': 'India',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Windows',
        'EmployeesCount': 125
      },
      {
        'Category': 'Employees',
        'Country': 'India',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Web',
        'EmployeesCount': 60
      },
      {
        'Category': 'Employees',
        'Country': 'India',
        'JobDescription': 'HR Executives',
        'EmployeesCount': 70
      },
      {
        'Category': 'Employees',
        'Country': 'India',
        'JobDescription': 'Accounts',
        'EmployeesCount': 45
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Sales',
        'JobGroup': 'Executive',
        'EmployeesCount': 30
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Sales',
        'JobGroup': 'Analyst',
        'EmployeesCount': 40
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Marketing',
        'EmployeesCount': 50
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Technical',
        'JobGroup': 'Testers',
        'EmployeesCount': 40
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Windows',
        'EmployeesCount': 65
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Web',
        'EmployeesCount': 27
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Management',
        'EmployeesCount': 33
      },
      {
        'Category': 'Employees',
        'Country': 'Germany',
        'JobDescription': 'Accounts',
        'EmployeesCount': 55
      },
      {
        'Category': 'Employees',
        'Country': 'UK',
        'JobDescription': 'Technical',
        'JobGroup': 'Testers',
        'EmployeesCount': 45
      },
      {
        'Category': 'Employees',
        'Country': 'UK',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Windows',
        'EmployeesCount': 96
      },
      {
        'Category': 'Employees',
        'Country': 'UK',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Web',
        'EmployeesCount': 55
      },
      {
        'Category': 'Employees',
        'Country': 'UK',
        'JobDescription': 'HR Executives',
        'EmployeesCount': 60
      },
      {
        'Category': 'Employees',
        'Country': 'UK',
        'JobDescription': 'Accounts',
        'EmployeesCount': 30
      },
      {
        'Category': 'Employees',
        'Country': 'France',
        'JobDescription': 'Technical',
        'JobGroup': 'Testers',
        'EmployeesCount': 40
      },
      {
        'Category': 'Employees',
        'Country': 'France',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Windows',
        'EmployeesCount': 65
      },
      {
        'Category': 'Employees',
        'Country': 'France',
        'JobDescription': 'Technical',
        'JobGroup': 'Developers',
        'JobRole': 'Web',
        'EmployeesCount': 27
      },
      {
        'Category': 'Employees',
        'Country': 'France',
        'JobDescription': 'Marketing',
        'EmployeesCount': 50
      }
    ];
    this.legend = {visible: true, position: 'top'};
    this.datalabel = {visible: true};
    this.zooming = {enable: false};
    this.tooltip = {visible: true};
    this.size = { height: '600px' };
    this.title = {text: 'Employees Count'};
    this.levels = [
		{ groupMemberPath: 'Country' },
		{ groupMemberPath: 'JobDescription' },
		{ groupMemberPath: 'JobGroup' },
		{ groupMemberPath: 'JobRole' }
    ];
  }
}
